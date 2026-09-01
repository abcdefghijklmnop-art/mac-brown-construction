import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID = process.env.MBFF_BOOKING_SHEET_ID;

// POST /payment-method-intent
// Called the moment a client taps a payment widget on the payment page.
// Silently updates column R (Payment Method) — no email sent.
router.post("/payment-method-intent", async (req, res) => {
  const { email, method } = req.body as Record<string, unknown>;

  if (!email || !method) {
    res.status(400).json({ error: "email and method required" });
    return;
  }

  if (!SHEET_ID) {
    res.json({ ok: true, note: "sheet not configured" });
    return;
  }

  try {
    const connectors = new ReplitConnectors();

    const readRes = await connectors.proxy(
      "google-sheet",
      `/v4/spreadsheets/${SHEET_ID}/values/Bookings!C:C`,
      { method: "GET" }
    );

    if (!readRes.ok) {
      res.json({ ok: false });
      return;
    }

    const data = await readRes.json() as { values?: string[][] };
    const rows = data.values || [];
    const emailLower = String(email).toLowerCase().trim();

    let matchRowIndex = -1;
    for (let i = rows.length - 1; i >= 1; i--) {
      if (rows[i]?.[0]?.toLowerCase().trim() === emailLower) {
        matchRowIndex = i;
        break;
      }
    }

    if (matchRowIndex >= 0) {
      const sheetRow = matchRowIndex + 1;
      await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(`Bookings!R${sheetRow}`)}?valueInputOption=RAW`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ values: [[String(method)]] }),
        }
      );
      req.log.info({ email, method, sheetRow }, "payment-method-intent — column R updated");
    } else {
      req.log.warn({ email }, "payment-method-intent — no matching row found");
    }

    res.json({ ok: true });
  } catch (err) {
    req.log.error(err, "payment-method-intent error");
    res.json({ ok: false });
  }
});

export default router;
