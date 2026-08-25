import { createClient } from 'jsr:@supabase/supabase-js@2';

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

const projectTypes = new Set([
  'Sitio web',
  'Sistema a medida',
  'Tienda virtual',
  'Soporte o mantenimiento',
  'Necesito orientación',
]);
const textEncoder = new TextEncoder();
const defaultOrigins = 'http://localhost:3000,http://127.0.0.1:3000,https://mancarsoftware.com';

function json(body: unknown, status: number, origin?: string) {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
  });
  if (origin) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Vary', 'Origin');
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function allowedOrigin(request: Request) {
  const origin = request.headers.get('Origin');
  if (!origin) return undefined;
  const configuredOrigins = Deno.env.get('ALLOWED_ORIGINS') || defaultOrigins;
  const allowed = configuredOrigins.split(',').map((value) => value.trim()).filter(Boolean);
  return allowed.includes(origin) ? origin : null;
}

function clean(value: unknown, maximum: number) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ').slice(0, maximum) : '';
}

function validate(payload: LeadPayload): { data?: ValidLead; fields: Record<string, string> } {
  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120).toLowerCase();
  const phone = clean(payload.phone, 24);
  const projectType = clean(payload.projectType, 40);
  const message = typeof payload.message === 'string' ? payload.message.trim().slice(0, 1200) : '';
  const source = clean(payload.source, 80) || 'website';
  const fields: Record<string, string> = {};

  if (name.length < 2) fields.name = 'Ingresa tu nombre.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = 'Ingresa un email válido.';
  if (!/^(?:\+593\s?)?0?9\d{8}$/.test(phone.replace(/\s|-/g, ''))) fields.phone = 'Ingresa un WhatsApp ecuatoriano válido.';
  if (!projectTypes.has(projectType)) fields.projectType = 'Selecciona un tipo de proyecto válido.';
  if (message.length < 12) fields.message = 'Describe brevemente qué necesitas resolver.';
  if (payload.consent !== true) fields.consent = 'Debes aceptar el uso de tus datos para responder la solicitud.';

  if (Object.keys(fields).length) return { fields };
  return { data: { name, email, phone, projectType, message, source }, fields };
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', textEncoder.encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function verifyTurnstile(token: string, ip: string, secret: string) {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character);
}

