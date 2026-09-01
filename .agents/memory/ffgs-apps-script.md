---
name: FFGS payment confirmation Apps Script
description: Correct sheet name, trigger column, and structure for the FFGS payment confirmation trigger
---

## Setup

- Script file: `ffgs-payment-confirmed-apps-script.js` (project root)
- Sheet tab name: **"Reservations"** (NOT "FFGS Reservations & Waivers")
- Trigger column: **column AB (28)** — "Payment Status", starts as "Pending" and Mac types the customer's name into it to confirm payment. Confirmed directly by Mac on 2026-07-09.
- Email column: column D (4) — `rowData[3]` zero-indexed
- Function name: `onEditFFGSPayment`
- API endpoint: `https://flyfishingguideschool.com/api/ffgs-payment-confirmed`

**Why:** A prior debugging session claimed the trigger column was T (20), not AB (28) — that claim was WRONG and got corrected on 2026-07-09 after re-checking with Mac directly. Column AB has always been correct. Never trust an old memory claim about this file over what the user confirms live — verify against the actual current script/sheet, not just this note.

**How to apply:** If this script ever needs to be reinstalled or debugged, use sheet name "Reservations" and col 28 (AB). Do not change this to column T (20) again.

## Trigger setup in Google Sheet

- Go to Extensions → Apps Script
- Paste `ffgs-payment-confirmed-apps-script.js` contents
- Triggers → Add Trigger → `onEditFFGSPayment` → From spreadsheet → On edit
- Run `authorizeMe` once to grant permissions if prompted
- Note: two triggers for same function = two executions per edit (harmless but redundant — delete one if cleaning up)

## Diagnosis history (2026-07-09)

Zero "Payment Confirmed — Fly Fishing Guide School" emails had ever been sent (checked via Resend send logs, going back to June 1). Root cause investigation found the script's `PAYMENT_STATUS_COL` was already correctly set to 28 in the live script — the earlier memory note claiming it should be 20 was itself the error, and applying it would have broken a working column check. The real cause of zero deliveries is still unconfirmed — check the Triggers panel next to confirm `onEditFFGSPayment` is actually installed as a "From spreadsheet - On edit" trigger; if it's missing, that's the actual root cause (same failure mode as the MBFF `checkPaymentComplete` bug fixed the same day).
