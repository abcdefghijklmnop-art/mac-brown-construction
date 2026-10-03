import { NextRequest, NextResponse } from "next/server";
import { ReplitConnectors } from "@replit/connectors-sdk";

const CORS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

const MBFF_SHEET_ID = process.env.MBFF_BOOKING_SHEET_ID;
const FFGS_SHEET_ID = process.env.FFGS_SHEET_ID;
const MAC_EMAIL     = "macbrownflyfish@gmail.com";
const FROM_EMAIL    = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";

type SheetValues = string[][];

async function lookupStudentEmail(
  connectors: ReplitConnectors,
  studentName: string,
): Promise<{ email: string | null; source: string }> {
  const normalized = studentName.trim().toLowerCase();

  // 1. MBFF Bookings sheet — primary source (masterclasses, clinics, casting instruction)
  //    Full Name col B (idx 1), Email col C (idx 2)
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
    } catch {
      // fall through to FFGS lookup
    }
  }

  // 2. FFGS Reservations sheet — fallback (guide school students)
  //    firstName col B (idx 1), lastName col C (idx 2), email col D (idx 3)
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
    } catch {
      // not found
    }
  }

  return { email: null, source: "not found" };
}

export async function POST(req: NextRequest) {
  const body = await req.json() as Record<string, unknown>;
  const {
    studentName,
    instructorName,
    program,
    date,
    skills,
    observations,
    priorityToDevelop,
    practicePlan,
    formHtml,
  } = body;

  if (!studentName || !instructorName) {
    return NextResponse.json(
      { error: "studentName and instructorName are required." },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const assessmentDate = (date as string) || submittedAt;

  // ── Skill name / rating helpers ───────────────────────────────────────────
  const SKILL_RATINGS: Record<string, { label: string; color: string }> = {
    D: { label: "Demonstrated",    color: "#2d6a2d" },
    V: { label: "Developing",      color: "#7a5200" },
    N: { label: "Needs more time", color: "#a00000" },
    X: { label: "Not covered",     color: "#888888" },
  };
  const cleanSkillName = (n: string) =>
    n.replace(/^sk_/, "").replace(/_+/g, " ").trim();

  // Build skills table rows and plain-text summary
  const skillsObj = (typeof skills === "object" && skills !== null)
    ? (skills as Record<string, string>)
    : {};
  const skillRows = Object.entries(skillsObj)
    .map(([k, v]) => {
      const rating = SKILL_RATINGS[v] ?? { label: v, color: "#333" };
      return `<tr>
        <td style="padding:6px 4px;color:#444;font-size:13px;border-bottom:1px solid #e8e8e4;">${cleanSkillName(k)}</td>
        <td style="padding:6px 4px;font-weight:bold;font-size:13px;color:${rating.color};border-bottom:1px solid #e8e8e4;white-space:nowrap;">${rating.label}</td>
      </tr>`;
    })
    .join("");
  const skillsSummary = Object.entries(skillsObj)
    .map(([k, v]) => `${cleanSkillName(k)}: ${SKILL_RATINGS[v]?.label ?? v}`)
    .join("; ");

  // Parse observations JSON → individual sections
  let obsSections: Array<{ title: string; text: string }> = [];
  try {
    const obsObj = JSON.parse(observations as string) as Record<string, string>;
    obsSections = Object.entries(obsObj).map(([title, text]) => ({ title, text }));
  } catch {
    if (typeof observations === "string" && observations.trim()) {
      obsSections = [{ title: "Instructor Observations", text: observations as string }];
    }
  }
  const obsSectionsHtml = obsSections
    .map(({ title, text }) =>
      `<div style="margin-bottom:18px;">
        <p style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#888;margin:0 0 4px;font-family:Arial,sans-serif;">${title}</p>
        <p style="font-size:14px;line-height:1.7;color:#333;margin:0;">${text.replace(/\n/g, "<br/>")}</p>
      </div>`,
    )
    .join("");

  // Practice plan — split pipe-joined items into separate lines
  const practicePlanItems = typeof practicePlan === "string" && practicePlan.trim()
    ? practicePlan.split(" | ").filter(Boolean)
    : [];
  const practicePlanHtml = practicePlanItems
    .map(item =>
      `<p style="font-size:13px;line-height:1.6;color:#333;margin:4px 0;padding-left:12px;border-left:2px solid #bbb;">${item}</p>`,
    )
    .join("");

  const connectors = new ReplitConnectors();

  // ── Student email lookup ──────────────────────────────────────────────────
  const { email: studentEmail } = await lookupStudentEmail(
    connectors,
    studentName as string,
  );

  // ── Email HTML — use form snapshot if provided, else minimal fallback ────
  const emailHtml = typeof formHtml === "string" && (formHtml as string).trim()
    ? String(formHtml)
    : `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <p style="font-size:16px;">Student assessment for <strong>${String(studentName)}</strong></p>
        <p>Instructor: ${String(instructorName)} &nbsp;|&nbsp; Date: ${assessmentDate}</p>
        <p style="color:#888;font-size:13px;font-style:italic;">
          Open this assessment via the original form for a fully formatted record.
        </p>
      </div>`;

  // ── Send email ────────────────────────────────────────────────────────────
  const apiKey = process.env.MBFF_RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[assessment] No Resend API key found — set MBFF_RESEND_API_KEY or RESEND_API_KEY in Vercel env vars");
  }
  if (apiKey) {
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
        emailPayload.to = MAC_EMAIL;
      }

      const resendRes = await fetch("https://api.resend.com/emails", {
        method:  "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body:    JSON.stringify(emailPayload),
      });
      if (!resendRes.ok) {
        const errBody = await resendRes.text();
        console.error("[assessment] Resend error", resendRes.status, errBody);
      } else {
        console.log("[assessment] Email sent to", emailPayload.to, "cc", emailPayload.cc ?? "none");
      }
    } catch (err) {
      console.error("[assessment] Email send exception:", err);
    }
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
      await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${MBFF_SHEET_ID}/values/Assessments!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({ values: [row] }),
        },
      );
    } catch {
      // sheet failure — still return ok
    }
  }

  return NextResponse.json(
    {
      ok:                true,
      studentEmailFound: !!studentEmail,
      studentEmail:      studentEmail ?? null,
    },
    { headers: CORS },
  );
}
