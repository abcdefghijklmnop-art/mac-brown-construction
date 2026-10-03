---
name: Sitemap lastmod update rule
description: Every page edit must include a sitemap lastmod update on the same page — never leave a stale date after touching content.
---

## Rule

Any time a page's content is meaningfully changed, update its `lastmod` in the sitemap file in the same edit session — not later, not in a separate pass.

**Why:** Google deprioritizes re-crawling pages with stale lastmod dates. A page updated months ago still showing a year-old lastmod signals "nothing changed here" and delays indexing. This burned us on /bio-mac-brown/ which had bio corrections but still showed lastmod 2025-09-01.

## How to apply

- MBFF sitemap: `artifacts/mac-brown-nextjs/src/app/sitemap.ts`
- FFGS sitemap: `artifacts/ffgs-nextjs/src/app/sitemap.ts`
- Use today's date in `YYYY-MM-DD` format
- Do NOT update lastmod on pages you didn't touch — Google learns to ignore lastmod if it's always changing
- Only update pages with meaningful content changes (copy, schema, structure) — not whitespace or comment fixes
