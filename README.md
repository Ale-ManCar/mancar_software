# Mancar Software

Corporate website for Mancar Software, built with Next.js.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Environment

Configure these public variables in the website hosting provider before launch:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
NEXT_PUBLIC_SUPABASE_LEAD_FUNCTION_URL=
NEXT_PUBLIC_GA_ID=
```

Configure these secrets in Supabase Edge Functions:

```bash
ALLOWED_ORIGINS="https://mancarsoftware.com,http://localhost:3000"
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
RESEND_FROM="Mancar Software <contacto@mancarsoftware.com>"
LEAD_NOTIFICATION_EMAIL="contacto@mancarsoftware.com"
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
RATE_LIMIT_SALT=
```

Configure these GitHub repository secrets for Supabase deployment:

```bash
SUPABASE_ACCESS_TOKEN=
SUPABASE_PROJECT_REF=
```

`NEXT_PUBLIC_GA_ID` is optional. The lead form requires `NEXT_PUBLIC_SUPABASE_LEAD_FUNCTION_URL`, Turnstile, Supabase, and Resend to submit successfully.

Apply the Supabase migration in `supabase/migrations/202608250001_create_lead_requests.sql` before enabling the function in production.

## Lead Form Flow

The contact form submits to the Supabase Edge Function configured in `NEXT_PUBLIC_SUPABASE_LEAD_FUNCTION_URL`.

It includes:

- Client and server validation.
- Honeypot anti-spam field.
- Cloudflare Turnstile verification.
- Basic rate limiting.
- Supabase PostgreSQL storage in `lead_requests`.
- Email notification through Resend.
- A generated reference ID for each valid request.
- WhatsApp fallback link for users who prefer direct contact.

## Supabase Deployment

The GitHub Action in `.github/workflows/deploy-supabase.yml` deploys migrations and the `submit-lead` Edge Function when files under `supabase/**` change.

Set Supabase function secrets with the Supabase CLI or dashboard. Do not commit real values.

## Validation

```bash
npm run lint -- --max-warnings=0
npm run build
```

## Security Notes

Never commit real credentials. Keep `.env*` files ignored and configure production secrets only in the deployment platform.
