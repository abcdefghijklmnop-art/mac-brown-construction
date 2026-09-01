---
name: FFGS Google logo square fix
description: The FFGS schema logo must use the square version to avoid black bars in Google search results.
---

## Rule
The JSON-LD `logo` field in `artifacts/ffgs-nextjs/src/app/layout.tsx` must point to:
`https://flyfishingguideschool.com/ffgs-logo-square.webp`

Do NOT change it back to `ffgs-logo.webp`.

## Why
The original logo (`ffgs-logo.webp`) is 188×120 — landscape oval badge. Google displays logos in a circle/square; the non-square dimensions cause black letterbox bars on top and bottom, making it look broken in search results.

## How to apply
- `public/ffgs-logo-square.webp` — 188×188 square, white background, logo centered. Already exists.
- `layout.tsx` `siteSchema.logo` already set to the square URL. Leave it alone.
- If a new logo file is ever provided, recreate the square version with: `magick input.webp -background white -gravity center -extent NxN output-square.webp`
