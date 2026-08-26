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
NEXT_PUBLIC_GA_ID=
```

Configure these private server variables in the website hosting provider:

```bash
RESEND_API_KEY=
RESEND_FROM="Mancar Software <onboarding@resend.dev>"
LEAD_NOTIFICATION_EMAIL="mancarsoftwares@gmail.com"
TURNSTILE_SECRET_KEY=
```

`NEXT_PUBLIC_GA_ID` is optional. The contact form requires a deployment environment that supports Next.js API routes.

Use `.env.example` as the reference for local or deployment configuration. Keep real values in ignored local files or secure environment settings only.

## GitHub Pages Preview

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds a static preview for `https://ale-mancar.github.io/mancar_software/`.

The preview is for reviewing the website design and navigation. GitHub Pages cannot run `/api/leads`, so the contact form shows a preview notice instead of sending email. The automatic Resend + Turnstile form works on a runtime that supports Next.js API routes.

## Lead Form Flow

The contact form validates the fields in the browser, submits to `/api/leads`, and sends an automatic email notification to `mancarsoftwares@gmail.com`.

It includes:

- Client-side validation.
- Server-side validation.
- Honeypot anti-spam field.
- Cloudflare Turnstile verification.
- In-memory IP/user-agent rate limiting.
- Duplicate submission throttling.
- Suspicious content rejection before email delivery.
- Privacy consent before sending the request.
- Email delivery through Resend.
- Analytics events for form starts, submit attempts, validation errors, successful submissions, send errors, contact clicks, CTA clicks, social clicks, portfolio opens and demo opens when `NEXT_PUBLIC_GA_ID` is configured.

The rate limiter is process-local. For higher traffic or multi-region hosting, move the same rules to a shared store such as Redis, Upstash, or Cloudflare KV.

## Launch QA

Before publishing a final production launch, verify:

- The lead form sends an email to `mancarsoftwares@gmail.com`.
- Cloudflare Turnstile renders once, completes correctly, and blocks invalid submissions.
- Phone links open the dialer with `+593 98 695 1419`.
- Email links open a message to `mancarsoftwares@gmail.com`.
- Portfolio cards open the right case pages and public demos when available.
- Browser titles remain concise, for example `Diseño web | Mancar Software`.
- Social previews use `/brand/og-image.png`.
- Analytics receives the conversion events listed above.

## Cloudflare Turnstile

Create a Turnstile widget in Cloudflare and allow the local/deployed hostnames that will render the form. Use the public site key as `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the private secret key as `TURNSTILE_SECRET_KEY`.

## Validation

```bash
npm run lint -- --max-warnings=0
npm run build
```

## Security Notes

Never commit real credentials. Keep `.env*` files ignored and configure production secrets only in the deployment platform.
