import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID      = process.env.MBFF_BOOKING_SHEET_ID;
const NOTIFY_EMAIL  = "macbrownflyfish@gmail.com";
const FROM_EMAIL    = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO      = "macbrownflyfish@gmail.com";

router.post("/reserve", async (req, res) => {
  const {
    timestamp,
    firstName, lastName, email, phone,
    programs: programNames,
    anglers, total, unitPrice,
    paymentMethod,
    datePreference, notes,
  } = req.body as Record<string, unknown>;

  if (!firstName || !lastName || !email || !phone) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const submittedAt = new Date((timestamp as string) || Date.now()).toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fullName     = `${firstName} ${lastName}`;
  const programList  = Array.isArray(programNames) ? programNames as string[] : [String(programNames ?? "")];
  const totalFormatted = `$${Number(total).toLocaleString()}`;
  const unitPriceFormatted = unitPrice ? `$${Number(unitPrice).toLocaleString()}` : "";
  const paymentMethodStr = String(paymentMethod || "");

  // ── Google Sheets — Bookings tab (columns A–X) ────────────────────────────
  // A  Timestamp | B  Full Name    | C  Email          | D  Phone
  // E  Medical Notes | F  How Heard | G  Program        | H  Pricing Type
  // I  Angler Count  | J  Guides Needed | K Angler Names | L  Schools Selected
  // M  Techniques    | N  Skills to Improve | O  Preferred Date | P  Confirmed Date
  // Q  Guides Assigned | R  Payment Method | S  Program Price | T  Total Due
  // U  Paid?  | V  Payment Date | W  Waiver Signed | X  Notes
  if (SHEET_ID) {
    try {
      const connectors = new ReplitConnectors();
      const row = [
        submittedAt,          // A  Timestamp
        fullName,             // B  Full Name
        email,                // C  Email
        phone,                // D  Phone
        "",                   // E  Medical Notes
        "",                   // F  How Heard
        programList.join(", "), // G  Program
        "",                   // H  Pricing Type
        String(anglers ?? 1), // I  Angler Count
        "",                   // J  Guides Needed
        "",                   // K  Angler Names
        "",                   // L  Schools Selected
        "",                   // M  Techniques
        "",                   // N  Skills to Improve
        datePreference ?? "", // O  Preferred Date
        "",                   // P  Confirmed Date
        "",                   // Q  Guides Assigned
        "",                   // R  Payment Method — set later by payment-method-intent when client picks widget
        unitPriceFormatted,   // S  Program Price
        totalFormatted,       // T  Total Due
        "",                   // U  Paid?
        "",                   // V  Payment Date
        "No",                 // W  Waiver Signed
        notes ?? "",          // X  Notes
      ];

      const sheetRes = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${SHEET_ID}/values/Bookings!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ values: [row] }),
        }
      );

      if (!sheetRes.ok) {
        const err = await sheetRes.text();
        req.log.error({ err }, "Google Sheets append failed");
      } else {
        req.log.info({ email, fullName }, "Booking saved to Google Sheet");
      }
    } catch (err) {
      req.log.error(err, "Google Sheets error — booking still proceeding");
    }
  } else {
    req.log.warn("MBFF_BOOKING_SHEET_ID not set — skipping Google Sheets");
  }

  // ── Student confirmation email ─────────────────────────────────────────────
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: REPLY_TO,
        to: email as string,
        subject: "Reservation Received — Mac Brown Fly Fish",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
            <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
              <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                Mac Brown Fly Fish · Bryson City, NC · Est. 1987
              </p>
              <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">Reservation Received</h1>
            </div>

            <p style="font-size: 16px;">Hi ${firstName},</p>
            <p style="font-size: 15px; line-height: 1.6;">
              Your reservation request is in. Your next steps are to sign the participation waiver
              and complete payment — then you're confirmed on the water.
            </p>

            <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
              <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">
                Reservation Summary
              </p>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${fullName}</p>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Program:</strong> ${programList.join(", ")}</p>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Anglers:</strong> ${anglers}</p>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Total:</strong> ${totalFormatted}</p>
              ${datePreference ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Date Preference:</strong> ${datePreference}</p>` : ""}
            </div>

            <p style="font-size: 15px; line-height: 1.6;">
              <strong>Next steps:</strong><br/>
              1. Sign your participation waiver (you should be there now).<br/>
              2. Complete payment — card (SwipeSimple), Venmo, or Zelle accepted.<br/>
              3. We'll confirm your date and send a full trip briefing within 24 hours.
            </p>

            <p style="font-size: 15px; line-height: 1.6;">
              Questions? Call or text
              <a href="tel:+18287361469" style="color: #1a1a1a;">(828) 736-1469</a>
              or reply to this email.
            </p>

            <div style="border-top: 1px solid #ddd; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #888;">
              <p style="margin: 0;">We'll see you on the water,</p>
              <p style="margin: 4px 0 0; font-weight: bold; color: #1a1a1a;">Mac Brown</p>
              <p style="margin: 4px 0 0;">Mac Brown Fly Fish · Bryson City, NC 28713</p>
            </div>
          </div>
        `,
      }),
    });
    req.log.info({ email }, "Booking confirmation sent");
  } catch (emailErr) {
    req.log.warn({ emailErr }, "Confirmation email failed — booking still saved");
  }

  // ── Internal notification ──────────────────────────────────────────────────
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: REPLY_TO,
        to: NOTIFY_EMAIL,
        subject: `ACTION NEEDED — New Booking: ${fullName} · ${programList.join(", ")}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
            <h2 style="border-bottom: 2px solid #1B3D6E; padding-bottom: 10px; color: #1B3D6E;">
              New Booking — Action Required
            </h2>
            <div style="background:#fff8e1; border-left:4px solid #f59e0b; padding:12px 16px; margin-bottom:20px; font-size:13px; color:#78350f;">
              <strong>What to do:</strong> Confirm the requested date is available, then reply or call to lock it in. Payment is coming via the method shown below — only check that one place.
            </div>
            <div style="background:#1B3D6E; color:#fff; padding:14px 20px; margin-bottom:20px; font-size:15px; font-weight:bold; letter-spacing:0.04em;">
              💳 Payment Method: recorded when client selects on payment page
            </div>
            <table style="width:100%; font-size:14px; border-collapse:collapse;">
              <tr><td style="padding:6px 0; color:#666; width:150px;">Name</td><td style="padding:6px 0; font-weight:bold;">${fullName}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#1B3D6E;">${email}</a></td></tr>
              <tr><td style="padding:6px 0; color:#666;">Phone</td><td style="padding:6px 0;"><a href="tel:${phone}" style="color:#1B3D6E;">${phone}</a></td></tr>
              <tr><td style="padding:6px 0; color:#666;">Program(s)</td><td style="padding:6px 0; font-weight:bold;">${programList.join("<br/>")}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Anglers</td><td style="padding:6px 0;">${anglers}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Unit Price</td><td style="padding:6px 0;">${unitPriceFormatted || "—"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Total Due</td><td style="padding:6px 0; font-weight:bold;">${totalFormatted}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Requested Date</td><td style="padding:6px 0; font-weight:bold; color:#1B3D6E;">${datePreference ?? "— (no date given)"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Notes</td><td style="padding:6px 0;">${notes ?? "—"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Submitted</td><td style="padding:6px 0;">${submittedAt} ET</td></tr>
            </table>
            <div style="margin-top:20px; padding:12px 16px; background:#f0f4ff; border:1px solid #c7d2fe; font-size:13px; color:#3730a3;">
              Client is being directed to sign the waiver, then pay via ${paymentMethodStr || "selected method"}. Column R in the Bookings sheet is set. Column W will update to "Yes" once they sign the waiver.
            </div>
          </div>
        `,
      }),
    });
    req.log.info("Internal booking notification sent");
  } catch (notifyErr) {
    req.log.warn({ notifyErr }, "Internal notification failed — booking still saved");
  }

  res.json({ ok: true });
});

export default router;
