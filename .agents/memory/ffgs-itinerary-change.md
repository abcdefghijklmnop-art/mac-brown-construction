---
name: FFGS itinerary and price change (pending)
description: User wants to change FFGS program to 4 days (Thu–Sun) and $4,595 — discussion held, not yet implemented.
---

# FFGS Itinerary & Price Change — Pending

## What the user wants
- Duration: 5 days → **4 days** (Thursday through Sunday)
- Price: $3,950 → **$4,595**

## Scope of changes identified

### Price (Easy)
- Update Google Sheet "Pricing" tab, key `guideSchool` → display `$4,595`, full value `4595`
- Auto-propagates everywhere `{pricing.guideSchool.display}` is used
- Manual hardcoded fixes needed in:
  - `artifacts/ffgs-nextjs/src/app/fly-fishing-guide-school/page.tsx` (chatbot + schema text)
  - `artifacts/ffgs-nextjs/src/app/fly-fishing-guide-school/guide-school-client.tsx` (chatbot answer line ~517)
  - `artifacts/mac-brown-nextjs/src/lib/search-index.ts` ("Tuition $3,950")

### Days / schedule (Medium — 25+ references)
- "Five days" / "5-Day" / "5 days" throughout both sites
- "Wednesday through Sunday" → "Thursday through Sunday"
- `artifacts/ffgs-nextjs/src/app/fly-fishing-guide-school/guide-school-client.tsx` — many inline mentions
- `artifacts/ffgs-nextjs/src/app/fly-fishing-guide-school/page.tsx` — meta title "5-Day", schema
- `artifacts/ffgs-nextjs/src/components/home-faq-section.tsx` — FAQ answer
- `artifacts/mac-brown-nextjs/src/app/book/book-client.tsx` — "5 Days (Mon–Fri)" (already wrong, should be Wed–Sun)
- `artifacts/mac-brown-nextjs/src/app/events-calendar/events-client.tsx` — "five-day immersion"
- `artifacts/mac-brown-nextjs/src/app/programs-overview/programs-client.tsx` — "5 Days"
- `artifacts/mac-brown-nextjs/src/app/contact/contact-client.tsx` — "5-Day Fly Fishing Guide School"

### Curriculum section (User decision needed)
- Guide school page has "Five Days of Curriculum" section structured day-by-day
- User needs to decide: just relabel as "Four Days" OR restructure content to reflect real 4-day format

**Why:** User mentioned wanting to discuss before implementing — waiting for go-ahead.
