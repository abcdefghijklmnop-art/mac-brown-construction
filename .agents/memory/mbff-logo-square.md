---
name: MBFF Google logo square fix
description: The MBFF schema logo must use the square version at the correct path to avoid a 404 and black bars in Google search results.
---

## Rule
The JSON-LD `logo` field in `artifacts/mac-brown-nextjs/src/lib/schema.ts` must point to:
`${SITE_ORIGIN}/mbff-logo-square.webp`

Do NOT change it back to `/images/mbff-logo.webp` (that path 404s — the file is not in public/images/).

## Why
- Original logo (`public/mbff-logo.webp`) is 240×160 — landscape oval badge. Google displays logos in a circle/square; non-square dimensions cause black letterbox bars.
- The schema previously pointed to `/images/mbff-logo.webp` which does not exist — it was a 404.
- Google was showing MBFF logo correctly from a cached prior crawl, not from the schema URL.

## How to apply
- `public/mbff-logo-square.webp` — 240×240 square, white background, logo centered. Already exists.
- `src/lib/schema.ts` `localBusinessSchema.logo` already set to the square URL. Leave it alone.
- If a new logo file is ever provided, recreate the square version with: `magick input.webp -background white -gravity center -extent NxN output-square.webp`
