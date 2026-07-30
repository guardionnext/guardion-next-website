# Guardion

Marketing site for **Guardion** — an Australian specialist protection and
investigations firm. Close protection and lawful private investigations for
high-net-worth individuals, executives, family offices and organisations.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com) primitives (shadcn/ui — "new-york")
- [lucide-react](https://lucide.dev) icons

## Getting started

Requires Node.js 18.18+.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint with `eslint-config-next`       |

## Project structure

```
src/
  app/                 # App Router pages, layout, metadata routes (sitemap/robots)
    services/          # Services overview + six service detail pages
  components/
    site/              # Header, Footer, ContactBand, Logo, ServicePage
    ui/                # shadcn/ui primitives
  lib/                 # site config + utilities
  assets/              # imported images
public/                # static files served at the web root
```

Site-wide content (contact details, service list, licences) lives in
`src/lib/site.ts`.

## Contact form email (Resend)

The contact form posts to `src/app/api/contact/route.ts`, which sends the
enquiry via [Resend](https://resend.com). It reads three environment variables
(see `.env.example`):

| Variable             | Required | Notes                                                             |
| -------------------- | -------- | ----------------------------------------------------------------- |
| `RESEND_API_KEY`     | yes\*    | From <https://resend.com/api-keys>.                               |
| `CONTACT_FROM_EMAIL` | no       | Sender. Must be a domain verified in Resend. Defaults to Resend's shared `onboarding@resend.dev`. |
| `CONTACT_TO_EMAIL`   | no       | Where enquiries are delivered. Defaults to `info@guardion.com.au`. |

\* The key is read at request time, so the app **builds and deploys without
it** — the form simply returns a clear "email is not configured" error until the
key is added. Copy `.env.example` to `.env.local` for local development.

## Deploying to Vercel

1. Import the repository into Vercel — it auto-detects Next.js (no config
   needed). The app deploys successfully with no environment variables set.
2. When ready to enable the contact form, add the variables above under
   **Project → Settings → Environment Variables**, then redeploy.
3. To send from `info@guardion.com.au` (rather than `onboarding@resend.dev`),
   verify the `guardion.com.au` domain in Resend and set `CONTACT_FROM_EMAIL`
   accordingly.
