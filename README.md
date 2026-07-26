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
