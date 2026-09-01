var FFGS_CONFIRMED_URL = "https://flyfishingguideschool.com/api/ffgs-payment-confirmed";
var PAYMENT_STATUS_COL = 20; // column T — the "Paid?" column you type into

function authorizeMe() {
  Logger.log(Session.getActiveUser().getEmail());
}

function onEditFFGSPayment(e) {
  if (!e) { Logger.log("EXIT: no event object"); return; }

  var range   = e.range;
  var sheet   = range.getSheet();
  var col     = range.getColumn();
  var tabName = sheet.getName();

  Logger.log("FIRED — sheet: '" + tabName + "', col: " + col + ", row: " + range.getRow() + ", value: '" + range.getValue() + "'");

  if (tabName !== "Reservations") { Logger.log("EXIT: wrong sheet — got '" + tabName + "'"); return; }
  if (col !== PAYMENT_STATUS_COL) { Logger.log("EXIT: wrong column — got " + col + ", expected " + PAYMENT_STATUS_COL); return; }

  var newValue = range.getValue();
  if (!newValue || String(newValue).trim() === "") { Logger.log("EXIT: empty value"); return; }

  var row = range.getRow();
  if (row < 2) { Logger.log("EXIT: header row"); return; }

  var rowData = sheet.getRange(row, 1, 1, 28).getValues()[0];
  var email         = rowData[3];   // column D
  var firstName     = rowData[1];   // column B
  var lastName      = rowData[2];   // column C
  var phone         = rowData[4];   // column E
  var schoolMonth   = rowData[7];   // column H
  var attendingFor  = rowData[8];   // column I
  var depositType   = rowData[26];  // column AA
  var paymentStatus = String(newValue); // whatever you typed in column T

  Logger.log("Row data — email: '" + email + "', name: '" + firstName + " " + lastName + "'");

  if (!email) { Logger.log("EXIT: no email in column D for row " + row); return; }

  var payload = {
    firstName:     String(firstName    || ""),
    lastName:      String(lastName     || ""),
    email:         String(email        || ""),
    phone:         String(phone        || ""),
    schoolMonth:   String(schoolMonth  || ""),
    attendingFor:  String(attendingFor || ""),
    depositType:   String(depositType  || ""),
    paymentStatus: paymentStatus,
  };

  Logger.log("Sending to API: " + JSON.stringify(payload));

  try {
    var response = UrlFetchApp.fetch(FFGS_CONFIRMED_URL, {
      method: "post", contentType: "application/json",
      payload: JSON.stringify(payload), muteHttpExceptions: true,
    });
    Logger.log("API response: " + response.getResponseCode() + " — " + response.getContentText());
  } catch (err) {
    Logger.log("API fetch error: " + err);
  }
}
