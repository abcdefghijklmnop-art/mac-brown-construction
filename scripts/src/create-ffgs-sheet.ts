import { ReplitConnectors } from "@replit/connectors-sdk";

const connectors = new ReplitConnectors();

const response = await connectors.proxy("google-sheet", "/v4/spreadsheets", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    properties: { title: "FFGS Reservations & Waivers" },
    sheets: [
      {
        properties: { title: "Reservations", sheetId: 0 },
        data: [{
          rowData: [{
            values: [
              "Submitted At",
              "First Name",
              "Last Name",
              "Email",
              "Phone",
              "Address",
              "City",
              "State",
              "Zip",
              "Program",
              "Session Date",
              "How Did You Hear",
              "Notes",
              "Payment Option",
              "Waiver Signed",
              "Waiver Name",
              "Waiver Date",
            ].map(s => ({ userEnteredValue: { stringValue: s } }))
          }]
        }]
      }
    ]
  }),
});

const data = await response.json() as { spreadsheetId?: string; error?: unknown };
if (data.spreadsheetId) {
  console.log("✅ Spreadsheet created!");
  console.log("   ID:", data.spreadsheetId);
  console.log("   URL:", `https://docs.google.com/spreadsheets/d/${data.spreadsheetId}`);
  console.log("\nSet this env var:\n  FFGS_SHEET_ID=" + data.spreadsheetId);
} else {
  console.error("❌ Failed:", JSON.stringify(data, null, 2));
}
