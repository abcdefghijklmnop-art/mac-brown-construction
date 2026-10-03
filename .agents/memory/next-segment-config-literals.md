---
name: Next.js segment config literals
description: Production build rejects arithmetic expressions in route segment config despite passing TypeScript.
---

Use a numeric literal for Next.js route segment configuration such as `revalidate`; do not write arithmetic expressions for readability.

**Why:** A TypeScript check and development preview accepted a calculated six-hour value, but the Vercel production build rejected the binary expression during Next.js static analysis. Only a real production build caught it.

**How to apply:** When changing route-level caching or other segment exports, run the affected app's production build before saying it is ready.