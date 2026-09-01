/**
 * Mac Brown Fly Fish — Bookings Script (CANONICAL — paste this entire file)
 * Handles: new booking rows, waiver updates, payment confirmation emails,
 *          and post-trip Google review request emails.
 *
 * SETUP:
 *   1. Replace ALL existing code with this file and Save (Ctrl+S)
 *   2. Select "setupTrigger" from the dropdown → Run → approve permissions
 *   3. Deploy → Manage deployments → edit existing → New version → Deploy
 *      (Web App URL stays the same — no Vercel change needed)
 */

// ── Booking webhook (web app) ─────────────────────────────────────────────────
var BOOKINGS_TAB = "Bookings";
var EMAIL_COL    = 3;   // C — Email
var WAIVER_COL   = 23;  // W — Waiver Signed

// ── Payment & review webhooks ─────────────────────────────────────────────────
var WEBHOOK_URL        = "https://macbrownflyfish.com/api/payment-confirmed";
var REVIEW_WEBHOOK_URL = "https://macbrownflyfish.com/api/mbff-review-request";

var COL = {
  FULL_NAME:       2,   // B
  EMAIL:           3,   // C
  PHONE:           4,   // D
  PROGRAM:         7,   // G
  ANGLER_COUNT:    9,   // I
  PREFERRED_DATE:  15,  // O  ← filled by booking form
  CONFIRMED_DATE:  16,  // P  ← filled by staff; falls back to O if blank
  GUIDES_ASSIGNED: 17,  // Q
  PAYMENT_METHOD:  18,  // R
  TOTAL_DUE:       20,  // T
  PAID:            21,  // U  ← type "Paid" here to trigger confirmation email
  PAYMENT_DATE:    22,  // V  ← auto-stamped when confirmation email sends
  NOTES:           24,  // X
  TOTAL_DUE_FINAL: 25,  // Y  — "Total Due" (read-only; staff-entered)
  AMOUNT_RECEIVED: 26,  // Z  — "Amount Received" (read-only; staff-entered)
  ENROLLED_EMAIL:  27,  // AA — "Email Sent" (old enrolled confirmation — unused by script)
  REVIEW_SENT:     28,  // AB ← auto-stamped when review request email sends
};

// ═════════════════════════════════════════════════════════════════════════════
// Booking form web app — appends new rows and marks waivers signed
// ═════════════════════════════════════════════════════════════════════════════

function doGet(e) {
  try {
    var rawPayload = e.parameter.payload;
    if (!rawPayload) return respond({ ok: false, error: "No payload" });
    var payload = JSON.parse(rawPayload);
    if (payload.action === "updateWaiver") return handleUpdateWaiver(payload);
    return handleAppendRow(payload);
  } catch (err) {
    Logger.log("Webhook error: " + err);
    return respond({ ok: false, error: String(err) });
  }
}

function handleAppendRow(payload) {
  var values = payload.values;
  if (!values || !values[0]) return respond({ ok: false, error: "No values to append" });
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(BOOKINGS_TAB);
  if (!sheet) return respond({ ok: false, error: "Bookings tab not found" });
  sheet.appendRow(values[0]);
  Logger.log("Booking row appended");
  return respond({ ok: true });
}

function handleUpdateWaiver(payload) {
  var email    = String(payload.email    || "").toLowerCase().trim();
  var signedAt = String(payload.signedAt || new Date().toLocaleString());
  if (!email) return respond({ ok: false, error: "No email provided" });
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(BOOKINGS_TAB);
  if (!sheet) return respond({ ok: false, error: "Bookings tab not found" });
  var lastRow    = sheet.getLastRow();
  var emailRange = sheet.getRange(1, EMAIL_COL, lastRow, 1).getValues();
  var matchRow   = -1;
  for (var i = emailRange.length - 1; i >= 1; i--) {
    if (String(emailRange[i][0] || "").toLowerCase().trim() === email) {
      matchRow = i + 1;
      break;
    }
  }
  if (matchRow === -1) return respond({ ok: false, error: "No matching booking for " + email });
  sheet.getRange(matchRow, WAIVER_COL).setValue("Yes — " + signedAt);
  Logger.log("Waiver updated for " + email + " at row " + matchRow);
  return respond({ ok: true, row: matchRow });
}

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

// ═════════════════════════════════════════════════════════════════════════════
// Payment confirmed — fires when you type Paid in column U
// ═════════════════════════════════════════════════════════════════════════════

function setupTrigger() {
  // Delete ALL existing triggers to clear out any orphaned ones from old script versions
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger("onBookingEdit")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onEdit()
    .create();
  ScriptApp.newTrigger("sendMBFFReviewEmails")
    .timeBased()
    .atHour(20)
    .nearMinute(49)
    .everyDays(1)
    .inTimezone("America/New_York")
    .create();
  Logger.log("All old triggers cleared. onBookingEdit + review email (8:49 PM) triggers installed.");
}

