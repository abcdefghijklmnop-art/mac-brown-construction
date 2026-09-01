---
name: Responsive image optimization
description: srcSet pattern and mobile WebP conventions for both MBFF and FFGS sites.
---

## Hero image pattern (full-bleed, 100vw)
Add `srcSet` with a `-1280.webp` variant + `fetchPriority="high"`. Remove `loading="eager"` when `fetchPriority="high"` is set (both are redundant).

```tsx
srcSet={`${img("/images/foo-1280.webp")} 1280w, ${img("/images/foo.webp")} 1920w`}
sizes="100vw"
fetchPriority="high"
```

## Content/grid image pattern (2-col grids, 50vw desktop)
```tsx
srcSet={`${img("/images/foo-800.webp")} 800w, ${img("/images/foo.webp")} 1440w`}
sizes="(max-width: 768px) 100vw, 50vw"
loading="lazy"
```

## Mobile version creation — folder structure (new images)
- Full-res desktop: `public/images/foo.webp`
- Mobile version: `public/images/mobile/foo.webp` (same filename, `mobile/` subfolder)
- srcSet: `srcSet="/images/mobile/foo.webp 800w, /images/foo.webp 1920w"`
- Resize heroes (landscape ≤1280px): `magick input.webp -resize 1280x -quality 82 public/images/mobile/input.webp`
- Resize content (portrait/square ≤800px): `magick input.webp -resize 800x -quality 82 public/images/mobile/input.webp`
- Use `magick` (IMv7). Never upscale. Never replace originals.
- **Existing images** use `-1280`/`-800` suffix convention — do not migrate, keep their existing srcSet.

## Skip criteria
- Original ≤ 800px wide — no savings
- Images hidden on mobile (`hidden xl:block`) — no mobile LCP impact
- Very small files (≤120KB) — marginal savings

**Why:** Mobile PageSpeed was penalizing 1920px images served to 390px screens.
**How to apply:** Any new program/city/school page needs both the `-1280` (or `-800`) WebP created AND srcSet on every `<img>`.
