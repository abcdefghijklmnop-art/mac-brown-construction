import { NextRequest, NextResponse } from "next/server";
const NOTIFY_EMAIL = "macbrownflyfish@gmail.com";
const FROM_EMAIL   = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO     = "macbrownflyfish@gmail.com";

export async function POST(req: NextRequest) {
  const {
    timestamp,
    firstName, lastName, email, phone,
    programs: programNames,
    anglers, total,
    datePreference, notes, paymentMethod,
  } = await req.json() as Record<string, unknown>;

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const submittedAt = new Date((timestamp as string) || Date.now()).toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fullName    = `${firstName} ${lastName}`;
  const programList = Array.isArray(programNames) ? programNames as string[] : [String(programNames ?? "")];
  const totalFormatted = `$${Number(total).toLocaleString()}`;

  // Sheet row is intentionally NOT written here.
  // Bookings only appear in Google Sheets after the customer completes payment.
  // The payment-notify route handles the sheet write when payment is confirmed.

  const apiKey = process.env.MBFF_RESEND_API_KEY ?? process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
          reply_to: REPLY_TO,
          to: email as string,
          subject: "Reservation Received — Mac Brown Fly Fish",
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
                <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                  Mac Brown Fly Fish · Bryson City, NC · Est. 1987
                </p>
                <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">Reservation Received</h1>
              </div>
              <p style="font-size: 16px;">Hi ${firstName},</p>
              <p style="font-size: 15px; line-height: 1.6;">
                Your reservation request is in. Your next steps are to sign the participation waiver
                and complete payment — then you're confirmed on the water.
              </p>
              <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
                <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">Reservation Summary</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Program:</strong> ${programList.join(", ")}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Anglers:</strong> ${anglers}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Total:</strong> ${totalFormatted}</p>
                ${datePreference ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Date Preference:</strong> ${datePreference}</p>` : ""}
              </div>
              <p style="font-size: 15px; line-height: 1.6;">
                <strong>Next steps:</strong><br/>
                1. Sign your participation waiver (you should be there now).<br/>
                2. Complete payment — card (SwipeSimple), Venmo, or Zelle accepted.<br/>
                3. We'll confirm your date and send a full trip briefing within 24 hours.
              </p>
              <p style="font-size: 15px; line-height: 1.6;">
                Questions? Call or text <a href="tel:+18287361469" style="color: #1a1a1a;">(828) 736-1469</a> or reply to this email.
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
    } catch (err) {
      console.warn("Booking confirmation email failed:", err);
    }

    // Internal booking notification intentionally removed.
    // Mac is only notified when payment is confirmed via the Apps Script (col U trigger).
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("mbff_reservation_started", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });
  return response;
}
