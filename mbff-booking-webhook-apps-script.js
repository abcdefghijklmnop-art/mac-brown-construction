/**
 * Mac Brown Fly Fish — Booking Sheet Webhook
 * Handles two actions via a single deployed Web App URL (MBFF_BOOKING_WEBHOOK_URL):
 *
 *   1. Append a new booking row (existing behaviour, no "action" field needed)
 *      payload = { values: [[col1, col2, ...]] }
 *
 *   2. Update column W (Waiver Signed) for an existing booking
 *      payload = { action: "updateWaiver", email: "...", signedAt: "..." }
 *
 * SETUP (replace your existing Apps Script with this):
 *   1. Open MBFF Google Sheet → Extensions → Apps Script
 *   2. Select ALL existing code and replace with this entire file
 *   3. Save (Ctrl+S)
 *   4. Click Deploy → Manage deployments → edit your existing deployment → New version → Deploy
 *      (The URL stays the same — no Vercel change needed)
 */

var BOOKINGS_TAB = "Bookings";
var EMAIL_COL    = 3;   // column C — Email
var WAIVER_COL   = 23;  // column W — Waiver Signed

function doGet(e) {
  try {
    var rawPayload = e.parameter.payload;
    if (!rawPayload) {
      return respond({ ok: false, error: "No payload" });
    }

    var payload = JSON.parse(rawPayload);

    // ── Action: update waiver status ──────────────────────────────────────
    if (payload.action === "updateWaiver") {
      return handleUpdateWaiver(payload);
    }

    // ── Default action: append new booking row ────────────────────────────
    return handleAppendRow(payload);

  } catch (err) {
    Logger.log("Webhook error: " + err);
    return respond({ ok: false, error: String(err) });
  }
}

function handleAppendRow(payload) {
  var values = payload.values;
  if (!values || !values[0]) {
    return respond({ ok: false, error: "No values to append" });
  }

  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(BOOKINGS_TAB);
  if (!sheet) {
    return respond({ ok: false, error: "Bookings tab not found" });
  }

  sheet.appendRow(values[0]);
  Logger.log("Booking row appended");
  return respond({ ok: true });
}

function handleUpdateWaiver(payload) {
  var email    = String(payload.email    || "").toLowerCase().trim();
  var signedAt = String(payload.signedAt || new Date().toLocaleString());

  if (!email) {
    return respond({ ok: false, error: "No email provided" });
  }

  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(BOOKINGS_TAB);
  if (!sheet) {
    return respond({ ok: false, error: "Bookings tab not found" });
  }

  var lastRow    = sheet.getLastRow();
  var emailRange = sheet.getRange(1, EMAIL_COL, lastRow, 1).getValues();

  // Search from the bottom up — most recent booking wins
  var matchRow = -1;
  for (var i = emailRange.length - 1; i >= 1; i--) {
    var cellEmail = String(emailRange[i][0] || "").toLowerCase().trim();
    if (cellEmail === email) {
      matchRow = i + 1; // convert to 1-indexed sheet row
      break;
    }
  }

  if (matchRow === -1) {
    Logger.log("No booking row found for email: " + email);
    return respond({ ok: false, error: "No matching booking for " + email });
  }

  sheet.getRange(matchRow, WAIVER_COL).setValue("Yes — " + signedAt);
  Logger.log("Waiver updated to Yes for " + email + " at row " + matchRow);
  return respond({ ok: true, row: matchRow });
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
