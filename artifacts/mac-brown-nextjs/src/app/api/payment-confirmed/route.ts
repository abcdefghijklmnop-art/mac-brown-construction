import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FROM_EMAIL = "Mac Brown Fly Fish <noreply@macbrownflyfish.com>";
const REPLY_TO   = "macbrownflyfish@gmail.com";

type MeetingInfo = {
  name: string;
  mapsUrl: string;
  time: string;
  needsMountainHeritage: boolean;
};

function getMeetingInfo(program: string, confirmedDate: string, notes: string): MeetingInfo {
  const p = (program ?? "").toLowerCase();
  const n = (notes ?? "").toLowerCase();

  let month = -1;
  if (confirmedDate) {
    const d = new Date(confirmedDate);
    if (!isNaN(d.getTime())) month = d.getMonth() + 1;
  }
  const isOctMay = month !== -1 && (month >= 10 || month <= 5);

  if (p.includes("float") && (p.includes("nantahala") || n.includes("nantahala"))) {
    return {
      name: "Endless River Adventures",
      mapsUrl: "https://maps.app.goo.gl/NaymkXYanKfXNnPe6",
      time: "9:00 AM",
      needsMountainHeritage: false,
    };
  }

  if (p.includes("float")) {
    return {
      name: "The Boat Ramp",
      mapsUrl: "https://maps.app.goo.gl/FtY2p7wCfDgf7BL49",
      time: "8:00 AM",
      needsMountainHeritage: isOctMay,
    };
  }

  if (p.includes("wade")) {
    if (isOctMay) {
      return {
        name: "Island Park",
        mapsUrl: "https://maps.app.goo.gl/kLJvGT4aRwHVJqFEA",
        time: "8:00 AM",
        needsMountainHeritage: true,
      };
    }
    return {
      name: "Deep Creek Baptist Church",
      mapsUrl: "https://maps.app.goo.gl/ftuCNinyV7HBzerf6",
      time: "8:00 AM",
      needsMountainHeritage: false,
    };
  }

  if (p.includes("lake")) {
    return {
      name: "Bryson City – Fontana Lake Boat Launch",
      mapsUrl: "https://maps.app.goo.gl/oxXhY8hqStLYgw1j7",
      time: "8:00 AM",
      needsMountainHeritage: false,
    };
  }

  return {
    name: "71 Pavilion Dr, Bryson City",
    mapsUrl: "https://maps.app.goo.gl/HFoBwRfReVVECybf6",
    time: "8:00 AM",
    needsMountainHeritage: isOctMay,
  };
}

