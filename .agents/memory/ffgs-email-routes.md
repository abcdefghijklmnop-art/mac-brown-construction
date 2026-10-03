---
name: FFGS email routes and PDF attachments
description: Where FFGS payment confirmation email lives, which PDFs it attaches, and where those PDFs are stored.
---

## The route that fires when column AB is marked Paid

`artifacts/ffgs-nextjs/src/app/api/ffgs-payment-confirmed/route.ts`

This is a **Next.js API route** (not the Express API server). It sends the full week itinerary email with all curriculum PDFs attached.

**Why:** Airtable/Sheet automation hits `/api/ffgs-payment-confirmed` on the FFGS Next.js site when column AB is marked paid.

## PDF storage location

All FFGS curriculum PDFs live in:
`artifacts/ffgs-nextjs/public/assessments/`

NOT in `artifacts/api-server/static/pdfs/` — that is for MBFF.

## Current PDF filenames in public/assessments/

| Filename on disk | Display name in email |
|---|---|
| `Advanced_Casting_MB_GB.pdf` | Advanced-Casting-Mac-Brown-Gary-Borger.pdf |
| `FlyCastingMasteryWorkshop_1Day_Lesson_Plan.pdf` | Fly-Casting-Mastery-Workshop-Student-Handout.pdf |
| `DryFly_1Day_Lesson_Plan.pdf` | Dry-Fly-2.5-Hour-Foundations-Clinic.pdf |
| `WetFly_1Day_Lesson_Plan.pdf` | Wet-Fly-2.5-Hour-Foundations-Clinic.pdf |
| `Nymph_1Day_Lesson_Plan.pdf` | Nymph-2.5-Hour-Foundations-Clinic.pdf |
| `StreamerSchool_1Day_Lesson_Plan.pdf` | Streamer-School-2.5-Hour-Foundations-Clinic.pdf |
| `OarFrameRowingSchool_1Day_Lesson_Plan.pdf` | Oar-Frame-Rowing-School-Student-Handout.pdf |

**Note:** The disk filenames still say "1Day" but the content IS the 2.5-hour versions (replaced Jun 29). The display labels in the email were updated to say "2.5-Hour".

## Other FFGS email routes (do NOT confuse)

- `artifacts/api-server/src/routes/ffgs-payment-confirmed.ts` — Express route on the API server; handles a different webhook; also has PDF logic added Jun 30 but is NOT what fires from column AB.
- `artifacts/ffgs-nextjs/src/app/api/ffgs-reservation/route.ts` — fires on form submission, no PDFs.

## Replacement safety

Keep the separate API-server email route's referenced PDFs aligned with the current handouts, even though the Sheet trigger goes to Next.js. Shared root `public/` copies can also persist from builds and should not retain outdated versions.

**Why:** Replacing only the primary site's handouts leaves alternate email endpoints and built public copies serving old material.

**How to apply:** On a handout refresh, inspect all routes and the build copy destinations before deleting obsolete PDFs; preserve any filename that a route still reads.

The payment-confirmation message that accompanies student handouts can receive a blank first name. Never place fixed punctuation on both sides of an optional name in its greeting or closing.

**Why:** A blank name produced “Safe travels, , and…” in the actual email, even though the attached PDFs were fine.

**How to apply:** When someone reports a problem with handouts they receive by email, inspect the accompanying email body as well as the PDFs; give optional names grammatically complete fallbacks.
