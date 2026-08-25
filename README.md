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
NEXT_PUBLIC_GA_ID=
```

Configure these private server variables in the website hosting provider:

```bash
RESEND_API_KEY=
RESEND_FROM="Mancar Software <onboarding@resend.dev>"
LEAD_NOTIFICATION_EMAIL="mancarsoftwares@gmail.com"
```

`NEXT_PUBLIC_GA_ID` is optional. The contact form requires a deployment that supports Next.js API routes.

## Lead Form Flow

The contact form validates the fields in the browser, submits to `/api/leads`, and sends an automatic email notification to `mancarsoftwares@gmail.com`.

It includes:

- Client-side validation.
- Server-side validation.
- Honeypot anti-spam field.
- Privacy consent before sending the request.
- Email delivery through Resend.

## Validation

```bash
npm run lint -- --max-warnings=0
npm run build
```

## Security Notes

Never commit real credentials. Keep `.env*` files ignored and configure production secrets only in the deployment platform.