function onBookingEdit(e) {
  var sheet = e.range.getSheet();
  if (sheet.getName() !== "Bookings") return;
  if (e.range.getColumn() !== COL.PAID) return;
  var value = String(e.value || "").trim();
  if (!value) return;
  var oldValue = String(e.oldValue || "").trim();
  if (oldValue) return;
  var row = e.range.getRow();
  if (row <= 1) return;

  var data = sheet.getRange(row, 1, 1, COL.NOTES).getValues()[0];

  var confirmedDateRaw = data[COL.CONFIRMED_DATE - 1] || data[COL.PREFERRED_DATE - 1];
  var confirmedDate = "";
  if (confirmedDateRaw instanceof Date) {
    confirmedDate = Utilities.formatDate(confirmedDateRaw, "America/New_York", "MMMM d, yyyy");
  } else if (confirmedDateRaw) {
    confirmedDate = String(confirmedDateRaw);
  }

  var totalRaw = data[COL.TOTAL_DUE - 1];
  var totalDue = totalRaw ? "$" + Number(totalRaw).toLocaleString() : "";

  var payload = {
    fullName:       String(data[COL.FULL_NAME - 1]      || ""),
    email:          String(data[COL.EMAIL - 1]           || ""),
    phone:          String(data[COL.PHONE - 1]           || ""),
    program:        String(data[COL.PROGRAM - 1]         || ""),
    anglerCount:    String(data[COL.ANGLER_COUNT - 1]    || ""),
    confirmedDate:  confirmedDate,
    guidesAssigned: String(data[COL.GUIDES_ASSIGNED - 1] || ""),
    paymentMethod:  String(data[COL.PAYMENT_METHOD - 1]  || ""),
    totalDue:       totalDue,
    notes:          String(data[COL.NOTES - 1]           || ""),
  };

  if (!payload.email) {
    Logger.log("Row " + row + ": no email — skipping.");
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
    Logger.log("Row " + row + " (" + payload.fullName + "): " + code + " — " + response.getContentText());
    if (code === 200) {
      sheet.getRange(row, COL.PAYMENT_DATE).setValue(
        Utilities.formatDate(new Date(), "America/New_York", "MMMM d, yyyy")
      );
    }
  } catch (err) {
    Logger.log("Webhook error on row " + row + ": " + err);
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// Run manually after marking multiple rows paid at once.
// Skips any row that already has a date in column V.
// ═════════════════════════════════════════════════════════════════════════════

function sendMissedConfirmations() {
  var sheet   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings");
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  var data = sheet.getRange(2, 1, lastRow - 1, 24).getValues();

  for (var i = 0; i < data.length; i++) {
    var paid        = String(data[i][COL.PAID - 1]         || "").trim();
    var paymentDate = String(data[i][COL.PAYMENT_DATE - 1] || "").trim();
    var email       = String(data[i][COL.EMAIL - 1]        || "").trim();

    if (!paid || paymentDate || !email) continue;

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
      fullName:      String(data[i][COL.FULL_NAME - 1]      || ""),
      email:         email,
      phone:         String(data[i][COL.PHONE - 1]          || ""),
      program:       String(data[i][COL.PROGRAM - 1]        || ""),
      anglerCount:   String(data[i][COL.ANGLER_COUNT - 1]   || ""),
      confirmedDate: confirmedDate,
      paymentMethod: String(data[i][COL.PAYMENT_METHOD - 1] || ""),
      totalDue:      totalDue,
      notes:         String(data[i][23]                     || ""),
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

// ═════════════════════════════════════════════════════════════════════════════
// Post-trip Google review request — runs daily via time-based trigger at 5:17 PM.
// Finds bookings where trip date = today, paid, no review email sent yet.
// Stamps column AB so it never fires twice for the same guest.
// ═════════════════════════════════════════════════════════════════════════════

function sendMBFFReviewEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings");
  if (!sheet) { Logger.log("Bookings tab not found"); return; }

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  // Read through col AB (28 columns)
  var data = sheet.getRange(2, 1, lastRow - 1, COL.REVIEW_SENT).getValues();

  // Today at midnight for comparison
  var now   = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var sent = 0;

  for (var i = 0; i < data.length; i++) {
    var paid       = String(data[i][COL.PAID        - 1] || "").trim(); // col U
    var reviewSent = String(data[i][COL.REVIEW_SENT - 1] || "").trim(); // col AB
    var email      = String(data[i][COL.EMAIL       - 1] || "").trim(); // col C

    if (!paid || reviewSent || !email) continue;

    // Trip date: col P first, fall back to col O
    var tripDateRaw = data[i][COL.CONFIRMED_DATE - 1] || data[i][COL.PREFERRED_DATE - 1];
    if (!tripDateRaw) continue;

    var tripDate = (tripDateRaw instanceof Date)
      ? new Date(tripDateRaw.getFullYear(), tripDateRaw.getMonth(), tripDateRaw.getDate())
      : new Date(tripDateRaw);

    if (isNaN(tripDate.getTime())) continue;
    if (tripDate.getTime() !== today.getTime()) continue;

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
        method:             "post",
        contentType:        "application/json",
        payload:            JSON.stringify(payload),
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
