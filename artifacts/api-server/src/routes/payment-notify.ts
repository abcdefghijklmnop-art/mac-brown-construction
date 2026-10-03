import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID     = process.env.MBFF_BOOKING_SHEET_ID;
const FROM_EMAIL   = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO     = "macbrownflyfish@gmail.com";
const NOTIFY_EMAIL = "macbrownflyfish@gmail.com";

const METHOD_LABEL: Record<string, string> = {
  venmo: "Venmo",
  zelle: "Zelle",
  check: "Check",
};

router.post("/payment-notify", async (req, res) => {
  const {
    firstName, lastName, email,
    method, programs: programNames,
    total, anglers,
  } = req.body as Record<string, unknown>;

  if (!firstName || !lastName || !email || !method) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const fullName      = `${firstName} ${lastName}`;
  const methodLabel   = METHOD_LABEL[method as string] ?? String(method);
  const totalFormatted = `$${Number(total).toLocaleString()}`;
  const programList   = Array.isArray(programNames) ? (programNames as string[]) : [String(programNames ?? "")];

  const sentAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const sentDate = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
  });

  // ── Google Sheets — update columns R (Payment Method), U (Paid?), V (Payment Date) ──
  if (SHEET_ID) {
    try {
      const connectors = new ReplitConnectors();

      // Look up by email (column C) — consistent with all other routes
      const readRes = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${SHEET_ID}/values/Bookings!C:C`,
        { method: "GET" }
      );

      if (readRes.ok) {
        const data = await readRes.json() as { values?: string[][] };
        const rows = data.values || [];
        const emailLower = String(email || "").toLowerCase().trim();

        let matchRowIndex = -1;
        for (let i = rows.length - 1; i >= 1; i--) {
          if (emailLower && rows[i]?.[0]?.toLowerCase().trim() === emailLower) {
            matchRowIndex = i;
            break;
          }
        }

        if (matchRowIndex >= 0) {
          const sheetRow = matchRowIndex + 1;

          // Update R (Payment Method), U (Paid?), V (Payment Date) in one batch
          // R = col 18, U = col 21, V = col 22 — use batchUpdate for multiple cells
          await connectors.proxy(
            "google-sheet",
            `/v4/spreadsheets/${SHEET_ID}/values:batchUpdate`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                valueInputOption: "RAW",
                data: [
                  { range: `Bookings!R${sheetRow}`, values: [[methodLabel]] },
                  { range: `Bookings!U${sheetRow}`, values: [[`Pending – ${methodLabel}`]] },
                  { range: `Bookings!V${sheetRow}`, values: [[sentDate]] },
                ],
              }),
            }
          );

          req.log.info({ fullName, sheetRow, methodLabel }, "Payment notify — sheet updated");
        } else {
          req.log.warn({ fullName }, "Payment notify — no matching booking row found");
        }
      }
    } catch (err) {
      req.log.error(err, "Payment notify — sheet update failed, emails still sending");
    }
  }

  // ── Customer confirmation email ────────────────────────────────────────────
  try {
    let methodInstructions = "";
    if (method === "venmo") {
      methodInstructions = `<p style="font-size:14px; margin:4px 0;"><strong>Sent via:</strong> Venmo (@James-Brown-3656)</p>`;
    } else if (method === "zelle") {
      methodInstructions = `<p style="font-size:14px; margin:4px 0;"><strong>Sent via:</strong> Zelle (28713flyfishingguideschool)</p>`;
    } else if (method === "check") {
      methodInstructions = `<p style="font-size:14px; margin:4px 0;"><strong>Sent via:</strong> Check (mailed to 779 West Deep Creek Rd., Bryson City, NC 28713)</p>`;
    }

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
        subject: "Payment Received — Mac Brown Fly Fish",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
            <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
              <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                Mac Brown Fly Fish · Bryson City, NC · Est. 1987
              </p>
              <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">Payment Notification Received</h1>
            </div>

            <p style="font-size: 16px;">Hi ${firstName},</p>
            <p style="font-size: 15px; line-height: 1.6;">
              We've received your payment notification. Mac will verify the payment and
              confirm your reservation within one business day.
            </p>

            <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
              <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">
                Payment Summary
              </p>
              <p style="font-size: 14px; margin: 4px 0;"><strong>Name:</strong> ${fullName}</p>
              <p style="font-size: 14px; margin: 4px 0;"><strong>Program:</strong> ${programList.join(", ")}</p>
              <p style="font-size: 14px; margin: 4px 0;"><strong>Anglers:</strong> ${anglers}</p>
              <p style="font-size: 14px; margin: 4px 0;"><strong>Amount:</strong> ${totalFormatted}</p>
              ${methodInstructions}
              <p style="font-size: 14px; margin: 4px 0;"><strong>Notified:</strong> ${sentAt} ET</p>
            </div>

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
    req.log.info({ email, fullName, methodLabel }, "Payment notification sent to customer");
  } catch (err) {
    req.log.warn({ err }, "Customer payment notification email failed");
  }

  // ── Internal notification to Mac ──────────────────────────────────────────
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: email as string,
        to: NOTIFY_EMAIL,
        subject: `Payment sent: ${fullName} — ${methodLabel}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
            <h2 style="border-bottom: 2px solid #1B3D6E; padding-bottom: 10px; color: #1B3D6E;">
              Payment Notification
            </h2>
            <p style="font-size: 14px; color: #555;">
              ${fullName} has notified you that they've sent payment via <strong>${methodLabel}</strong>.
            </p>
            <table style="width:100%; font-size:14px; border-collapse:collapse; margin-top:16px;">
              <tr><td style="padding:6px 0; color:#666; width:150px;">Name</td><td style="padding:6px 0; font-weight:bold;">${fullName}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#1B3D6E;">${email}</a></td></tr>
              <tr><td style="padding:6px 0; color:#666;">Program(s)</td><td style="padding:6px 0; font-weight:bold;">${programList.join("<br/>")}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Anglers</td><td style="padding:6px 0;">${anglers}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Amount</td><td style="padding:6px 0; font-weight:bold;">${totalFormatted}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Method</td><td style="padding:6px 0;">${methodLabel}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Notified at</td><td style="padding:6px 0;">${sentAt} ET</td></tr>
            </table>
            <p style="font-size: 13px; color: #888; margin-top: 20px;">
              Column U in the Bookings sheet has been updated to "Pending – ${methodLabel}".
            </p>
          </div>
        `,
      }),
    });
    req.log.info("Internal payment notification sent to Mac");
  } catch (err) {
    req.log.warn({ err }, "Internal payment notification email failed");
  }

  res.json({ ok: true });
});

export default router;
