---
name: MBFF booking notification architecture
description: Which emails fire at which step of the MBFF reserve/payment flow, and what was removed
---

## Flow

| Step | Email to Mac | Email to Customer |
|------|-------------|-------------------|
| Reserve form submitted | ❌ REMOVED | ✅ "Reservation Received" |
| Waiver signed | ✅ "Waiver Signed" | (none) |
| Payment method selected (Venmo/Zelle/Check) | ✅ "Payment Notification" | ✅ "Payment Notification Received" |
| Col AB marked paid in sheet | ✅ Full confirmation + PDFs (Apps Script) | ✅ Full confirmation + PDFs |

## Waiver gate policy

- The enforced customer sequence is **Reservation → Waiver → Payment**.
- A waiver must originate from a successfully completed reservation step; direct visits to the waiver route return the visitor to the reservation form.
- A waiver cannot submit without a valid email address and cell phone number.

**Why:** A signed waiver is useful as a serious inquiry and legal record, but Mac does not want anonymous direct-waiver submissions or notifications without a way to contact the signer.

**How to apply:** Keep the reservation gate and required contact validation in place whenever the waiver form or booking flow is changed. Do not make payment a prerequisite for signing the waiver.

## What was removed
- The internal "New Booking Request" email from `/api/reserve/route.ts` was removed on Jul 28 2026.
- It was firing on form submission with no payment, causing Mac to chase tire kickers.

## Where the Google Sheets row is written
- `/api/payment-method-intent/route.ts` — fires when customer selects Venmo/Zelle/Check on the payment page.
- NOT in the reserve route. If someone never reaches the payment method page, no row is written.

**Why:** Mac only wants to know about bookings when there is real payment intent. Form-only submissions are noise.

## Review request email (post-trip)

- Function: `sendMBFFReviewEmails` in `mbff-payment-confirmed-apps-script.js`
- Trigger: time-based, daily at 5:17 PM (already set up in Apps Script)
- Logic: scans Bookings sheet for rows where trip date (col P, fallback col O) = yesterday, col U = paid, col AB = empty
- On send: stamps col AB (REVIEW_SENT = 28) with today's date so it never fires twice
- **To block a review email before 5:17 PM the day after a trip: type anything into col AB of that guest's row**
- Endpoint: POST `https://macbrownflyfish.com/api/mbff-review-request` with `{ firstName, email, programName }`
- **This function gets wiped if the script is ever fully replaced — it MUST stay in mbff-payment-confirmed-apps-script.js**
