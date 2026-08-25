import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  consent?: unknown;
  source?: unknown;
  website?: unknown;
};

type ValidLead = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  source: string;
};

const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || "mancarsoftwares@gmail.com";
const projectTypes = new Set([
  "Sitio web",
  "Sistema a medida",
  "Tienda virtual",
  "Soporte o mantenimiento",
  "Necesito orientación",
]);

function clean(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maximum) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
  if (!/^(?:\+593\s?)?0?9\d{8}$/.test(phone.replace(/\s|-/g, ""))) fields.phone = "Ingresa un WhatsApp ecuatoriano válido.";
  if (!projectTypes.has(projectType)) fields.projectType = "Selecciona un tipo de proyecto válido.";
  if (message.length < 12) fields.message = "Describe brevemente qué necesitas resolver.";
  if (payload.consent !== true) fields.consent = "Debes aceptar el uso de tus datos para responder la solicitud.";

  if (Object.keys(fields).length) return { fields };
  return { data: { name, email, phone, projectType, message, source }, fields };
}

function buildEmail(data: ValidLead) {
  const rows = [
    ["Nombre", data.name],
    ["Email", data.email],
    ["Teléfono", data.phone],
    ["Tipo de proyecto", data.projectType],
    ["Origen", data.source],
  ];
  const htmlRows = rows
    .map(([label, value]) => {
      const safeLabel = escapeHtml(label);
      const safeValue = escapeHtml(value);
      return `<tr><td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#334155;">${safeLabel}</td><td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${safeValue}</td></tr>`;
    })
    .join("");

  const text = [
    "Nueva solicitud desde la web de Mancar Software",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Mensaje:",
    data.message,
  ].join("\n");

  const html = `
    <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
        <div style="padding:24px;background:#07111f;color:#ffffff;">
          <p style="margin:0;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#78dcff;">Mancar Software</p>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.2;">Nueva solicitud web</h1>
        </div>
        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">${htmlRows}</table>
          <div style="margin-top:24px;">
            <p style="margin:0 0 8px;font-size:13px;font-weight:800;text-transform:uppercase;color:#0c6d92;">Mensaje</p>
            <p style="margin:0;white-space:pre-wrap;line-height:1.7;color:#334155;">${escapeHtml(data.message)}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  return { text, html };
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (clean(payload.website, 120)) {
    return NextResponse.json({ ok: true });
  }

  const { data, fields } = validate(payload);
  if (!data) {
    return NextResponse.json({ error: "Revisa los campos marcados.", fields }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json({ error: "El envío automático todavía no está configurado." }, { status: 500 });
  }

  const { text, html } = buildEmail(data);
  const from = process.env.RESEND_FROM || "Mancar Software <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipientEmail],
      reply_to: data.email,
      subject: `Nueva solicitud web - ${data.projectType}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "No pudimos enviar la solicitud. Inténtalo nuevamente." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
