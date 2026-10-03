---
name: Vercel env vars vs Replit secrets
description: Secrets set in Replit are NOT available on Vercel — they must be added separately in the Vercel dashboard under Settings → Environment Variables.
---

## The rule
Replit secrets and Vercel environment variables are completely separate systems. A key set in Replit's secrets panel will work in dev (Replit workflows) but will be undefined on the deployed Vercel site.

**Why:** Vercel builds and runs the Next.js app in its own cloud environment. It has no access to Replit's secret store.

**How to apply:** Any time a Next.js API route uses `process.env.SOME_KEY`, that key must be explicitly added in:
- Replit Secrets (for dev/preview on Replit)
- Vercel → Project → Settings → Environment Variables (for production)

## Keys confirmed needed in Vercel for mac-brown-fly-fish
- `MBFF_RESEND_API_KEY` — Resend email sending (all API routes)
- Any other keys used by Next.js API routes

## Vercel UI gotcha
Vercel Settings sidebar has two similar items:
- **Environments** — for creating named deploy environments (staging, etc.) — NOT what you want for secrets
- **Environment Variables** — the correct place to add Key/Value pairs

Users often accidentally click "Environments" instead of "Environment Variables".

## All Next.js API routes now use
```typescript
const apiKey = process.env.MBFF_RESEND_API_KEY ?? process.env.RESEND_API_KEY;
```
This tries the MBFF-specific key first, falls back to the generic one. Both names should work.
