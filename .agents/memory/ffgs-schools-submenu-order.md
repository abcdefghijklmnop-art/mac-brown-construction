---
name: FFGS Schools submenu order
description: Correct priority order for the Schools dropdown in site-shell.tsx.
---

## Correct order (as of Jul 29 2026)

1. I Want to Fish Better — `/smoky-mountain-fly-fishing-school/`
2. I Want to Become a Guide — `/fly-fishing-guide-school/`
3. Cost & Value — `/is-fly-fishing-guide-school-worth-it/`
4. New to Fly Fishing — `/new-to-fly-fishing/`
5. Upcoming Dates — `MBFF_EVENTS`
6. Certification — `/fly-fishing-guide-certification/`
7. What to Bring — `/necessary-items-fly-fishing-guide-school/`
8. School Locations — `/guide-school-locations/`

**Why:** User-specified priority — the two main intent pages (fish better, become a guide) come first; transactional/logistics pages come last.

**File:** `artifacts/ffgs-nextjs/src/components/site-shell.tsx` in the `leftLinks` array, `Schools` items.
