# Mancar Software

Corporate website for Mancar Software, built with Next.js.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Environment

Configure these variables in the hosting provider before launch:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
RESEND_FROM="Mancar Software <contacto@mancarsoftware.com>"
LEAD_NOTIFICATION_EMAIL="contacto@mancarsoftware.com"
NEXT_PUBLIC_GA_ID=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

`NEXT_PUBLIC_GA_ID` is optional. `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are optional but recommended so leads are stored before email notification. The lead form requires Turnstile plus at least Supabase storage or Resend email to submit successfully.

Apply the Supabase migration in `supabase/migrations/202608250001_create_lead_requests.sql` before enabling Supabase storage.

## Lead Form Flow

The contact form submits to `POST /api/leads`.

It includes:

- Client and server validation.
- Honeypot anti-spam field.
- Cloudflare Turnstile verification.
- Basic rate limiting.
- Optional Supabase storage in `lead_requests`.
- Email notification through Resend.
- A generated reference ID for each valid request.
- WhatsApp fallback link for users who prefer direct contact.

## Validation

```bash
npm run lint -- --max-warnings=0
npm run build
```

## Security Notes

Never commit real credentials. Keep `.env*` files ignored and configure production secrets only in the deployment platform.
