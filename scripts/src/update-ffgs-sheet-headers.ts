import { ReplitConnectors } from "@replit/connectors-sdk";

const SHEET_ID = process.env.FFGS_SHEET_ID;
if (!SHEET_ID) {
  console.error("❌ FFGS_SHEET_ID env var not set");
  process.exit(1);
}

const connectors = new ReplitConnectors();

const headers = [
  "Submitted At",
  "First Name", "Last Name", "Email", "Phone",
  "Street Address", "City / State / Zip",
  "School Month", "Attending For", "How Did You Hear",
  "Medical Conditions",
  "Emergency Contact Name", "Emergency Contact Phone",
  "Fly Fishing Journey", "Goals / Expectations",
  "Casting Level (0-5)", "Rowing Level (0-5)", "Favorite Techniques",
  "Waiver Signed", "Assume Risk", "Photo Release",
  "Signed Name",
  "Has Minor", "Minor Name", "Minor DOB", "Guardian Relationship",
  "Deposit Type", "Payment Status",
];

const response = await connectors.proxy(
  "google-sheet",
  `/v4/spreadsheets/${SHEET_ID}/values/Reservations!A1?valueInputOption=RAW`,
  {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ values: [headers] }),
  }
);

const data = await response.json() as { updatedRange?: string; error?: unknown };
if (data.updatedRange) {
  console.log("✅ Headers updated:", data.updatedRange);
  console.log("   Columns:", headers.length);
} else {
  console.error("❌ Failed:", JSON.stringify(data, null, 2));
}
