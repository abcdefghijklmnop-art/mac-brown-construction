import { NextRequest, NextResponse } from "next/server";

const FROM_EMAIL   = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO     = "macbrownflyfish@gmail.com";
const NOTIFY_EMAIL = "macbrownflyfish@gmail.com";

interface Participant { name: string; email?: string; }

export async function POST(req: NextRequest) {
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
  } = await req.json() as Record<string, unknown>;

  const normalizedEmail = String(email || "").trim();
  const normalizedPhone = String(phone || "").trim();
  const phoneDigits = normalizedPhone.replace(/\D/g, "");

  if (req.cookies.get("mbff_reservation_started")?.value !== "1") {
    return NextResponse.json({ error: "Please complete a reservation before signing the waiver." }, { status: 403 });
  }

  if (!firstName || !lastName || !signature || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalizedEmail) || phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json({ error: "A valid email address and cell phone number are required." }, { status: 400 });
  }

  const fullName = `${firstName} ${lastName}`;
  const signedAt = new Date((timestamp as string) || Date.now()).toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  // ── Google Sheets — update column W via the existing booking webhook ─────
  // Reuses MBFF_BOOKING_WEBHOOK_URL (already in Vercel) with action:"updateWaiver".
  // ReplitConnectors is Replit-only and fails silently on Vercel — never use it here.
  const waiverWebhookUrl = process.env.MBFF_BOOKING_WEBHOOK_URL;
  if (waiverWebhookUrl && normalizedEmail) {
    try {
      const payload = JSON.stringify({ email: normalizedEmail, signedAt });
      const webhookRes = await fetch(
        `${waiverWebhookUrl}?payload=${encodeURIComponent(payload)}`,
        { method: "GET" }
      );
      if (!webhookRes.ok) {
        console.error("Waiver webhook HTTP error:", webhookRes.status, await webhookRes.text());
      }
    } catch (err) {
      console.error("Waiver webhook error — notification still proceeding:", err);
    }
  }

  const apiKey = process.env.MBFF_RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const invitesSent: string[] = [];
  const extras: Participant[] = Array.isArray(additionalParticipants) ? additionalParticipants as Participant[] : [];
  const programLabel = Array.isArray(programs) && programs.length > 0 ? (programs as string[]).join(", ") : "your upcoming outing";
  const waiverLink = `${(siteUrl as string) || "https://macbrownflyfish.com"}/waiver-release`;

  if (apiKey) {
    for (const participant of extras) {
      if (!participant.email) continue;
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
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
                  (<em>${programLabel}</em>). Please sign your individual participation waiver:
                </p>
                <div style="text-align: center; margin: 32px 0;">
                  <a href="${waiverLink}" style="display: inline-block; background: #1E3D2F; color: white; font-size: 14px; font-weight: bold; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 32px; text-decoration: none; border-radius: 4px;">
                    Sign My Waiver
                  </a>
                </div>
                <div style="border-top: 1px solid #ddd; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #888;">
                  <p style="margin: 0;">Questions? Call or text (828) 736-1469.</p>
                  <p style="margin: 4px 0 0; font-weight: bold; color: #1a1a1a;">Mac Brown Fly Fish · Bryson City, NC 28713</p>
                </div>
              </div>
            `,
          }),
        });
        invitesSent.push(participant.email);
      } catch (err) {
        console.warn("Failed to send waiver invite:", err);
      }
    }

    const sigTag = signature
      ? `<img src="${signature as string}" alt="Signature" style="max-width:400px; border:1px solid #ccc; padding:8px; background:#fff;" />`
      : "<em>No signature image</em>";

    const agrm = agreements as Record<string, boolean> | undefined;

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
            reply_to: normalizedEmail || REPLY_TO,
          to: NOTIFY_EMAIL,
          subject: `Waiver signed — ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
              <h2 style="border-bottom: 2px solid #1B3D6E; padding-bottom: 10px; color: #1B3D6E;">Waiver Signed</h2>
              <table style="width:100%; font-size:14px; border-collapse:collapse;">
                <tr><td style="padding:6px 0; color:#666; width:160px;">Name</td><td style="padding:6px 0; font-weight:bold;">${fullName}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${normalizedEmail}" style="color:#1B3D6E;">${normalizedEmail}</a></td></tr>
                <tr><td style="padding:6px 0; color:#666;">Phone</td><td style="padding:6px 0;">${normalizedPhone}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Minor?</td><td style="padding:6px 0;">${hasMinor ? `Yes — ${minorFirstName ?? ""} ${minorLastName ?? ""} (DOB: ${minorDob || "—"})` : "No"}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Read waiver</td><td style="padding:6px 0;">${agrm?.readWaiver ? "✓ Yes" : "✗ No"}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Assumed risk</td><td style="padding:6px 0;">${agrm?.assumeRisk ? "✓ Yes" : "✗ No"}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Photo release</td><td style="padding:6px 0;">${agrm?.photoRelease ? "✓ Yes" : "✗ No"}</td></tr>
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
    } catch (err) {
      console.warn("Waiver notification email failed:", err);
    }
  }

  return NextResponse.json({ success: true, invitesSent });
}
