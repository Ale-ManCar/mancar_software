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

`NEXT_PUBLIC_GA_ID` is optional.

## Lead Form Flow

The contact form validates the fields in the browser and opens a prefilled email draft addressed to `mancarsoftwares@gmail.com`.

It includes:

- Client-side validation.
- Honeypot anti-spam field.
- Privacy consent before opening the email draft.
- No backend credentials or form provider configuration.

## Validation

```bash
npm run lint -- --max-warnings=0
npm run build
```

## Security Notes

Never commit real credentials. Keep `.env*` files ignored and configure production secrets only in the deployment platform when a backend is added.
