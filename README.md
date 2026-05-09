# NeuroSpicy Mystic — Landing Page

Digital products storefront for the Divinely Distracted Goddesses & Starseeds alike.

- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind · Stripe · Framer Motion · Nodemailer · Mailchimp
- **Hosted on:** Render (`srv-d7t5g94m0tmc73dqrdf0`)
- **Domain:** [neurospicymystic.com](https://neurospicymystic.com)

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your keys
npm run dev                  # http://localhost:3000
```

## Build / production

```bash
npm run build
npm run start                # binds to $PORT (default 10000 for Render)
```

## Project layout

```
src/
  app/
    page.tsx               long-form sales page
    success/page.tsx       post-checkout thank-you + upsells
    api/
      checkout/route.ts    Stripe Checkout session creator
      webhook/route.ts     Stripe webhook → email download link
      newsletter/route.ts  Mailchimp signup (incl. Money Spell lead magnet)
  components/              presentational components for each section
  lib/
    products.ts            single source of truth for products
    stripe.ts              Stripe server client
    mailer.ts              Nodemailer/Workspace SMTP client
    mailchimp.ts           Mailchimp Marketing client
public/                    logo, founder photo, OG image, product images
```

## Environment

Production env lives in the Render dashboard. See `.env.example` for the full list.
Never commit real keys.

## License

© 2026 NeuroSpicy Mystic — all rights reserved.
