---
name: Content number consistency rule
description: When a stat (combined years, instructor count, etc.) appears in multiple places within the same page or post, all instances must match.
---

Any time a number is updated in one location on a page (AEO text, body copy, faculty intro, schema, metadata description), grep for every other occurrence of that number on the same page and update them all in the same pass.

**Why:** User flagged a specific case where the AEO at the top said "450+ combined years" while the faculty section on the same page said "500+." This looks sloppy and erodes trust.

**How to apply:**
- After editing a stat in contentHtml, grep the AEO map, metadata description, and schema for the same page.
- After editing the AEO map, grep contentHtml and schema.
- This applies to: combined years of experience, instructor counts, price, program duration, dates — any number that could appear in more than one place.
- **Also check chatbot system prompts on BOTH sites**, not just the site being edited — `artifacts/mac-brown-nextjs/src/app/api/chat/route.ts` describes FFGS programs (class size, duration, price) to MBFF site visitors, so a fact fixed only on flyfishingguideschool.com can still be wrong when the MBFF chatbot answers about it. Grep both `api/chat/route.ts` files whenever a program fact changes.
