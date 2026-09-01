import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID = process.env.FFGS_SHEET_ID;
const SCHOOL_EMAIL = "flyfishingguideschool@gmail.com";

router.post("/ffgs-reservation", async (req, res) => {
  if (!SHEET_ID) {
    req.log.error("FFGS_SHEET_ID not set");
    res.status(500).json({ error: "Sheet not configured." });
    return;
  }

  const {
    timestamp,
    firstName, lastName, email, phone,
    streetAddress, cityStateZip,
    schoolMonth, attendingFor, heardAboutUs,
    medicalConditions,
    emergencyContact, emergencyPhone,
    flyfishingJourney, expectations,
    castingLevel, rowingLevel, favoriteTechniques,
    waiverSigned, assumeRisk, photoRelease,
    signedName, hasMinor, minorName, minorDob, guardianRelationship,
    depositType, paymentStatus,
  } = req.body as Record<string, unknown>;

  const submittedAt = new Date(timestamp as string || Date.now())
    .toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" });

  const row = [
    submittedAt,
    firstName, lastName, email, phone,
    streetAddress, cityStateZip,
    schoolMonth, attendingFor, heardAboutUs,
    medicalConditions,
    emergencyContact, emergencyPhone,
    flyfishingJourney, expectations,
    castingLevel, rowingLevel, favoriteTechniques,
    waiverSigned ? "Yes" : "No",
    assumeRisk   ? "Yes" : "No",
    photoRelease ? "Yes" : "No",
    signedName,
    hasMinor ? "Yes" : "No",
    minorName ?? "", minorDob ?? "", guardianRelationship ?? "",
    depositType, paymentStatus ?? "Pending",
  ];

  try {
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy(
      "google-sheet",
      `/v4/spreadsheets/${SHEET_ID}/values/Reservations!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: [row] }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      req.log.error({ err }, "Google Sheets append failed");
      res.status(500).json({ error: "Failed to save reservation." });
      return;
    }

    req.log.info({ email, firstName, lastName }, "FFGS reservation saved to Google Sheet");

    // ── Send confirmation email via Resend ──────────────────────────
    const isCard = (depositType as string)?.startsWith("Card");

    if (!isCard && email) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Fly Fishing Guide School <noreply@macbrownflyfish.com>",
            to: email,
            subject: "Reservation Received – Fly Fishing Guide School 🎣",
            html: `
              <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
                  <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                    Bryson City, NC · Est. 1987
                  </p>
                  <h1 style="font-size: 28px; font-weight: bold; margin: 8px 0 0;">
                    Fly Fishing Guide School
                  </h1>
                </div>

                <p style="font-size: 16px;">Hi ${firstName},</p>

                <p style="font-size: 15px; line-height: 1.6;">
                  We've received your reservation and signed waiver for the
                  <strong>${schoolMonth}</strong> session. Your spot is being held
                  while we wait to receive your payment.
                </p>

                <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
                  <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 8px;">
                    Reservation Summary
                  </p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>School Month:</strong> ${schoolMonth}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Payment Method:</strong> ${depositType}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> Pending receipt</p>
                </div>

                <p style="font-size: 15px; line-height: 1.6;">
                  Once your payment is confirmed, we'll send a final enrollment
                  confirmation along with your packing list and schedule.
                </p>

                ${(depositType as string)?.toLowerCase().includes("venmo") ? `
                <div style="background: #fff8e1; border: 1px solid #f0c040; padding: 14px 18px; margin: 20px 0; font-size: 14px;">
                  <strong>Venmo reminder:</strong> Send to <strong>@James-Brown3656</strong> and include
                  your name and school month in the note.
                </div>` : ""}

                ${(depositType as string)?.toLowerCase().includes("zelle") ? `
                <div style="background: #fff8e1; border: 1px solid #f0c040; padding: 14px 18px; margin: 20px 0; font-size: 14px;">
                  <strong>Zelle reminder:</strong> Send to <strong>(828) 736-1469</strong> and include
                  your name and school month in the memo.
                </div>` : ""}

                ${(depositType as string)?.toLowerCase().includes("check") ? `
                <div style="background: #fff8e1; border: 1px solid #f0c040; padding: 14px 18px; margin: 20px 0; font-size: 14px;">
                  <strong>Check reminder:</strong> Make payable to <strong>Fly Fishing Guide School</strong>
                  and mail to:<br/>
                  <span style="font-family: monospace; display: block; margin-top: 8px;">
                    779 West Deep Creek Rd<br/>Bryson City, NC 28713
                  </span>
                </div>` : ""}

                <p style="font-size: 15px; line-height: 1.6;">
                  Questions? Call us at
                  <a href="tel:+18287361469" style="color: #1a1a1a;">(828) 736-1469</a>
                  or reply to this email.
                </p>

                <div style="border-top: 1px solid #ddd; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #888;">
                  <p style="margin: 0;">We'll see you on the water,</p>
                  <p style="margin: 4px 0 0; font-weight: bold; color: #1a1a1a;">
                    Mac Brown &amp; The Fly Fishing Guide School Team
                  </p>
                  <p style="margin: 4px 0 0;">779 West Deep Creek Rd · Bryson City, NC 28713</p>
                </div>
              </div>
            `,
          }),
        });
        req.log.info({ email }, "Student confirmation email sent");
      } catch (emailErr) {
        req.log.warn({ emailErr }, "Confirmation email failed — reservation still saved");
      }
    }

    // ── School notification (all payment methods) ───────────────────
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Fly Fishing Guide School <noreply@macbrownflyfish.com>",
          to: SCHOOL_EMAIL,
          subject: `New Reservation: ${firstName} ${lastName} — ${schoolMonth}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
              <h2 style="border-bottom: 2px solid #2c4a7c; padding-bottom: 10px; color: #2c4a7c;">
                New Reservation Received
              </h2>
              <table style="width:100%; font-size:14px; border-collapse:collapse;">
                <tr><td style="padding:6px 0; color:#666; width:160px;">Name</td><td style="padding:6px 0; font-weight:bold;">${firstName} ${lastName}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#2c4a7c;">${email}</a></td></tr>
                <tr><td style="padding:6px 0; color:#666;">Phone</td><td style="padding:6px 0;"><a href="tel:${phone}" style="color:#2c4a7c;">${phone}</a></td></tr>
                <tr><td style="padding:6px 0; color:#666;">School Month</td><td style="padding:6px 0; font-weight:bold;">${schoolMonth}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Attending For</td><td style="padding:6px 0;">${attendingFor}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Payment Method</td><td style="padding:6px 0;">${depositType}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Payment Status</td><td style="padding:6px 0;">${paymentStatus ?? "Pending"}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Casting Level</td><td style="padding:6px 0;">${castingLevel}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Rowing Level</td><td style="padding:6px 0;">${rowingLevel}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Submitted</td><td style="padding:6px 0;">${submittedAt}</td></tr>
              </table>
            </div>
          `,
        }),
      });
      req.log.info("School notification email sent");
    } catch (notifyErr) {
      req.log.warn({ notifyErr }, "School notification email failed — reservation still saved");
    }
    // ────────────────────────────────────────────────────────────────

    res.json({ ok: true });
  } catch (err) {
    req.log.error(err, "Error saving FFGS reservation");
    res.status(500).json({ error: "Failed to save reservation." });
  }
});

export default router;
