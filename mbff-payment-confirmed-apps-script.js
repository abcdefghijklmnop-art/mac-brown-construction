/**
 * Mac Brown Fly Fish — Booking Payment Confirmed Webhook
 *
 * SETUP (one time only):
 *   1. In Google Sheets: Extensions > Apps Script
 *   2. Paste this entire file, replacing any existing code
 *   3. Save (Ctrl+S)
 *   4. Select "setupTrigger" in the function dropdown, click Run
 *   5. Approve the permissions when prompted
 *
 * After setup: whenever you type "Paid" in column U of the Bookings sheet,
 * the customer automatically receives a confirmation email with meeting
 * location, time, and fishing license info.
 *
 * Nantahala float trips: add "Nantahala" anywhere in column X (Notes)
 * before typing Paid in column U — the script will send the Endless River
 * Adventures meeting location and 9:00 AM start time instead.
 */

var WEBHOOK_URL        = "https://macbrownflyfish.com/api/payment-confirmed";
var REVIEW_WEBHOOK_URL = "https://macbrownflyfish.com/api/mbff-review-request";

var COL = {
  FULL_NAME:       2,   // B
  EMAIL:           3,   // C
  PHONE:           4,   // D
  PROGRAM:         7,   // G
  ANGLER_COUNT:    9,   // I
  PREFERRED_DATE:  15,  // O  ← filled by the booking form
  CONFIRMED_DATE:  16,  // P  ← filled by staff; used first; falls back to O
  GUIDES_ASSIGNED: 17,  // Q
  PAYMENT_METHOD:  18,  // R
  TOTAL_DUE:       20,  // T
  PAID:            21,  // U  ← triggers payment webhook
  PAYMENT_DATE:    22,  // V  ← auto-stamped when confirmation email sends
  NOTES:           24,  // X
  REVIEW_SENT:     28,  // AB ← auto-stamped when review request email sends
};

function setupTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "onBookingEdit") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.newTrigger("onBookingEdit")
    .forSpreadsheet(ss)
    .onEdit()
    .create();
  Logger.log("Trigger installed successfully.");
}

function onBookingEdit(e) {
  var sheet = e.range.getSheet();

  if (sheet.getName() !== "Bookings") return;
  if (e.range.getColumn() !== COL.PAID) return;

  // Fire for any non-empty value — "Paid", "Yes", etc.
  var value = String(e.value || "").trim();
  if (!value) return;

  // Don't re-send if overwriting an existing entry (only fire on first fill)
  var oldValue = String(e.oldValue || "").trim();
  if (oldValue) return;

  var row = e.range.getRow();
  if (row <= 1) return;

  var data = sheet.getRange(row, 1, 1, COL.NOTES).getValues()[0];

  // Use column P (Confirmed Date, staff-filled) — fall back to column O (Preferred Date, form-filled)
  var confirmedDateRaw = data[COL.CONFIRMED_DATE - 1] || data[COL.PREFERRED_DATE - 1];
  var confirmedDate = "";
  if (confirmedDateRaw instanceof Date) {
    confirmedDate = Utilities.formatDate(
      confirmedDateRaw,
      "America/New_York",
      "MMMM d, yyyy"
    );
  } else if (confirmedDateRaw) {
    confirmedDate = String(confirmedDateRaw);
  }

  var totalRaw = data[COL.TOTAL_DUE - 1];
  var totalDue = totalRaw
    ? "$" + Number(totalRaw).toLocaleString()
    : "";

  var payload = {
    fullName:       String(data[COL.FULL_NAME - 1]       || ""),
    email:          String(data[COL.EMAIL - 1]            || ""),
    phone:          String(data[COL.PHONE - 1]            || ""),
    program:        String(data[COL.PROGRAM - 1]          || ""),
    anglerCount:    String(data[COL.ANGLER_COUNT - 1]     || ""),
    confirmedDate:  confirmedDate,
    guidesAssigned: String(data[COL.GUIDES_ASSIGNED - 1]  || ""),
    paymentMethod:  String(data[COL.PAYMENT_METHOD - 1]   || ""),
    totalDue:       totalDue,
    notes:          String(data[COL.NOTES - 1]            || ""),
  };

  if (!payload.email) {
    Logger.log("Row " + row + ": no email found — skipping.");
    return;
  }

  try {
    var response = UrlFetchApp.fetch(WEBHOOK_URL, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    });

    var code = response.getResponseCode();
    Logger.log(
      "Row " + row + " (" + payload.fullName + "): webhook " + code +
      " — " + response.getContentText()
    );
    if (code === 200) {
      // Stamp Payment Date (col V) so we know the confirmation email was sent
      sheet.getRange(row, COL.PAYMENT_DATE).setValue(
        Utilities.formatDate(new Date(), "America/New_York", "MMMM d, yyyy")
      );
    }
  } catch (err) {
    Logger.log("Webhook error on row " + row + ": " + err);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Run this manually any time you mark multiple rows paid at once.
// Sends confirmation emails for Paid rows that have no Payment Date yet.
// Safe to run repeatedly — skips any row where col V is already filled.
// ─────────────────────────────────────────────────────────────────────────────
function sendMissedConfirmations() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings");
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  // Read through col X (24 columns) so notes are included
  var data = sheet.getRange(2, 1, lastRow - 1, 24).getValues();

  for (var i = 0; i < data.length; i++) {
    var paid        = String(data[i][COL.PAID - 1]         || "").trim(); // col U
    var paymentDate = String(data[i][COL.PAYMENT_DATE - 1] || "").trim(); // col V
    var email       = String(data[i][COL.EMAIL - 1]        || "").trim(); // col C

    // Skip if not paid, already has a payment date stamped, or no email
    if (!paid || paymentDate || !email) continue;

    // col P first, fall back to col O
    var confirmedDateRaw = data[i][COL.CONFIRMED_DATE - 1] || data[i][COL.PREFERRED_DATE - 1];
    var confirmedDate = "";
    if (confirmedDateRaw instanceof Date) {
      confirmedDate = Utilities.formatDate(confirmedDateRaw, "America/New_York", "MMMM d, yyyy");
    } else if (confirmedDateRaw) {
      confirmedDate = String(confirmedDateRaw);
    }

    var totalRaw = data[i][COL.TOTAL_DUE - 1];
    var totalDue = totalRaw ? "$" + Number(totalRaw).toLocaleString() : "";

    var payload = {
      fullName:      String(data[i][COL.FULL_NAME - 1]       || ""),
      email:         email,
      phone:         String(data[i][COL.PHONE - 1]           || ""),
      program:       String(data[i][COL.PROGRAM - 1]         || ""),
      anglerCount:   String(data[i][COL.ANGLER_COUNT - 1]    || ""),
      confirmedDate: confirmedDate,
      paymentMethod: String(data[i][COL.PAYMENT_METHOD - 1]  || ""),
      totalDue:      totalDue,
      notes:         String(data[i][23]                      || ""),  // col X
    };

    try {
      var r = UrlFetchApp.fetch(WEBHOOK_URL, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true,
      });
      var code = r.getResponseCode();
      Logger.log("Row " + (i + 2) + " (" + payload.fullName + " — " + payload.program + "): " + code);
      if (code === 200) {
        sheet.getRange(i + 2, COL.PAYMENT_DATE).setValue(
          Utilities.formatDate(new Date(), "America/New_York", "MMMM d, yyyy")
        );
      }
    } catch (err) {
      Logger.log("Error row " + (i + 2) + ": " + err);
    }
  }
  Logger.log("Done.");
}

