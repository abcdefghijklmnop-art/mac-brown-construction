import { Router } from "express";
import fs from "fs";
import path from "path";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const SHEET_ID = process.env.MBFF_BOOKING_SHEET_ID;

const FROM_EMAIL   = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO     = "macbrownflyfish@gmail.com";

const PDF_DIR      = path.resolve(__dirname, "../static/pdfs");
const PDF_DIR_MBFF = path.resolve(__dirname, "../static/pdfs/mbff");

interface PdfRule {
  keywords: string[];
  file: string;
  dir: string;
  filename: string;
}

// Program-specific PDFs matched by keyword
const PDF_RULES: PdfRule[] = [
  {
    keywords: ["dry fly"],
    file: "Dry_Fly_2.5Hour_Foundations_Clinic.pdf",
    dir: PDF_DIR,
    filename: "Dry Fly 2.5-Hour Foundations Clinic.pdf",
  },
  {
    keywords: ["nymph"],
    file: "Nymph_2.5Hour_Foundations_Clinic.pdf",
    dir: PDF_DIR,
    filename: "Nymph 2.5-Hour Foundations Clinic.pdf",
  },
  {
    keywords: ["streamer"],
    file: "StreamerSchool_2.5Hour_Foundations_Clinic.pdf",
    dir: PDF_DIR,
    filename: "Streamer School 2.5-Hour Foundations Clinic.pdf",
  },
  {
    keywords: ["wet fly"],
    file: "Wet_Fly_2.5Hour_Foundations_Clinic.pdf",
    dir: PDF_DIR,
    filename: "Wet Fly 2.5-Hour Foundations Clinic.pdf",
  },
  {
    keywords: ["oar frame", "rowing"],
    file: "OarFrameRowingSchool_2Day_Lesson_Plan.pdf",
    dir: PDF_DIR_MBFF,
    filename: "Oar Frame Rowing School 2-Day Lesson Plan.pdf",
  },
  {
    keywords: ["casting mastery", "fly casting", "masterclass", "smoky mountain", "weekend casting", "weekend school"],
    file: "FlyCastingMasteryWorkshop_2Day_Handout.pdf",
    dir: PDF_DIR_MBFF,
    filename: "Fly Casting Mastery Workshop 2-Day Handout.pdf",
  },
  {
    keywords: ["spey", "switch"],
    file: "Spey_Elite_StudentLesson.pdf",
    dir: PDF_DIR_MBFF,
    filename: "Spey Elite Student Lesson.pdf",
  },
  {
    keywords: ["saltwater"],
    file: "Saltwater_Masterclass_StudentLesson.pdf",
    dir: PDF_DIR_MBFF,
    filename: "Saltwater Masterclass Student Lesson.pdf",
  },
];

// Oar frame / rowing is the only program that does NOT get the Advanced Casting handout
const OAR_FRAME_KEYWORDS = ["oar frame", "rowing"];

function readPdf(dir: string, file: string): string | null {
  const filePath = path.join(dir, file);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath).toString("base64") : null;
}

function buildAttachments(program: string): { filename: string; content: string }[] {
  const prog = program.toLowerCase();
  const attachments: { filename: string; content: string }[] = [];

  // Attach program-specific PDF
  for (const rule of PDF_RULES) {
    if (rule.keywords.some((kw) => prog.includes(kw))) {
      const content = readPdf(rule.dir, rule.file);
      if (content) attachments.push({ filename: rule.filename, content });
      break; // one program-specific PDF per booking
    }
  }

  // Advanced Casting handout goes on everything EXCEPT oar frame / rowing
  const isOarFrame = OAR_FRAME_KEYWORDS.some((kw) => prog.includes(kw));
  if (!isOarFrame) {
    const content = readPdf(PDF_DIR_MBFF, "Advanced_Casting_MB_GB.pdf");
    if (content) attachments.push({ filename: "Advanced Casting Handout.pdf", content });
  }

  return attachments;
}

router.post("/payment-confirmed", async (req, res) => {
  const {
    firstName, fullName, email,
    program, anglers, total, paymentMethod,
  } = req.body as Record<string, unknown>;

  if (!email) {
    res.status(400).json({ error: "Missing email." });
    return;
  }

  const name = (firstName as string) || (fullName as string) || "there";
  const programStr = String(program || "");
  const attachments = programStr ? buildAttachments(programStr) : [];
  const methodLabel = String(paymentMethod || "Card");

  const paidDate = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
  });

  // ── Google Sheets — update R (Payment Method), U (Paid?), V (Payment Date) ─
  if (SHEET_ID) {
    try {
      const connectors = new ReplitConnectors();
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
                  { range: `Bookings!U${sheetRow}`, values: [["Paid"]] },
                  { range: `Bookings!V${sheetRow}`, values: [[paidDate]] },
                ],
              }),
            }
          );
          req.log.info({ email, sheetRow, methodLabel }, "payment-confirmed — sheet updated R/U/V");
        } else {
          req.log.warn({ email }, "payment-confirmed — no matching booking row found in sheet");
        }
      }
    } catch (err) {
      req.log.error(err, "payment-confirmed — sheet update failed, email still sending");
    }
  }

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: REPLY_TO,
        to: email as string,
        subject: "Payment Confirmed — Mac Brown Fly Fish",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
            <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
              <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                Mac Brown Fly Fish · Bryson City, NC · Est. 1987
              </p>
              <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">You're Confirmed on the Water</h1>
            </div>

            <p style="font-size: 16px;">Hi ${name},</p>
            <p style="font-size: 15px; line-height: 1.6;">
              Your payment has been received and verified. Your spot is confirmed — we'll
              be in touch shortly with full trip details and a meeting location.
            </p>

            <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
              <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">
                Booking Summary
              </p>
              ${fullName ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Name:</strong> ${fullName}</p>` : ""}
              ${programStr ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Program:</strong> ${programStr}</p>` : ""}
              ${anglers ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Anglers:</strong> ${anglers}</p>` : ""}
              ${total ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Amount Paid:</strong> ${total}</p>` : ""}
              ${paymentMethod ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Payment Method:</strong> ${paymentMethod}</p>` : ""}
            </div>

            ${attachments.length > 0 ? `
            <p style="font-size: 15px; line-height: 1.6;">
              We've attached your program handout(s) to this email. Please review them before your session.
            </p>
            ` : ""}

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
        ...(attachments.length > 0 ? { attachments } : {}),
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      req.log.error({ err, email }, "payment-confirmed email failed");
      res.status(500).json({ error: "Email failed." });
      return;
    }

    req.log.info({ email, fullName, program: programStr, pdfCount: attachments.length }, "Payment confirmed — customer notified");
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err, "payment-confirmed unexpected error");
    res.status(500).json({ error: "Unexpected error." });
  }
});

export default router;
