import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID     = process.env.MBFF_BOOKING_SHEET_ID;
const FROM_EMAIL   = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO     = "macbrownflyfish@gmail.com";
const NOTIFY_EMAIL = "macbrownflyfish@gmail.com";

interface Participant { name: string; email?: string; }

router.post("/waiver", async (req, res) => {
  const {
    firstName, lastName,
    email, phone,
    programs,
    hasMinor,
    minorFirstName, minorLastName, minorDob, guardianRelationship,
    additionalParticipants,
    signature,
    agreements,
    timestamp,
    siteUrl,
  } = req.body;

  if (!firstName || !lastName || !signature) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const fullName = `${firstName} ${lastName}`;
  const signedAt = new Date((timestamp as string) || Date.now()).toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  // ── Google Sheets — find matching booking row and update column W ──────────
  // Column W (index 22) = "Waiver Signed"
  // Strategy: fetch column B (Full Name) from Bookings, find the last matching
  // row, then PUT the value into that row's W cell.
  if (SHEET_ID) {
    try {
      const connectors = new ReplitConnectors();

      // 1. Read column C (Email) to find the matching row — email is exact and
      //    avoids name-mismatch failures (e.g. "Bill" vs "William").
      const readRes = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${SHEET_ID}/values/Bookings!C:C`,
        { method: "GET" }
      );

      if (readRes.ok) {
        const data = await readRes.json() as { values?: string[][] };
        const rows = data.values || [];

        // Find the last row (most recent booking) where Email matches
        // rows[0] = header ("Email"), rows[1]+ = data
        const emailLower = String(email || "").toLowerCase().trim();
        let matchRowIndex = -1;
        for (let i = rows.length - 1; i >= 1; i--) {
          if (emailLower && rows[i]?.[0]?.toLowerCase().trim() === emailLower) {
            matchRowIndex = i;
            break;
          }
        }

        if (matchRowIndex >= 0) {
          // Sheet rows are 1-based; rows array is 0-based → add 1
          const sheetRow = matchRowIndex + 1;

          const updateRes = await connectors.proxy(
            "google-sheet",
            `/v4/spreadsheets/${SHEET_ID}/values:batchUpdate`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                valueInputOption: "RAW",
                data: [{ range: `Bookings!W${sheetRow}`, values: [[`Yes — ${signedAt}`]] }],
              }),
            }
          );

          if (updateRes.ok) {
            req.log.info({ fullName, sheetRow }, "Waiver signed — column W updated");
          } else {
            const err = await updateRes.text();
            req.log.error({ err, sheetRow }, "Failed to update waiver column W");
          }
        } else {
          req.log.warn({ fullName }, "No matching booking row found for waiver — W not updated");
        }
      } else {
        const err = await readRes.text();
        req.log.error({ err }, "Could not read Bookings sheet to find waiver row");
      }
    } catch (err) {
      req.log.error(err, "Waiver Google Sheets error — waiver notification still proceeding");
    }
  } else {
    req.log.warn("MBFF_BOOKING_SHEET_ID not set — skipping waiver sheet update");
  }

  // ── Waiver invitations for additional participants ────────────────────────
  const invitesSent: string[] = [];
  const extras: Participant[] = Array.isArray(additionalParticipants) ? additionalParticipants as Participant[] : [];
  const programLabel = Array.isArray(programs) && programs.length > 0 ? (programs as string[]).join(", ") : "your upcoming outing";
  const waiverLink = `${(siteUrl as string) || "https://macbrownflyfish.com"}/waiver-release`;

  for (const participant of extras) {
    if (!participant.email) continue;
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
          to: participant.email,
          subject: `Action required: Sign your waiver — Mac Brown Fly Fish`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
                <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                  Mac Brown Fly Fish · Bryson City, NC · Est. 1987
                </p>
                <h1 style="font-size: 22px; font-weight: bold; margin: 8px 0 0;">Please Sign Your Waiver</h1>
              </div>

              <p style="font-size: 15px; line-height: 1.6;">Hi ${participant.name},</p>
              <p style="font-size: 15px; line-height: 1.6;">
                <strong>${firstName} ${lastName}</strong> has booked a group outing with Mac Brown Fly Fish
                (<em>${programLabel}</em>). Before you can participate, each member of the group must
                sign a participation waiver individually.
              </p>
              <p style="font-size: 15px; line-height: 1.6;">
                Please take a moment to read and sign yours — it only takes about a minute:
              </p>

              <div style="text-align: center; margin: 32px 0;">
                <a href="${waiverLink}"
                   style="display: inline-block; background: #1E3D2F; color: white; font-size: 14px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 32px; text-decoration: none; border-radius: 4px;">
                  Sign My Waiver
                </a>
              </div>

              <p style="font-size: 13px; color: #888; line-height: 1.6;">
                Or copy this link: <a href="${waiverLink}" style="color: #1E3D2F;">${waiverLink}</a>
              </p>

              <div style="border-top: 1px solid #ddd; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #888;">
                <p style="margin: 0;">Questions? Call or text (828) 736-1469.</p>
                <p style="margin: 4px 0 0; font-weight: bold; color: #1a1a1a;">Mac Brown Fly Fish · Bryson City, NC 28713</p>
              </div>
            </div>
          `,
        }),
      });
      invitesSent.push(participant.email);
      req.log.info({ email: participant.email, name: participant.name }, "Waiver invite sent");
    } catch (err) {
      req.log.warn({ err, email: participant.email }, "Failed to send waiver invite");
    }
  }

  // ── Internal notification with signature image ────────────────────────────
  try {
    const sigTag = signature
      ? `<img src="${signature as string}" alt="Signature" style="max-width:400px; border:1px solid #ccc; padding:8px; background:#fff;" />`
      : "<em>No signature image</em>";

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: email || REPLY_TO,
        to: NOTIFY_EMAIL,
        subject: `Waiver signed — ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
            <h2 style="border-bottom: 2px solid #1B3D6E; padding-bottom: 10px; color: #1B3D6E;">
              Waiver Signed
            </h2>
            <table style="width:100%; font-size:14px; border-collapse:collapse;">
              <tr><td style="padding:6px 0; color:#666; width:160px;">Name</td><td style="padding:6px 0; font-weight:bold;">${fullName}</td></tr>
              ${email ? `<tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#1B3D6E;">${email}</a></td></tr>` : ""}
              ${phone ? `<tr><td style="padding:6px 0; color:#666;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>` : ""}
              <tr><td style="padding:6px 0; color:#666;">Minor?</td><td style="padding:6px 0;">${hasMinor ? `Yes — ${minorFirstName ?? ""} ${minorLastName ?? ""} (DOB: ${minorDob || "—"})` : "No"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Read waiver</td><td style="padding:6px 0;">${agreements?.readWaiver ? "✓ Yes" : "✗ No"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Assumed risk</td><td style="padding:6px 0;">${agreements?.assumeRisk ? "✓ Yes" : "✗ No"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Photo release</td><td style="padding:6px 0;">${agreements?.photoRelease ? "✓ Yes" : "✗ No"}</td></tr>
              <tr><td style="padding:6px 0; color:#666;">Signed at</td><td style="padding:6px 0;">${signedAt} ET</td></tr>
            </table>
            <div style="margin-top:24px;">
              <p style="font-size:12px; color:#666; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.1em;">Signature</p>
              ${sigTag}
            </div>
          </div>
        `,
      }),
    });
    req.log.info({ fullName }, "Waiver notification sent via Resend");
  } catch (err) {
    req.log.warn({ err }, "Waiver notification email failed — sheet still updated");
  }

  res.json({ success: true, invitesSent });
});

export default router;
