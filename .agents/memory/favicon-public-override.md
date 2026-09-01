---
name: Favicon public/ override rule
description: favicon.ico and favicon.svg in public/ always override Next.js app/icon.png — must check and replace both when setting up favicons.
---

# Favicon public/ override rule

## The rule
When setting up or fixing favicons on any Next.js site, always check `public/` for existing `favicon.ico` and `favicon.svg` files. These take browser priority over Next.js App Router's generated favicon from `src/app/icon.png`.

**Why:** Browsers make a direct HTTP request to `/favicon.ico` before reading anything in the HTML `<head>`. A placeholder `favicon.ico` in `public/` silently wins every time, ignoring the correct icon.png Next.js generates.

**How to apply:**
1. Check `ls public/favicon*` on every new site
2. If placeholder files exist (often a red/orange square SVG or a generic blue icon.ico), replace favicon.ico with one generated from the actual logo using ImageMagick, and delete favicon.svg
3. Also fix `src/app/icon.png` and `src/app/apple-icon.png` for Next.js metadata generation
4. The gray outline artifact seen on both MBFF and FFGS sites was caused by this — the placeholder favicon.ico was being served instead of the real logo

## ImageMagick command to generate favicon.ico from logo
```bash
magick src/app/icon.png \
  \( -clone 0 -resize 48x48 \) \
  \( -clone 0 -resize 32x32 \) \
  \( -clone 0 -resize 16x16 \) \
  -delete 0 \
  public/favicon.ico
```
