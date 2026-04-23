# Javaholics 2026

## Project

Website for **Javaholics**, a coffee shop on Fairview Strand, Dublin 3 — across
from Fairview Park. Focus is the coffee and the vibe: good beans, house
music, sun across the park, a crew of regulars. The site is a modern,
interactive digital experience that talks about the space, the coffee, the
people, and the community around it.

**Stack**: Next.js 16 App Router, TypeScript, Tailwind, Framer Motion (installed, unused yet).
**Design tokens**: deep navy `#0A1220`, cream ink `#E8DFC9`, coffee browns, terracotta ember `#D87850`. Fraunces + Inter Tight + JetBrains Mono. Night mode only.

## Branches

- `main` — deployable baseline.
- `upload` — active development branch.

## Done

- [x] Port Claude-design prototype into Next.js App Router (all 5 routes).
- [x] Hosting essentials: `public/`, favicon, OpenGraph, Node pin, README.
- [x] Landing page polish: cursor over bean field, bean canvas pauses when offscreen.
- [x] `/store` — centered coming-soon at `100dvh`.
- [x] `/visit` — single-viewport layout (title + address/hours/getting-here + map).
- [x] `/people` story-led redesign: four featured Fairview locals with portraits + pull quotes + 2-paragraph stories, leading the staff carousel and community marquee.
- [x] Mobile bottom pill nav: fixed floating pill, circular icon+label buttons for each page, ember-filled active state, safe-area-aware.

## TODO

Mobile pass (the big remaining piece):

- [ ] Landing sections responsive: hero stack, marquee, Space / Coffee / People / Community grids collapse to single column.
- [ ] Interactive sections mobile-tuned: coffee tabs (stack or horizontal scroll), people carousel (touch-tuned), community marquee (narrower cards).
- [ ] Subpages responsive: page-hero padding, `/visit` map stacks above info, `/coffee` subpage, `/people` stories single-column, `/store` centering holds on small screens.

Follow-ups after mobile:

- [ ] Hero redesign — the interactive motion concept on top of the Next.js foundation (Framer Motion is installed for this).
- [ ] Replace bean-portrait placeholders with real photography once it exists.
- [ ] Real regulars for the stories section (currently plausible placeholders).
- [ ] Richer `/store` content once the shop launches (prototype has a bag carousel in `design-reference/subpages.jsx`).
- [ ] Roastery timeline + contact form on appropriate pages (prototype has these in `design-reference/subpages.jsx`).
- [ ] Day-mode palette (design-reference `tokens.js` has one defined).
