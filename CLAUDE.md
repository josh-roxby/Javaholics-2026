# Javaholics 2026

## Project

Website for **Javaholics**, a coffee shop on Merville Ave, Fairview, Dublin 3 —
across from Fairview Park. Focus is the coffee and the vibe: good beans, house
music, sun across the park, a crew of regulars. The site is a modern,
interactive digital experience that talks about the space, the coffee, the
people, and the community around it.

**Stack**: Next.js 16 App Router, TypeScript, Tailwind, Framer Motion (installed, unused — reserved for hero redesign).
**Design tokens**: deep navy `#0A1220`, cream ink `#E8DFC9`, coffee browns, terracotta ember `#D87850`. Fraunces + Inter Tight + JetBrains Mono. Night mode only.

## Branches

- `main` — deployable baseline.
- `upload` — active development branch.

## Done

- [x] Port Claude-design prototype into Next.js App Router (all 5 routes).
- [x] Hosting essentials: `public/`, favicon, OpenGraph, Node pin, README.
- [x] Landing page polish: cursor over bean field, bean canvas pauses when offscreen or tab hidden.
- [x] `/store` — centered coming-soon at `100dvh`.
- [x] `/visit` — single-viewport layout (title + address/hours/getting-here + map).
- [x] `/people` story-led redesign: four featured Fairview locals with Polaroid-tilted portraits + pull quotes + 2-paragraph stories, leading the staff carousel and community marquee.
- [x] Mobile bottom pill nav: floating pill, circular icon+label buttons (Home / Coffee / People / Store / Visit / Music), ember-filled active state, safe-area-aware.
- [x] Full mobile responsive pass: `overflow-x: clip` safety net, responsive spacing CSS vars, utility classes (`.jv-grid-stack`, `.jv-section-title`, `.jv-grid-header-meta`, `.jv-people-card`, `.jv-quote-card`, `.jv-edge-fade`, `.jv-hero-title`, `.jv-story-*`, `.jv-footer-bottom`, `.jv-coffee-mobile`). Every landing section + subpages collapse cleanly on phones.
- [x] Mobile coffee carousel: tabs + detail layout hidden under 768px, replaced by a horizontal scroll-snap carousel of full roast cards.
- [x] Sticky story scroller on `/people`: portrait column `position: sticky` while body scrolls past (desktop only).
- [x] Device-aware `MapsLink`: Apple devices → Apple Maps, everyone else → Google Maps. Address now Merville Ave, Fairview, Dublin 3, D03 XK52.
- [x] Humanizing touches: Polaroid-tilted story portraits with drop shadow, hand-drawn wobbly SVG dividers (three variants) replacing flat hairlines, Dara's pick annotation panel in the coffee section.
- [x] Site enter gate: full-screen branded overlay ("Est. 2019 · Fairview, Dublin", italic Javaholics, Enter CTA). Fades out on click, `sessionStorage` persistence so same-session navigation skips it. Captures the first user gesture for autoplay and gives the bean canvas time to load.
- [x] Spotify house-playlist player: iframe-based, lazy-mounted. Desktop fixed circular FAB bottom-left; mobile 6th pill-nav button. Shared `PlayerProvider` context, Escape-to-close, backdrop-click-to-close. Music-on pulse indicator on button while player is open. Playlist ID in `lib/config.ts`.

## TODO

Humanizing + polish:

- [ ] Swap placeholder Spotify playlist ID in `lib/config.ts` for the real one.
- [ ] "Now playing" strip on desktop — tooltip-style label beside the FAB.
- [ ] Today's playlist strip — thin row under the landing marquee with 3 track names + curator attribution.
- [ ] Imperfect typography pass — deliberate ragged line breaks, drop cap, mixed italic/roman in one phrase.
- [ ] Misaligned "Fig. 01" label on the Space portrait with handwritten SVG arrow curling in.
- [ ] Swap generic copy for specific, Dublin-flavoured copy (named buses, named tracks, named moments).

Bigger features (from the original TODO):

- [ ] Hero redesign — the interactive motion concept on top of the Next.js foundation (Framer Motion is installed for this).
- [ ] Roastery timeline on `/coffee` (prototype has this in `design-reference/subpages.jsx`).
- [ ] Contact form on `/visit` (prototype has this).
- [ ] Richer `/store` content when the shop launches (prototype has a bag carousel).
- [ ] Day-mode palette (design-reference `tokens.js` has one defined).

Content swaps (waiting on real material):

- [ ] Real photography replacing bean-SVG portraits.
- [ ] Real regulars' stories replacing placeholders (Siobhán, Oisín, Priya, Hannah).