function createReference() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  return `MS-${date}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

async function notifyTeam(id: string, data: ValidLead, apiKey: string) {
  const safe = {
    id: escapeHtml(id),
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone),
    projectType: escapeHtml(data.projectType),
    message: escapeHtml(data.message).replace(/\n/g, '<br>'),
    source: escapeHtml(data.source),
  };
  const whatsappUrl = `https://wa.me/593986951419?text=${encodeURIComponent(`Hola ${data.name}, recibimos tu solicitud (${id}) sobre ${data.projectType}.`)}`;
  const text = [
    'MANCAR SOFTWARE · NUEVA SOLICITUD COMERCIAL',
    '',
    `Referencia: ${id}`,
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.phone}`,
    `Tipo de proyecto: ${data.projectType}`,
    `Origen: ${data.source}`,
    '',
    'Mensaje:',
    data.message,
  ].join('\n');
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
                <p style="margin:0 0 18px;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#0787b4;">Referencia ${safe.id}</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${[
                    ['Nombre', safe.name],
                    ['Email', `<a href="mailto:${safe.email}" style="color:#0c6d92;text-decoration:none;">${safe.email}</a>`],
                    ['WhatsApp', safe.phone],
                    ['Proyecto', safe.projectType],
                    ['Origen', safe.source],
                  ].map(([label, value]) => `<tr><td style="padding:13px 0;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:800;text-transform:uppercase;color:#64748b;width:34%;">${label}</td><td style="padding:13px 0;border-bottom:1px solid #e2e8f0;font-size:16px;font-weight:700;color:#07111f;">${value}</td></tr>`).join('')}
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

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: Deno.env.get('RESEND_FROM') || 'Mancar Software <onboarding@resend.dev>',
      to: [Deno.env.get('LEAD_NOTIFICATION_EMAIL') || 'mancarsoftwares@gmail.com'],
      subject: `${id} · ${data.projectType} · ${data.name}`,
      text,
      html,
    }),
  });
  return response.ok;
}

Deno.serve(async (request) => {
  const origin = allowedOrigin(request);
  if (origin === null) return json({ error: 'Origen no autorizado.' }, 403);

  if (request.method === 'OPTIONS') {
    if (!origin) return json({ error: 'Origen no autorizado.' }, 403);
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        Vary: 'Origin',
      },
    });
  }

  if (request.method !== 'POST' || !origin) return json({ error: 'Ruta no encontrada.' }, 404, origin || undefined);
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > 24_576) return json({ error: 'La solicitud es demasiado grande.' }, 413, origin);
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) return json({ error: 'Formato de solicitud no válido.' }, 415, origin);

  let payload: LeadPayload;
  try {
    payload = await request.json() as LeadPayload;
  } catch {
    return json({ error: 'No pudimos leer la solicitud.' }, 400, origin);
  }

  if (clean(payload.website, 200)) return json({ id: createReference(), status: 'pending', notificationSent: true }, 201, origin);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const turnstileSecret = Deno.env.get('TURNSTILE_SECRET_KEY');
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const rateLimitSalt = Deno.env.get('RATE_LIMIT_SALT');
  if (!supabaseUrl || !serviceRoleKey || !turnstileSecret || !resendApiKey || !rateLimitSalt) {
    console.error('The submit-lead function is missing required environment variables.');
    return json({ error: 'El formulario no está configurado correctamente.' }, 503, origin);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const forwardedIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = request.headers.get('cf-connecting-ip') || forwardedIp || 'unknown';
  const windowStart = Math.floor(Date.now() / 600_000);
  const rateKey = await sha256(`${rateLimitSalt}:${ip}`);
  const { data: withinLimit, error: rateError } = await supabase.rpc('consume_lead_rate_limit', {
    p_key: rateKey,
    p_window_start: windowStart,
    p_max_attempts: 5,
  });
  if (rateError) {
    console.error('Rate-limit operation failed.', rateError.message);
    return json({ error: 'No pudimos procesar la solicitud.' }, 500, origin);
  }
  if (!withinLimit) return json({ error: 'Has realizado varias solicitudes. Espera unos minutos antes de intentarlo nuevamente.' }, 429, origin);

  const token = clean(payload.turnstileToken, 2048);
  if (!token || !await verifyTurnstile(token, ip, turnstileSecret)) {
    return json({
      error: 'No pudimos verificar la solicitud. Actualiza la página e inténtalo nuevamente.',
      fields: { turnstile: 'Verificación inválida o vencida.' },
    }, 400, origin);
  }

  const { data, fields } = validate(payload);
  if (!data) return json({ error: 'Revisa los campos indicados.', fields }, 422, origin);

  const requestHash = await sha256(`${data.email}|${data.phone}|${data.projectType}`.toLowerCase());
  const duplicateThreshold = new Date(Date.now() - 600_000).toISOString();
  const { data: duplicate, error: duplicateError } = await supabase
    .from('lead_requests')
    .select('id, notification_status')
    .eq('request_hash', requestHash)
    .gte('created_at', duplicateThreshold)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (duplicateError) {
    console.error('Duplicate lookup failed.', duplicateError.message);
    return json({ error: 'No pudimos procesar la solicitud.' }, 500, origin);
  }

  if (duplicate) {
    let notificationSent = duplicate.notification_status === 'sent';
    if (!notificationSent) {
      try {
        notificationSent = await notifyTeam(duplicate.id, data, resendApiKey);
      } catch {
        notificationSent = false;
      }
      await supabase.from('lead_requests').update({
        notification_status: notificationSent ? 'sent' : 'failed',
        updated_at: new Date().toISOString(),
      }).eq('id', duplicate.id);
    }
    return json({ id: duplicate.id, status: 'pending', duplicate: true, notificationSent }, 200, origin);
  }

  const id = createReference();
  const { error: insertError } = await supabase.from('lead_requests').insert({
    id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    project_type: data.projectType,
    message: data.message,
    source: data.source,
    request_hash: requestHash,
    consent_accepted_at: new Date().toISOString(),
  });
  if (insertError) {
    console.error('Lead insert failed.', insertError.message);
    return json({ error: 'No pudimos guardar la solicitud.' }, 500, origin);
  }

  let notificationSent = false;
  try {
    notificationSent = await notifyTeam(id, data, resendApiKey);
  } catch {
    notificationSent = false;
  }
  const { error: notificationUpdateError } = await supabase.from('lead_requests')
    .update({
      notification_status: notificationSent ? 'sent' : 'failed',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);
  if (notificationUpdateError) console.error('Notification status update failed.', notificationUpdateError.message);

  return json({ id, status: 'pending', notificationSent }, 201, origin);
});
