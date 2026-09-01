import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    email, method,
    firstName, lastName, phone,
    programs, anglers, total, datePreference,
  } = await req.json() as Record<string, unknown>;

  if (!email || !method) {
    return NextResponse.json({ error: "Missing email or method." }, { status: 400 });
  }

  const webhookUrl = process.env.MBFF_BOOKING_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const submittedAt = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        dateStyle: "medium",
        timeStyle: "short",
      });
      const fullName = `${String(firstName ?? "")} ${String(lastName ?? "")}`.trim();
      const programList = Array.isArray(programs) ? (programs as string[]).join(", ") : String(programs ?? "");
      const totalFormatted = `$${Number(total ?? 0).toLocaleString()}`;

      const row = [
        submittedAt, fullName, String(email), String(phone ?? ""),
        "", "", programList, "",
        String(anglers ?? 1), "", "", "", "", "",
        String(datePreference ?? ""), String(datePreference ?? ""), "", String(method), "", totalFormatted,
        "", "", "Yes", "",
      ];

      const sheetRes = await fetch(
        `${webhookUrl}?payload=${encodeURIComponent(JSON.stringify({ values: [row] }))}`,
        { method: "GET" }
      );
      if (!sheetRes.ok) {
        console.error("Payment intent sheet webhook error:", sheetRes.status, await sheetRes.text());
      }
    } catch (err) {
      console.error("Payment intent sheet webhook error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
