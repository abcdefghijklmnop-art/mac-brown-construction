---
name: Hero shot — one and done rule
description: For any new hero image, grep for all existing uses of that image AND the hero pattern on the same site. Copy the exact working block. Never guess sizing, overlay, or object-position.
---

Before touching a hero image on either site, run these two greps:
1. `grep -rn "image-filename.webp" artifacts/<site>/src/` — find every existing use of that specific image
2. `grep -n "bg-gradient\|bg-black\|object-\|aspect-video\|min-h\|hero" <working-page>.tsx` — read the overlay and sizing from a page that already works

Then copy the exact block: aspect ratio class, min-h, max-h, overlay gradient, object-position. Do not reconstruct from memory.

**Why:** User had to correct hero sizing (too short), overlay darkness (flat black/55 vs gradient), object-position (object-center vs object-top), and mobile srcSet path — all in separate back-and-forth turns — when a single grep of hero-slider.tsx would have supplied the correct values for all four at once.

**Standard FFGS hero pattern (from hero-slider.tsx):**
- Section: `relative w-full aspect-video max-h-[75vh] min-h-[480px] overflow-hidden`
- Overlay: `absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 z-10`
- Image: `absolute inset-0 w-full h-full object-cover object-top` (object-position varies by image)
- Mobile srcSet: check `/public/images/mobile/` folder for same filename

**Rule: one grep, one read, one edit. No iterative fixing of hero shots.**
