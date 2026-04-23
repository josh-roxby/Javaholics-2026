# Javaholics 2026

Coffee shop website for Javaholics, Fairview, Dublin. Next.js 16, App Router, TypeScript, Tailwind.

## Local development

```bash
npm install
npm run dev
```

Dev server runs on http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

All pages prerender as static content — no server needed at runtime beyond the Next.js handler.

## Deploy

Any Next.js host works. Recommended: **Vercel** (zero config).

- Build command: `next build`
- Output directory: `.next`
- Install command: `npm install`
- Node version: 20.x (see `engines` in `package.json`)

Static assets live in `public/`. Fonts load from Google Fonts via `app/globals.css`.

## Project layout

```
app/
  layout.tsx                  Root shell, metadata, fonts
  globals.css                 CSS variables, keyframes, utility classes
  icon.svg                    Favicon (bean logo)
  page.tsx                    Landing page
  coffee/ people/ store/ visit/   Subpages
components/
  bean.tsx, bean-field.tsx    SVG bean + canvas physics
  nav.tsx, footer.tsx, page-hero.tsx
  sections/                   Landing + subpage sections
lib/
  roasts.ts                   Typed roast data
public/                       Static assets served at /
design-reference/             Original Claude-design prototype (kept for reference)
```

## Design system

- Palette: deep navy `#0A1220` base, cream ink `#E8DFC9`, coffee browns, terracotta ember `#D87850`.
- Type: Fraunces (display) + Inter Tight (body) + JetBrains Mono (labels).
- Night mode only. Design canvas width is 1440 — mobile breakpoints are not in yet.

## Branches

- `main` — deployable baseline.
- `upload` — active development.
