import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

const MBFF_SHEET_ID = process.env.MBFF_BOOKING_SHEET_ID;
const FFGS_SHEET_ID = process.env.FFGS_SHEET_ID;
const MAC_EMAIL     = "macbrownflyfish@gmail.com";
const FROM_EMAIL    = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";

type SheetValues = string[][];

async function lookupStudentEmail(
  connectors: ReplitConnectors,
  studentName: string,
  log: { warn: (obj: unknown, msg: string) => void },
): Promise<{ email: string | null; source: string }> {
  const normalized = studentName.trim().toLowerCase();

  // 1. MBFF Bookings sheet — Full Name col B (idx 1), Email col C (idx 2)
  if (MBFF_SHEET_ID) {
    try {
      const res = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${MBFF_SHEET_ID}/values/Bookings!A2:C`,
        { method: "GET" },
      );
      if (res.ok) {
        const json = await res.json() as { values?: SheetValues };
        for (const row of json.values ?? []) {
          const name  = (row[1] ?? "").trim().toLowerCase();
          const email = (row[2] ?? "").trim();
          if (name === normalized && email) return { email, source: "MBFF" };
        }
      }
    } catch (err) {
      log.warn({ err }, "MBFF sheet lookup failed");
    }
  }

  // 2. FFGS Reservations sheet — firstName col B (idx 1), lastName col C (idx 2), email col D (idx 3)
  if (FFGS_SHEET_ID) {
    try {
      const res = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${FFGS_SHEET_ID}/values/Reservations!A2:D`,
        { method: "GET" },
      );
      if (res.ok) {
        const json = await res.json() as { values?: SheetValues };
        for (const row of json.values ?? []) {
          const fullName = `${(row[1] ?? "").trim()} ${(row[2] ?? "").trim()}`.toLowerCase();
          const email    = (row[3] ?? "").trim();
          if (fullName === normalized && email) return { email, source: "FFGS" };
        }
      }
    } catch (err) {
      log.warn({ err }, "FFGS sheet lookup failed");
    }
  }

  return { email: null, source: "not found" };
}

