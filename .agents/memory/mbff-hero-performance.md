---
name: MBFF hero image performance fixes
description: Specific fixes applied to the MBFF hero slider to reduce LCP from ~9s to target.
---

## Fixes applied (in order)

### 1. Hero server-render (from prior session)
First slide is server-rendered in `page.tsx` with `HeroSliderClient` overlay fading in after hydration. See `mbff-homepage-lcp.md`.

### 2. decoding="async" (this session)
`hero-slider-client.tsx` slide 0 had `decoding="sync"` — this blocks the main thread for the full decode duration (~3s for a 195 KiB image on Slow 4G). Changed to `decoding="async"`.

### 3. Intermediate 1100px images
Created intermediate-width WebP images to stop Lighthouse downloading full 195 KiB desktop images on a 412px viewport:
- `public/images/fall-river-fishing-1100.webp` (106 KiB, down from 195 KiB)
- `public/images/youth-rainbow-montana-1100.webp` (36 KiB, down from 81 KiB)
- `public/images/client-float-1-1000.webp` (54 KiB at 1000w)

srcSet entries in `hero-slider-client.tsx` include these 1100w/1000w entries.
Preload in `page.tsx` also updated to include 1100w.

## Image resize commands
```bash
magick input.webp -resize 1100x -quality 82 public/images/fall-river-fishing-1100.webp
magick input.webp -resize 1100x -quality 82 public/images/youth-rainbow-montana-1100.webp
magick input.webp -resize 1000x -quality 82 public/images/client-float-1-1000.webp
```
