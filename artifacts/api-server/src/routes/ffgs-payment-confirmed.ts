import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const FROM_EMAIL  = "Fly Fishing Guide School <noreply@macbrownflyfish.com>";
const REPLY_TO    = "flyfishingguideschool@gmail.com";

const PDF_DIR      = path.resolve(__dirname, "../static/pdfs");
const PDF_DIR_MBFF = path.resolve(__dirname, "../static/pdfs/mbff");

interface PdfRule {
  keywords: string[];
  file: string;
  dir: string;
  filename: string;
}

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
];

function readPdf(dir: string, file: string): string | null {
  const filePath = path.join(dir, file);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath).toString("base64") : null;
}

function buildAttachments(attendingFor: string): { filename: string; content: string }[] {
  const attending = attendingFor.toLowerCase();
  const attachments: { filename: string; content: string }[] = [];

  for (const rule of PDF_RULES) {
    if (rule.keywords.some((kw) => attending.includes(kw))) {
      const content = readPdf(rule.dir, rule.file);
      if (content) attachments.push({ filename: rule.filename, content });
      break;
    }
  }

  const advContent = readPdf(PDF_DIR_MBFF, "Advanced_Casting_MB_GB.pdf");
  if (advContent) attachments.push({ filename: "Advanced Casting Handout.pdf", content: advContent });

  return attachments;
}

router.post("/ffgs-payment-confirmed", async (req, res) => {
  const {
    firstName, lastName, email,
    schoolMonth, attendingFor, depositType, paymentStatus,
  } = req.body as Record<string, unknown>;

  if (!email) {
    res.status(400).json({ error: "Missing email." });
    return;
  }

  const name        = String(firstName || "there");
  const fullName    = `${firstName ?? ""} ${lastName ?? ""}`.trim();
  const month       = String(schoolMonth   || "");
  const attending   = String(attendingFor  || "");
  const method      = String(depositType   || "");
  const status      = String(paymentStatus || "Confirmed");

  const attachments = buildAttachments(attending);

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
        subject: "Payment Confirmed — Fly Fishing Guide School",
        attachments,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
            <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
              <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                Bryson City, NC · Est. 1987
              </p>
              <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">You're Enrolled — See You on the Water</h1>
            </div>

            <p style="font-size: 16px;">Hi ${name},</p>
            <p style="font-size: 15px; line-height: 1.6;">
              Your payment has been received and confirmed. Your enrollment in the
              <strong>${month}</strong> Fly Fishing Guide School is official.
              We'll be in touch shortly with your full schedule, packing list, and meeting details.
            </p>

            <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
              <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">
                Enrollment Summary
              </p>
              ${fullName    ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Name:</strong> ${fullName}</p>` : ""}
              ${month       ? `<p style="font-size: 14px; margin: 4px 0;"><strong>School Month:</strong> ${month}</p>` : ""}
              ${attending   ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Attending For:</strong> ${attending}</p>` : ""}
              ${method      ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Payment Method:</strong> ${method}</p>` : ""}
              <p style="font-size: 14px; margin: 4px 0;"><strong>Status:</strong> ${status}</p>
            </div>

            <p style="font-size: 15px; line-height: 1.6;">
              Questions before the school? Call or text
              <a href="tel:+18287361469" style="color: #1a1a1a;">(828) 736-1469</a>
              or reply to this email.
            </p>

            <div style="border-top: 1px solid #ddd; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #888;">
              <p style="margin: 0;">We'll see you on the water,</p>
              <p style="margin: 4px 0 0; font-weight: bold; color: #1a1a1a;">Mac Brown &amp; The Fly Fishing Guide School Team</p>
              <p style="margin: 4px 0 0;">779 West Deep Creek Rd · Bryson City, NC 28713</p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      req.log.error({ err, email }, "ffgs-payment-confirmed email failed");
      res.status(500).json({ error: "Email failed." });
      return;
    }

    req.log.info({ email, fullName, month, status, attachments: attachments.length }, "FFGS payment confirmed — student notified");
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err, "ffgs-payment-confirmed unexpected error");
    res.status(500).json({ error: "Unexpected error." });
  }
});

export default router;
