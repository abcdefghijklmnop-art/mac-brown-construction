import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, inquiry, date, message } = await req.json() as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const body = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || "—"}`,
    `Interest: ${inquiry || "—"}`,
    `Date:     ${date || "—"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Fly Fishing Guide School <noreply@macbrownflyfish.com>",
        to: "flyfishingguideschool@gmail.com",
        reply_to: email,
        subject: `New inquiry from ${name}${inquiry ? ` — ${inquiry}` : ""}`,
        text: body,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend FFGS contact email failed:", err);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("FFGS contact email error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
