import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  consent?: unknown;
  turnstileToken?: unknown;
  website?: unknown;
  source?: unknown;
};

type ValidLead = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  source: string;
};

type StorageResult = "stored" | "skipped" | "failed";

const projectTypes = new Set([
  "Sitio web",
  "Sistema a medida",
  "Tienda virtual",
  "Soporte o mantenimiento",
  "Necesito orientación",
]);

const attempts = new Map<string, { count: number; resetAt: number }>();
const windowMs = 10 * 60 * 1000;
const maxAttempts = 5;

function json(body: unknown, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  });
}

function clean(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maximum) : "";
}

function validate(payload: LeadPayload): { data?: ValidLead; fields: Record<string, string> } {
  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120).toLowerCase();
  const phone = clean(payload.phone, 24);
  const projectType = clean(payload.projectType, 40);
  const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 1200) : "";
  const source = clean(payload.source, 80) || "website";
  const fields: Record<string, string> = {};

  if (name.length < 2) fields.name = "Ingresa tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = "Ingresa un email válido.";
  if (!/^(?:\+593\s?)?0?9\d{8}$/.test(phone.replace(/\s|-/g, ""))) {
    fields.phone = "Ingresa un WhatsApp ecuatoriano válido.";
  }
  if (!projectTypes.has(projectType)) fields.projectType = "Selecciona un tipo de proyecto válido.";
  if (message.length < 12) fields.message = "Describe brevemente qué necesitas resolver.";
  if (payload.consent !== true) fields.consent = "Debes aceptar el uso de tus datos para responder la solicitud.";

  if (Object.keys(fields).length) return { fields };
  return { data: { name, email, phone, projectType, message, source }, fields };
}

function createReference() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `MS-${date}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

function clientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function consumeRateLimit(key: string) {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= maxAttempts) return false;
  current.count += 1;
  return true;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function storeLead(reference: string, lead: ValidLead): Promise<StorageResult> {
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) return "skipped";

  const requestHash = await sha256(`${lead.email}|${lead.phone}|${lead.projectType}`.toLowerCase());
  const response = await fetch(`${supabaseUrl}/rest/v1/lead_requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      id: reference,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      project_type: lead.projectType,
      message: lead.message,
      source: lead.source,
      request_hash: requestHash,
      consent_accepted_at: new Date().toISOString(),
      notification_status: "pending",
    }),
  });

  return response.ok ? "stored" : "failed";
}

async function updateNotificationStatus(reference: string, notificationSent: boolean) {
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) return;

  await fetch(`${supabaseUrl}/rest/v1/lead_requests?id=eq.${encodeURIComponent(reference)}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      notification_status: notificationSent ? "sent" : "failed",
      updated_at: new Date().toISOString(),
    }),
  }).catch(() => undefined);
}

async function sendLeadEmail(reference: string, lead: ValidLead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL || "contacto@mancarsoftware.com";
  const from = process.env.RESEND_FROM || "Mancar Software <onboarding@resend.dev>";
  if (!apiKey) return false;

  const safe = {
    reference: escapeHtml(reference),
    name: escapeHtml(lead.name),
    email: escapeHtml(lead.email),
    phone: escapeHtml(lead.phone),
    projectType: escapeHtml(lead.projectType),
    message: escapeHtml(lead.message).replace(/\n/g, "<br>"),
    source: escapeHtml(lead.source),
  };
  const whatsappUrl = `https://wa.me/593986951419?text=${encodeURIComponent(
    `Hola ${lead.name}, recibimos tu solicitud (${reference}) sobre ${lead.projectType}.`,
  )}`;
  const text = [
    "MANCAR SOFTWARE · NUEVA SOLICITUD COMERCIAL",
    "",
    `Referencia: ${reference}`,
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.phone}`,
    `Tipo de proyecto: ${lead.projectType}`,
    `Origen: ${lead.source}`,
    "",
    "Mensaje:",
    lead.message,
  ].join("\n");
  const html = `<!doctype html>
<html lang="es">
  <body style="margin:0;background:#f3f7fb;color:#07111f;font-family:Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f7fb;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="620" cellspacing="0" cellpadding="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr><td style="height:7px;background:#05a8d7;font-size:0;line-height:0;">&nbsp;</td></tr>
            <tr>
              <td style="padding:30px 36px;background:#07111f;color:#ffffff;">
                <div style="font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#78dcff;">Nueva solicitud comercial</div>
                <h1 style="margin:12px 0 0;font-size:36px;line-height:1.05;letter-spacing:-.04em;">Mancar Software</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 36px;">
                <p style="margin:0 0 18px;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0787b4;">Referencia ${safe.reference}</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${[
                    ["Nombre", safe.name],
                    ["Email", `<a href="mailto:${safe.email}" style="color:#0c6d92;text-decoration:none;">${safe.email}</a>`],
                    ["WhatsApp", safe.phone],
                    ["Proyecto", safe.projectType],
                    ["Origen", safe.source],
                  ].map(([label, value]) => `<tr><td style="padding:13px 0;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:800;text-transform:uppercase;color:#64748b;width:34%;">${label}</td><td style="padding:13px 0;border-bottom:1px solid #e2e8f0;font-size:16px;font-weight:700;color:#07111f;">${value}</td></tr>`).join("")}
                </table>
                <div style="margin-top:22px;padding:18px 20px;border-radius:14px;background:#effaff;color:#334155;font-size:16px;line-height:1.65;">${safe.message}</div>
                <p style="margin:26px 0 0;"><a href="${whatsappUrl}" style="display:inline-block;background:#07111f;color:#ffffff;text-decoration:none;border-radius:999px;padding:14px 20px;font-size:13px;font-weight:800;">Responder por WhatsApp</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `${reference} · ${lead.projectType} · ${lead.name}`,
      text,
      html,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 24_576) return json({ error: "La solicitud es demasiado grande." }, 413);
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ error: "Formato de solicitud no válido." }, 415);
  }

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return json({ error: "No pudimos leer la solicitud." }, 400);
  }

  if (clean(payload.website, 200)) {
    return json({ id: createReference(), status: "pending", notificationSent: true }, 201);
  }

  const ip = clientIp(request);
  if (!consumeRateLimit(ip)) {
    return json({ error: "Has realizado varias solicitudes. Espera unos minutos antes de intentarlo nuevamente." }, 429);
  }

  const token = clean(payload.turnstileToken, 2048);
  if (!token || !(await verifyTurnstile(token, ip))) {
    return json({
      error: "No pudimos verificar la solicitud. Actualiza la página e inténtalo nuevamente.",
      fields: { turnstile: "Verificación inválida o vencida." },
    }, 400);
  }

  const { data, fields } = validate(payload);
  if (!data) return json({ error: "Revisa los campos indicados.", fields }, 422);

  const id = createReference();
  const storage = await storeLead(id, data);
  const notificationSent = await sendLeadEmail(id, data);
  if (storage === "stored") await updateNotificationStatus(id, notificationSent);

  if (storage === "failed" && !notificationSent) {
    return json({ error: "La solicitud fue validada, pero no pudimos guardarla ni notificar al equipo." }, 503);
  }

  if (storage === "skipped" && !notificationSent) {
    return json({ error: "La solicitud fue validada, pero el formulario no está conectado al servidor de producción." }, 503);
  }

  return json({ id, status: "pending", notificationSent, stored: storage === "stored" }, 201);
}
