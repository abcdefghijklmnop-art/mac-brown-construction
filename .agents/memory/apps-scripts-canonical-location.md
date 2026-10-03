---
name: Apps Script canonical location
description: Where the live Google Apps Scripts are stored in the repo and the rule for keeping them current
---

## Rule
The `apps-scripts/` folder at the repo root is the single source of truth for all Google Apps Scripts.
**Any time a script is changed, the file in `apps-scripts/` must be updated before closing the session.**
Never rely on the scattered `.js` files in the repo root — those are old and may be stale.

## Files

| File | Sheet | What it does |
|------|-------|-------------|
| `apps-scripts/mbff-bookings.js` | MBFF Bookings Google Sheet | Handles booking row append, waiver updates, payment confirmation email (col U trigger), and review email (daily 5:17 PM trigger fires on trip date = TODAY, stamps col AB) |
| `apps-scripts/ffgs-bookings.js` | FFGS Google Sheet | Payment confirmation (col AB edit trigger on "Reservations" tab) + review/coupon email (daily 5 PM, fires on last day of session per "Guide School" tab, emails paid rows on "Reservations" tab where "Review Email Sent" column is empty) |

## MBFF Bookings column map (verified from live sheet screenshot Aug 7 2026)

| Col | # | Header in sheet | Script name |
|-----|---|-----------------|-------------|
| B | 2 | Full Name | FULL_NAME |
| C | 3 | Email | EMAIL |
| D | 4 | Phone | PHONE |
| G | 7 | Program | PROGRAM |
| I | 9 | Angler Count | ANGLER_COUNT |
| O | 15 | Preferred Date | PREFERRED_DATE |
| P | 16 | Confirmed Date | CONFIRMED_DATE |
| Q | 17 | Guides Assigned | GUIDES_ASSIGNED |
| R | 18 | Payment Method | PAYMENT_METHOD |
| T | 20 | Total Owed | TOTAL_DUE |
| U | 21 | Paid | PAID ← triggers confirmation email |
| V | 22 | Payment Date | PAYMENT_DATE ← auto-stamped |
| W | 23 | Waiver Signed | WAIVER_COL |
| X | 24 | Notes | NOTES |
| Y | 25 | Total Due | TOTAL_DUE_FINAL (read-only) |
| Z | 26 | Amount Received | AMOUNT_RECEIVED (read-only) |
| AA | 27 | Email Sent | ENROLLED_EMAIL (unused by script) |
| AB | 28 | Review Email | REVIEW_SENT ← stamped by 5:17 PM daily trigger |

**Why:** The script was previously wrong with REVIEW_SENT=25 (Y=Total Due). Corrected to 28 (AB) on Aug 7 2026 after user confirmed from live sheet screenshot.

## How to update the live sheet
1. Edit `apps-scripts/mbff-bookings.js`
2. Open Google Sheet → Extensions → Apps Script
3. Replace ALL code with the file contents
4. Save → Deploy → Manage deployments → edit → New version → Deploy
