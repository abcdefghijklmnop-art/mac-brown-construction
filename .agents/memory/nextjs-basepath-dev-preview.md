---
name: Next.js basePath dev preview blank page
description: Next.js 15 dev server returns empty body for the exact basePath root — fix is output:'export' in dev mode only.
---

# Next.js basePath dev server blank homepage bug

## The rule
When a Next.js 15 app uses a non-empty `basePath` (e.g. `/mbff-next/`), the dev server silently returns HTTP 200 with **zero bytes and no Next.js response headers** for requests to the exact basePath root URL. Sub-pages work fine.

**Why:** This is a Next.js 15 dev server bug specific to `basePath` + non-export mode. With `output: 'export'`, the dev server handles the basePath root correctly (empirically: Mac Brown Construction has `output:'export'` and its root works; MBFF/FFGS did not, and their roots were blank).

**How to apply:**
Add `output: 'export'` conditionally for dev mode only in `next.config.ts`:

```ts
const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  basePath,
  ...(isDev ? { output: "export" as const } : {}),
  // ...
};
```

This has **zero effect on Vercel** (which always runs `next build` in production mode). URLs, images, and all live site behavior are unchanged.

Also: hero slider image paths must use the `img()` utility (which prepends `NEXT_PUBLIC_BASE_PATH`) so they load correctly in the Replit dev preview. On Vercel, `BASE_PATH` is `""` so `img("/images/foo.webp")` = `/images/foo.webp` — identical to hardcoded paths.