router.post("/assessment", async (req, res) => {
  const {
    studentName,
    instructorName,
    program,
    date,
    skills,            // object: { "Skill Label": "rating value" }
    observations,      // narrative text
    priorityToDevelop,
    practicePlan,
  } = req.body as Record<string, unknown>;

  if (!studentName || !instructorName) {
    res.status(400).json({ error: "studentName and instructorName are required." });
    return;
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const assessmentDate = (date as string) || submittedAt;

  // Build skills HTML rows and plain-text summary for the sheet
  const skillsObj = (typeof skills === "object" && skills !== null)
    ? (skills as Record<string, string>)
    : {};
  const skillRows = Object.entries(skillsObj)
    .map(([k, v]) =>
      `<tr>
        <td style="padding:5px 0;color:#666;width:200px;font-size:13px;">${k}</td>
        <td style="padding:5px 0;font-weight:bold;font-size:13px;">${v}</td>
      </tr>`,
    )
    .join("");
  const skillsSummary = Object.entries(skillsObj).map(([k, v]) => `${k}: ${v}`).join("; ");

  const connectors = new ReplitConnectors();

  // ── Student email lookup ─────────────────────────────────────────────────
  const { email: studentEmail, source } = await lookupStudentEmail(
    connectors,
    studentName as string,
    req.log,
  );
  req.log.info({ studentName, studentEmail, source }, "Student email lookup result");

  // ── Build email HTML ─────────────────────────────────────────────────────
  const nl2br = (s: unknown) =>
    typeof s === "string" ? s.replace(/\n/g, "<br/>") : "";

  const emailHtml = `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
      <div style="border-bottom:2px solid #1a1a1a;padding-bottom:16px;margin-bottom:24px;">
        <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;margin:0;">
          Mac Brown Fly Fish · Bryson City, NC · Est. 1987
        </p>
        <h1 style="font-size:26px;font-weight:bold;margin:8px 0 0;">Student Assessment</h1>
      </div>

      <p style="font-size:16px;">Hi ${String(studentName)},</p>
      <p style="font-size:15px;line-height:1.6;">
        Below is your personalized assessment from <strong>${String(instructorName)}</strong>
        following your <strong>${String(program ?? "")}</strong> session
        on <strong>${assessmentDate}</strong>.
        Use this as your roadmap for continued improvement on the water.
      </p>

      ${skillRows ? `
      <div style="background:#f5f5f0;border-left:3px solid #1a1a1a;padding:16px 20px;margin:24px 0;">
        <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666;margin:0 0 10px;">
          Skills Assessment
        </p>
        <table style="width:100%;border-collapse:collapse;">${skillRows}</table>
      </div>` : ""}

      ${observations ? `
      <div style="margin:24px 0;">
        <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666;margin:0 0 8px;">
          Instructor Observations
        </p>
        <p style="font-size:14px;line-height:1.7;color:#333;">${nl2br(observations)}</p>
      </div>` : ""}

      ${priorityToDevelop ? `
      <div style="margin:24px 0;">
        <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666;margin:0 0 8px;">
          Priority to Develop
        </p>
        <p style="font-size:14px;line-height:1.7;color:#333;">${nl2br(priorityToDevelop)}</p>
      </div>` : ""}

      ${practicePlan ? `
      <div style="background:#f5f5f0;border-left:3px solid #1a1a1a;padding:16px 20px;margin:24px 0;">
        <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666;margin:0 0 8px;">
          Your Practice Plan
        </p>
        <p style="font-size:14px;line-height:1.7;color:#333;">${nl2br(practicePlan)}</p>
      </div>` : ""}

      <p style="font-size:15px;line-height:1.6;">
        Questions? Call or text
        <a href="tel:+18287361469" style="color:#1a1a1a;">(828) 736-1469</a>
        or email <a href="mailto:macbrownflyfish@gmail.com" style="color:#1a1a1a;">macbrownflyfish@gmail.com</a>.
      </p>

      <div style="border-top:1px solid #ddd;margin-top:32px;padding-top:16px;font-size:12px;color:#888;">
        <p style="margin:0;">Keep making that one more good cast,</p>
        <p style="margin:4px 0 0;font-weight:bold;color:#1a1a1a;">
          ${String(instructorName)} &amp; Mac Brown Fly Fish
        </p>
        <p style="margin:4px 0 0;">779 West Deep Creek Rd · Bryson City, NC 28713</p>
      </div>
    </div>
  `;

  // ── Send email ────────────────────────────────────────────────────────────
  try {
    const emailPayload: Record<string, unknown> = {
      from:    FROM_EMAIL,
      html:    emailHtml,
      subject: studentEmail
        ? `Your Assessment — ${String(program ?? "Session")} with ${String(instructorName)}`
        : `[EMAIL NOT FOUND] Assessment for ${String(studentName)} — ${String(program ?? "")}`,
    };

    if (studentEmail) {
      emailPayload.to  = studentEmail;
      emailPayload.cc  = [MAC_EMAIL];
    } else {
      emailPayload.to  = MAC_EMAIL;
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method:  "POST",
      headers: {
        Authorization:  `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      req.log.warn({ errText }, "Resend returned non-OK — assessment still saved");
    } else {
      req.log.info({ studentEmail, studentName }, "Assessment email sent");
    }
  } catch (emailErr) {
    req.log.warn({ emailErr }, "Assessment email failed — still saving to sheet");
  }

  // ── Append to Assessments tab in MBFF sheet ───────────────────────────────
  if (MBFF_SHEET_ID) {
    try {
      const row = [
        assessmentDate,
        String(studentName),
        String(instructorName),
        String(program ?? ""),
        skillsSummary,
        String(priorityToDevelop ?? ""),
        String(practicePlan ?? ""),
      ];
      const sheetRes = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${MBFF_SHEET_ID}/values/Assessments!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({ values: [row] }),
        },
      );
      if (!sheetRes.ok) {
        const err = await sheetRes.text();
        req.log.error({ err }, "Assessments sheet append failed");
      } else {
        req.log.info({ studentName }, "Assessment saved to Assessments tab");
      }
    } catch (err) {
      req.log.error(err, "Google Sheets Assessments error");
    }
  } else {
    req.log.warn("MBFF_BOOKING_SHEET_ID not set — skipping Assessments sheet");
  }

  res.json({
    ok:               true,
    studentEmailFound: !!studentEmail,
    studentEmail:      studentEmail ?? null,
  });
});

export default router;