// ─────────────────────────────────────────────────────────────────────────────
// Runs daily via time-based trigger (currently set to 5:17 PM).
// Finds bookings where the trip date was yesterday, are paid, and haven't
// had a review email sent yet — then fires the review request email.
// Stamps column Y so it never sends twice to the same guest.
// ─────────────────────────────────────────────────────────────────────────────
function sendMBFFReviewEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings");
  if (!sheet) { Logger.log("Bookings tab not found"); return; }

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  // Read through col Y (25 columns)
  var data = sheet.getRange(2, 1, lastRow - 1, COL.REVIEW_SENT).getValues();

  // Build yesterday's date at midnight for comparison
  var now       = new Date();
  var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

  var sent = 0;

  for (var i = 0; i < data.length; i++) {
    var paid       = String(data[i][COL.PAID        - 1] || "").trim(); // col U
    var reviewSent = String(data[i][COL.REVIEW_SENT - 1] || "").trim(); // col Y
    var email      = String(data[i][COL.EMAIL       - 1] || "").trim(); // col C

    if (!paid || reviewSent || !email) continue;

    // Trip date: col P first, fall back to col O
    var tripDateRaw = data[i][COL.CONFIRMED_DATE - 1] || data[i][COL.PREFERRED_DATE - 1];
    if (!tripDateRaw) continue;

    var tripDate = (tripDateRaw instanceof Date)
      ? new Date(tripDateRaw.getFullYear(), tripDateRaw.getMonth(), tripDateRaw.getDate())
      : new Date(tripDateRaw);

    if (isNaN(tripDate.getTime())) continue;
    if (tripDate.getTime() !== yesterday.getTime()) continue;

    // Parse first name from full name (col B)
    var fullName  = String(data[i][COL.FULL_NAME - 1] || "").trim();
    var firstName = fullName.split(" ")[0] || fullName;
    var program   = String(data[i][COL.PROGRAM  - 1] || "").trim();

    var payload = {
      firstName:   firstName,
      email:       email,
      programName: program,
    };

    try {
      var r = UrlFetchApp.fetch(REVIEW_WEBHOOK_URL, {
        method:           "post",
        contentType:      "application/json",
        payload:          JSON.stringify(payload),
        muteHttpExceptions: true,
      });
      var code = r.getResponseCode();
      Logger.log("Review email row " + (i + 2) + " (" + fullName + "): " + code);
      if (code === 200) {
        sheet.getRange(i + 2, COL.REVIEW_SENT).setValue(
          Utilities.formatDate(now, "America/New_York", "MMMM d, yyyy")
        );
        sent++;
      }
    } catch (err) {
      Logger.log("Review email error row " + (i + 2) + ": " + err);
    }
  }

  Logger.log("Review emails sent: " + sent);
}
