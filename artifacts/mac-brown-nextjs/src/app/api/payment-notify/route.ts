import { NextRequest, NextResponse } from "next/server";
import { ReplitConnectors } from "@replit/connectors-sdk";

const SHEET_ID     = process.env.MBFF_BOOKING_SHEET_ID;
const FROM_EMAIL   = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO     = "macbrownflyfish@gmail.com";
const NOTIFY_EMAIL = "macbrownflyfish@gmail.com";

const METHOD_LABEL: Record<string, string> = {
  venmo: "Venmo",
  zelle: "Zelle",
  check: "Check",
  card:  "Credit/Debit Card (SwipeSimple)",
};

export async function POST(req: NextRequest) {
  const {
    firstName, lastName, email,
    method, programs: programNames,
    total, anglers,
  } = await req.json() as Record<string, unknown>;

  if (!firstName || !lastName || !email || !method) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const fullName       = `${firstName} ${lastName}`;
  const methodLabel    = METHOD_LABEL[method as string] ?? String(method);
  const totalFormatted = `$${Number(total).toLocaleString()}`;
  const programList    = Array.isArray(programNames) ? (programNames as string[]) : [String(programNames ?? "")];

  const sentAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const sentDate = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
  });

  if (SHEET_ID) {
    try {
      const connectors = new ReplitConnectors();
      const readRes = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${SHEET_ID}/values/Bookings!B:B`,
        { method: "GET" }
      );

      if (readRes.ok) {
        const data = await readRes.json() as { values?: string[][] };
        const rows = data.values || [];

        let matchRowIndex = -1;
        for (let i = rows.length - 1; i >= 1; i--) {
          if (rows[i]?.[0]?.toLowerCase() === (fullName as string).toLowerCase()) {
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
                  { range: `Bookings!U${sheetRow}`, values: [[`Pending – ${methodLabel}`]] },
                  { range: `Bookings!V${sheetRow}`, values: [[sentDate]] },
                ],
              }),
            }
          );
        }
      }
    } catch (err) {
      console.error("Payment notify — sheet update failed:", err);
    }
  }

  const apiKey = process.env.MBFF_RESEND_API_KEY ?? process.env.RESEND_API_KEY;

  let methodInstructions = "";
  if (method === "venmo") {
    methodInstructions = `<p style="font-size:14px; margin:4px 0;"><strong>Sent via:</strong> Venmo (@James-Brown-3656)</p>`;
  } else if (method === "zelle") {
    methodInstructions = `<p style="font-size:14px; margin:4px 0;"><strong>Sent via:</strong> Zelle (28713flyfishingguideschool)</p>`;
  } else if (method === "check") {
    methodInstructions = `<p style="font-size:14px; margin:4px 0;"><strong>Sent via:</strong> Check (mailed to 779 West Deep Creek Rd., Bryson City, NC 28713)</p>`;
  }

  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
          reply_to: REPLY_TO,
          to: email as string,
          subject: "Payment Received — Mac Brown Fly Fish",
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
              <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
                <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
                  Mac Brown Fly Fish · Bryson City, NC · Est. 1987
                </p>
                <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">Payment Notification Received</h1>
              </div>
              <p style="font-size: 16px;">Hi ${firstName},</p>
              <p style="font-size: 15px; line-height: 1.6;">
                We've received your payment notification. Mac will verify the payment and
                confirm your reservation within one business day.
              </p>
              <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
                <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">Payment Summary</p>
                <p style="font-size: 14px; margin: 4px 0;"><strong>Name:</strong> ${fullName}</p>
                <p style="font-size: 14px; margin: 4px 0;"><strong>Program:</strong> ${programList.join(", ")}</p>
                <p style="font-size: 14px; margin: 4px 0;"><strong>Anglers:</strong> ${anglers}</p>
                <p style="font-size: 14px; margin: 4px 0;"><strong>Amount:</strong> ${totalFormatted}</p>
                ${methodInstructions}
                <p style="font-size: 14px; margin: 4px 0;"><strong>Notified:</strong> ${sentAt} ET</p>
              </div>
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
      console.warn("Customer payment notification email failed:", err);
    }

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
          reply_to: email as string,
          to: NOTIFY_EMAIL,
          subject: `Payment sent: ${fullName} — ${methodLabel}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #222;">
              <h2 style="border-bottom: 2px solid #1B3D6E; padding-bottom: 10px; color: #1B3D6E;">Payment Notification</h2>
              <p style="font-size: 14px; color: #555;">
                ${fullName} has notified you that they've sent payment via <strong>${methodLabel}</strong>.
              </p>
              <table style="width:100%; font-size:14px; border-collapse:collapse; margin-top:16px;">
                <tr><td style="padding:6px 0; color:#666; width:150px;">Name</td><td style="padding:6px 0; font-weight:bold;">${fullName}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#1B3D6E;">${email}</a></td></tr>
                <tr><td style="padding:6px 0; color:#666;">Program(s)</td><td style="padding:6px 0; font-weight:bold;">${programList.join("<br/>")}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Anglers</td><td style="padding:6px 0;">${anglers}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Amount</td><td style="padding:6px 0; font-weight:bold;">${totalFormatted}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Method</td><td style="padding:6px 0;">${methodLabel}</td></tr>
                <tr><td style="padding:6px 0; color:#666;">Notified at</td><td style="padding:6px 0;">${sentAt} ET</td></tr>
              </table>
            </div>
          `,
        }),
      });
    } catch (err) {
      console.warn("Internal payment notification email failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
