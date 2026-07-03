# The Integration Layer for Modern Teams — Hero

Pixel implementation of the Figma frame `MacBook Air - 71` (node 305:3354).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- GSAP 3.15 + @gsap/react (entrance timeline + ambient float)
- Fonts via `next/font/google`: Inter Tight (headings), Google Sans Flex (body/buttons)

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `components/Hero.tsx` — the whole composition. All coordinates are lifted 1:1
  from the 1280x832 Figma frame; the stage scales down to fit smaller viewports.
- `public/assets/` — SVG exports from Figma (hub, 8 app tiles, 8 label pills,
  card texture, halftone edge overlay).
- Dashed connectors, dots, arrowheads, frame lines, corner markers, badges and
  text are built in code from the Figma geometry.
