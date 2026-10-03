import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID = process.env.MBFF_BOOKING_SHEET_ID;

// GET /waiver-status?email=xxx
// Returns { signed: true } if column W contains "Yes" for the most recent booking
// with that email. Returns { signed: false } if not found or not signed.
router.get("/waiver-status", async (req, res) => {
  const email = String(req.query.email || "").toLowerCase().trim();

  if (!email) {
    res.status(400).json({ error: "email query param required" });
    return;
  }

  if (!SHEET_ID) {
    req.log.warn("MBFF_BOOKING_SHEET_ID not set — waiver-status returning unsigned");
    res.json({ signed: false, reason: "sheet_not_configured" });
    return;
  }

  try {
    const connectors = new ReplitConnectors();

    // Read columns C (Email) and W (Waiver Signed) together
    const readRes = await connectors.proxy(
      "google-sheet",
      `/v4/spreadsheets/${SHEET_ID}/values/Bookings!C:W`,
      { method: "GET" }
    );

    if (!readRes.ok) {
      const err = await readRes.text();
      req.log.error({ err }, "waiver-status — sheet read failed");
      res.json({ signed: false, reason: "sheet_read_failed" });
      return;
    }

    const data = await readRes.json() as { values?: string[][] };
    const rows = data.values || [];

    // rows[0] = header row, rows[1+] = data
    // Column C is index 0 in this range (C:W), column W is index 20
    let waiverValue = "";
    for (let i = rows.length - 1; i >= 1; i--) {
      const rowEmail = (rows[i]?.[0] ?? "").toLowerCase().trim();
      if (rowEmail === email) {
        waiverValue = rows[i]?.[20] ?? "";
        break;
      }
    }

    const signed = waiverValue.toLowerCase().startsWith("yes");
    req.log.info({ email, signed, waiverValue }, "waiver-status check");
    res.json({ signed, waiverValue: signed ? waiverValue : undefined });
  } catch (err) {
    req.log.error(err, "waiver-status — unexpected error");
    res.json({ signed: false, reason: "error" });
  }
});

export default router;