export async function POST(req: NextRequest) {
  const body = await req.json() as Record<string, unknown>;
  const {
    fullName, email, phone,
    program, anglerCount, confirmedDate,
    paymentMethod, totalDue, notes,
  } = body;

  if (!email) {
    return NextResponse.json({ error: "Missing email." }, { status: 400 });
  }

  const firstName = (fullName as string)?.split(" ")[0] ?? "there";
  const meeting = getMeetingInfo(
    (program as string) ?? "",
    (confirmedDate as string) ?? "",
    (notes as string) ?? ""
  );

  const licenseHtml = meeting.needsMountainHeritage
    ? `<p style="font-size:14px; margin:4px 0 0; line-height:1.6;">
        A <strong>NC Inland Fishing License</strong> (in-state or out-of-state) is required.
        Purchase at <a href="https://www.ncwildlife.org/Licensing" style="color:#1B3D6E;">ncwildlife.org</a>
        or any local sporting goods store before your trip.
       </p>
       <p style="font-size:13px; margin:8px 0 0; line-height:1.6; color:#555;">
        <strong>Out-of-state tip:</strong> The <strong>Mountain Heritage Trout Waters Day License</strong>
        is a lower-cost alternative to the full out-of-state license for fishing the Tuckasegee
        October through May — available at the same link above.
       </p>`
    : `<p style="font-size:14px; margin:4px 0 0; line-height:1.6;">
        A <strong>NC Inland Fishing License</strong> (in-state or out-of-state) is required.
        Purchase at
        <a href="https://www.ncwildlife.org/Licensing" style="color:#1B3D6E;">ncwildlife.org</a>
        or any local sporting goods store before your trip.
       </p>`;

  const phoneHtml = phone
    ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Phone:</strong> ${phone}</p>`
    : "";

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">

      <img src="https://macbrownflyfish.com/mbff-email-hero-banner.jpg"
           alt="Fall foliage along the river at Mac Brown Fly Fish"
           width="600"
           style="width: 100%; max-width: 600px; height: auto; display: block;" />

      <div style="text-align: center; padding: 24px 0 20px;">
        <a href="https://macbrownflyfish.com" style="display: inline-block;">
          <img src="https://macbrownflyfish.com/mbff-logo-square.webp"
               alt="Mac Brown Fly Fish"
               width="180"
               style="display: block; width: 180px; height: auto; margin: 0 auto;" />
        </a>
      </div>

      <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 24px;">
        <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
          Mac Brown Fly Fish · Bryson City, NC · Est. 1987
        </p>
        <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">You're Confirmed on the Water</h1>
      </div>

      <p style="font-size: 16px;">Hi ${firstName},</p>
      <p style="font-size: 15px; line-height: 1.6;">
        Your payment has been received and verified. Your spot is confirmed — we look forward to seeing you on the water!
      </p>

      <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 16px 20px; margin: 24px 0;">
        <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">Booking Summary</p>
        ${fullName    ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Name:</strong> ${fullName}</p>` : ""}
        ${phoneHtml}
        ${program     ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Program:</strong> ${program}</p>` : ""}
        ${confirmedDate ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Date:</strong> ${confirmedDate}</p>` : ""}
        ${anglerCount ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Anglers:</strong> ${anglerCount}</p>` : ""}
        ${totalDue    ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Amount Paid:</strong> ${totalDue}</p>` : ""}
        ${paymentMethod ? `<p style="font-size: 14px; margin: 4px 0;"><strong>Payment Method:</strong> ${paymentMethod}</p>` : ""}
      </div>

      <div style="background: #1B3D6E; color: #fff; padding: 20px 24px; margin: 24px 0;">
        <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin: 0 0 12px;">Meeting Details</p>
        ${confirmedDate ? `<p style="font-size: 22px; font-weight: bold; margin: 0 0 2px;">${confirmedDate}</p>` : ""}
        <p style="font-size: 18px; font-weight: bold; margin: 0 0 2px;">${meeting.time}</p>
        <p style="font-size: 16px; margin: 0 0 16px;">${meeting.name}</p>
        <a href="${meeting.mapsUrl}"
           style="display:inline-block; background:rgba(255,255,255,0.15); color:#fff; text-decoration:none;
                  padding:9px 18px; font-size:13px; border:1px solid rgba(255,255,255,0.35); font-family:Arial,sans-serif;">
          Open in Google Maps &rarr;
        </a>
      </div>

      <div style="border: 1px solid #ddd; padding: 16px 20px; margin: 24px 0;">
        <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 6px;">NC Fishing License</p>
        ${licenseHtml}
      </div>

      <div style="border: 1px solid #ddd; padding: 16px 20px; margin: 24px 0;">
        <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">What to Bring</p>
        <ul style="font-size: 14px; line-height: 1.9; margin: 0; padding-left: 18px;">
          <li><strong>Sunscreen</strong> — bring plenty; you'll be on the water all day</li>
          <li><strong>Polarized sunglasses</strong> — essential for spotting fish and protecting your eyes</li>
          <li><strong>Snacks &amp; water</strong> — stay fueled and hydrated on the river</li>
          <li><strong>Rain gear</strong> — mountain weather changes fast; a light jacket or rain shell is always smart</li>
          <li><strong>Layers</strong> — mornings on the water can be cool, especially spring and fall; dress in moisture-wicking layers you can add or remove</li>
        </ul>
      </div>

      <p style="font-size: 15px; line-height: 1.7;">
        If you want to know more, be sure to check out our other programs on the
        <a href="https://macbrownflyfish.com/events-calendar" style="color: #1B3D6E;">Events Calendar</a>
        or our
        <a href="https://macbrownflyfish.com/programs-overview" style="color: #1B3D6E;">Programs Overview</a>
        page. We would surely appreciate your help spreading the word — tell a friend or club member about your experience!
      </p>

      <p style="font-size: 15px; line-height: 1.6;">
        Questions? Call or text
        <a href="tel:+18287361469" style="color: #1a1a1a;">(828) 736-1469</a>
        or reply to this email.
      </p>

      <div style="border-top: 1px solid #ddd; margin-top: 32px; padding-top: 20px; text-align: center;">
        <a href="https://macbrownflyfish.com" style="display: inline-block; margin-bottom: 12px;">
          <img src="https://macbrownflyfish.com/mbff-logo-square.webp"
               alt="Mac Brown Fly Fish"
               width="140"
               style="display: block; width: 140px; height: auto; margin: 0 auto;" />
        </a>
        <p style="font-size: 18px; letter-spacing: 0.1em; margin: 0 0 4px;">
          <span style="color: #c8a84b;">&#62;&#60;((((&#176;&#62;</span>
          &nbsp;
          <span style="color: #3a6b3e;">&#62;&#60;((((&#176;&#62;</span>
          &nbsp;
          <span style="color: #c8a84b;">&#62;&#60;((((&#176;&#62;</span>
        </p>
        <p style="font-size: 13px; font-weight: bold; color: #1a1a1a; margin: 10px 0 2px;">Mac Brown</p>
        <p style="font-size: 12px; color: #666; margin: 2px 0;">779 West Deep Creek Rd. · Bryson City, NC 28713</p>
        <p style="font-size: 12px; color: #666; margin: 2px 0;">Cell: (828) 736-1469</p>
        <p style="font-size: 12px; margin: 6px 0 0;">
          <a href="https://macbrownflyfish.com" style="color: #1B3D6E; text-decoration: none;">macbrownflyfish.com</a>
        </p>
      </div>

    </div>
  `;

  const apiKey = process.env.MBFF_RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email not configured." }, { status: 500 });
  }

  // Attach program-specific files
  const assessmentsDir = path.join(process.cwd(), "public", "assessments");
  const attachments: { filename: string; content: string }[] = [];
  const prog = (program as string ?? "").toLowerCase();

  const tryAttach = (file: string, label: string) => {
    try {
      const fullPath = path.join(assessmentsDir, file);
      const content = fs.readFileSync(fullPath).toString("base64");
      attachments.push({ filename: label, content });
      console.log(`[payment-confirmed] Attached: ${file}`);
    } catch (err) {
      console.error(`[payment-confirmed] MISSING FILE — could not attach ${file}:`, err);
    }
  };

  const isOarFrame        = prog.includes("oar frame") || prog.includes("drift boat") || prog.includes("rowing school");
  const isSpey            = prog.includes("spey");
  const isSaltwater       = prog.includes("saltwater");
  const isCastingMastery  = prog.includes("casting mastery") || prog.includes("fly casting mastery") || (prog.includes("advanced") && prog.includes("casting"));

  // Advanced Casting with Mac Brown & Gary Borger — all programs EXCEPT Oar Frame Rowing School
  if (!isOarFrame) {
    tryAttach("Advanced_Casting_MB_GB.pdf", "Advanced-Casting-Mac-Brown-Gary-Borger.pdf");
  }

  // Program-specific student lesson plans
  if (isCastingMastery) {
    tryAttach("FlyCastingMasteryWorkshop_2Day_Lesson_Plan.pdf", "Fly-Casting-Mastery-Workshop-Student-Lesson-Plan.pdf");
  }
  if (isSpey) {
    tryAttach("Spey_Elite_Lesson_Plan.pdf", "Spey-Elite-Student-Lesson-Plan.pdf");
  }
  if (isSaltwater) {
    tryAttach("Saltwater_Masterclass_Lesson_Plan.pdf", "Saltwater-Masterclass-Student-Lesson-Plan.pdf");
  }
  if (prog.includes("streamer")) {
    tryAttach("StreamerSchool_2Day_Lesson_Plan.pdf", "Streamer-School-Student-Lesson-Plan.pdf");
  } else if (prog.includes("wet fly")) {
    tryAttach("WetFly_2Day_Lesson_Plan.pdf", "Wet-Fly-Student-Lesson-Plan.pdf");
  } else if (prog.includes("dry fly")) {
    tryAttach("DryFly_2Day_Lesson_Plan.pdf", "Dry-Fly-Student-Lesson-Plan.pdf");
  } else if (prog.includes("nymph")) {
    tryAttach("Nymph_2Day_Lesson_Plan.pdf", "Nymph-Student-Lesson-Plan.pdf");
  } else if (isOarFrame) {
    tryAttach("OarFrameRowingSchool_2Day_Lesson_Plan.pdf", "Oar-Frame-Rowing-School-Student-Lesson-Plan.pdf");
  }

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: REPLY_TO,
        to: email as string,
        subject: "Your Spot Is Confirmed — Mac Brown Fly Fish",
        html,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      console.error("payment-confirmed email failed:", err);
      return NextResponse.json({ error: "Email failed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("payment-confirmed unexpected error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
