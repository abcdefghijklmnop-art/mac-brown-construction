import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const {
    firstName, lastName, email,
    schoolMonth, attendingFor, depositType, paymentStatus,
  } = await req.json() as Record<string, string>;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }
  if (!email) {
    return NextResponse.json({ error: "No email address on record" }, { status: 400 });
  }

  const html = `
    <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">

      <img src="https://flyfishingguideschool.com/ffgs-email-hero-banner.jpg"
           alt="Smoky Mountain overlook near the Fly Fishing Guide School"
           width="640"
           style="width: 100%; max-width: 640px; height: auto; display: block;" />

      <div style="text-align: center; padding: 24px 0 20px;">
        <a href="https://flyfishingguideschool.com" style="display: inline-block;">
          <img src="https://flyfishingguideschool.com/ffgs-logo-square.webp"
               alt="Fly Fishing Guide School"
               width="180"
               style="display: block; width: 180px; height: auto; margin: 0 auto;" />
        </a>
      </div>

      <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; margin-bottom: 28px;">
        <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #666; margin: 0;">
          Bryson City, NC &middot; Est. 1987
        </p>
        <h1 style="font-size: 26px; font-weight: bold; margin: 8px 0 0;">Payment Confirmed — You're Enrolled</h1>
      </div>

      <p style="font-size: 15px; margin: 0 0 16px;">Hello ${firstName},</p>

      <p style="font-size: 15px; margin: 0 0 16px;">
        Your payment has been received and your spot in the ${schoolMonth} Fly Fishing Guide School is
        officially confirmed. Below is everything you need to prep for what is going to be an outstanding
        week of learning, fishing, and all things fly fishing. A number of students have reached out asking
        what to bring &mdash; great question. Check out the full gear list at
        <a href="https://flyfishingguideschool.com/necessary-items-fly-fishing-guide-school/" style="color: #1a1a1a; font-weight: bold;">flyfishingguideschool.com/necessary-items-fly-fishing-guide-school</a>,
        and think of it like packing for a full fishing holiday: flies, tippet, vest, wading boots,
        rods, reels &mdash; the works. If you tie, feel free to bring your vise. We will work tying
        into the week for getting across basic concepts as a foundation.
      </p>

      <p style="font-size: 15px; margin: 0 0 16px;">
        Weather in the Smokies during <strong>${schoolMonth}</strong> can swing wildly, so come prepared
        for everything &mdash; rain gear, warm layers, and a sense of adventure. One item that is
        absolutely essential: <strong>a notebook</strong>. Each morning opens in a classroom setting
        packed with information you will want to capture and carry with you the rest of your career.
      </p>

      <div style="background: #f5f5f0; border-left: 3px solid #1a1a1a; padding: 14px 18px; margin: 0 0 24px; font-size: 14px;">
        <strong>Note:</strong> The Day 4 location will be confirmed the evening before
        based on water and weather conditions. Flexibility is part of the guide life &mdash; and part
        of great teaching. Stay tuned to your email each evening.
      </div>

      <!-- ENROLLMENT SUMMARY -->
      <div style="background: #f5f5f0; padding: 16px 20px; margin: 0 0 32px;">
        <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666; margin: 0 0 10px;">Enrollment Summary</p>
        <p style="margin: 4px 0; font-size: 14px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin: 4px 0; font-size: 14px;"><strong>School Month:</strong> ${schoolMonth}</p>
        ${attendingFor ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Attending For:</strong> ${attendingFor}</p>` : ""}
        <p style="margin: 4px 0; font-size: 14px;"><strong>Payment:</strong> ${depositType ?? "&mdash;"}</p>
        <p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${paymentStatus}</p>
      </div>

      <!-- NC LICENSE -->
      <div style="background: #f0f4f8; border-left: 3px solid #2c4a7c; padding: 14px 18px; margin: 0 0 36px; font-size: 14px;">
        <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #2c4a7c; margin: 0 0 8px;">North Carolina Fishing License</p>
        All participants must hold a valid <strong>NC Inland Fishing License</strong> (in-state or out-of-state) for the full week.
        A 10-day or annual license is the best value. Purchase at
        <a href="https://ncwildlife.org" style="color: #1a1a1a;">ncwildlife.org</a> or any local sporting goods store before Day 1.
      </div>

      <!-- SCHEDULE HEADER -->
      <h2 style="font-size: 19px; font-weight: bold; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px; margin: 0 0 28px; letter-spacing: 0.02em;">
        ${schoolMonth} &mdash; Week at a Glance
      </h2>

      <!-- DAY 1 -->
      <div style="margin: 0 0 32px;">
        <p style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #2c4a7c; margin: 0 0 2px; font-family: Arial, sans-serif; font-weight: bold;">Day 1</p>
        <p style="font-size: 17px; font-weight: bold; margin: 0 0 4px;">Arrive at the Pavilion</p>
        <p style="font-size: 13px; margin: 0 0 12px; color: #555;">
          <a href="https://maps.app.goo.gl/bA9oyvo2T7cC3ieQ7" style="color: #2c4a7c;">Open in Google Maps &rarr;</a>
        </p>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; line-height: 1.6;">
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top; width: 76px;">8:00 AM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Fly casting mechanics and teaching effectively &mdash; the where, when, why, and how it applies on the water. Rigging discussions. Casting diagnostics and how much to cover with a client. Gear deep-dives on fly lines and leaders.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">12:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Lunch</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">1:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Casting and teaching others &mdash; rods in hand, putting the morning&rsquo;s instruction to work. Students cast, get coached, and practice presenting to each other.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">4:00 PM</td><td style="padding: 5px 0;">Free time &mdash; fish or work the field on your casting game.</td></tr>
        </table>
      </div>

      <!-- DAY 2 -->
      <div style="margin: 0 0 32px; padding-top: 20px; border-top: 1px solid #e8e8e8;">
        <p style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #2c4a7c; margin: 0 0 2px; font-family: Arial, sans-serif; font-weight: bold;">Day 2</p>
        <p style="font-size: 17px; font-weight: bold; margin: 0 0 4px;">Wade Fishing below the Island in Webster</p>
        <p style="font-size: 13px; margin: 0 0 12px; color: #555;">
          Big pull-off right below the island &middot;
          <a href="https://maps.app.goo.gl/XeRCftoowWxrphRF9" style="color: #2c4a7c;">Open in Google Maps &rarr;</a>
        </p>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; line-height: 1.6;">
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top; width: 76px;">8:00 AM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">On-water discussions of nymphing, wet flies, streamers, and dry fly fishing. Rigging, techniques, and building a consistent process on the stream. Line control and presentation. Hooksets and fish-playing skills.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">12:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Lunch</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">1:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Time on the water &mdash; putting the morning&rsquo;s skills to use on the stream. Coaching sessions with each participant: rigging questions, water reading, technique feedback as you fish.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">4:00 PM</td><td style="padding: 5px 0;">Free time &mdash; fish or casting practice.</td></tr>
        </table>
      </div>

      <!-- DAY 3 -->
      <div style="margin: 0 0 32px; padding-top: 20px; border-top: 1px solid #e8e8e8;">
        <p style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #2c4a7c; margin: 0 0 2px; font-family: Arial, sans-serif; font-weight: bold;">Day 3</p>
        <p style="font-size: 17px; font-weight: bold; margin: 0 0 4px;">Rowing &amp; Boat Fishing on the Tuckasegee</p>
        <p style="font-size: 13px; margin: 0 0 12px; color: #555;">
          Tuckasegee boat ramp &middot;
          <a href="https://maps.app.goo.gl/QP2GMo35GfqmpGKi8" style="color: #2c4a7c;">Open in Google Maps &rarr;</a>
        </p>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; line-height: 1.6;">
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top; width: 76px;">8:00 AM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Rowing fundamentals, reading water from a boat, and on-water safety. How to fish from a drift boat and &mdash; just as importantly &mdash; how to teach others.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">10:00 AM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Float the lower Tuckasegee (Class I). Guided discussion of boat fishing techniques throughout the run.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">12:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Lunch</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">12:45 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Switch rowers &mdash; each participant guides the float. Nothing builds confidence like putting hands on the oars.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">4:00 PM</td><td style="padding: 5px 0;">Free time &mdash; fish or casting.</td></tr>
        </table>
      </div>

      <!-- DAY 4 — GRADUATION DAY -->
      <div style="margin: 0 0 36px; padding-top: 20px; border-top: 1px solid #e8e8e8;">
        <p style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #2c4a7c; margin: 0 0 2px; font-family: Arial, sans-serif; font-weight: bold;">Day 4 &mdash; Graduation Day</p>
        <p style="font-size: 17px; font-weight: bold; margin: 0 0 4px;">Dry Fly, Wet Fly &amp; Streamer Mastery <span style="font-size: 13px; font-weight: normal; color: #888;">(Location TBA the Evening Before)</span></p>
        <p style="font-size: 13px; color: #555; margin: 0 0 4px;">
          Possible locations:
          <a href="https://maps.app.goo.gl/1bSKUuAeCXZyAPqZ7" style="color: #2c4a7c;">Island Park, Bryson City</a>
          &nbsp;or&nbsp;
          <a href="https://maps.app.goo.gl/CDXE1hYwKYt343Q36" style="color: #2c4a7c;">Deep Creek Baptist Church</a>
        </p>
        <p style="font-size: 13px; color: #888; font-style: italic; margin: 0 0 12px;">Final location confirmed by email the evening of Day 3.</p>
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; line-height: 1.6;">
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top; width: 76px;">8:15 AM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Drift exercise &mdash; line control and mending on the water for the dry fly game.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">12:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Lunch</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">12:45 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Taking drift to the next level: advanced line control tips and tricks for the dry fly.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">2:00 PM</td><td style="padding: 5px 0; border-bottom: 1px solid #f0f0f0;">Drift exercise &mdash; line control and mending for streamers and wet flies. Line retrieval mastery for inducing greater hookups.</td></tr>
          <tr><td style="padding: 5px 14px 5px 0; color: #888; white-space: nowrap; vertical-align: top;">3:30 PM</td><td style="padding: 5px 0;"><strong>Ceremony and certificate presentation &mdash; Fly Fishing Guide School. Conclusion of the week.</strong></td></tr>
        </table>
      </div>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 0 0 24px;" />

      <p style="font-size: 15px; line-height: 1.7; margin: 0 0 8px;">
        I am genuinely excited to meet this group and spend the week deep in fly fishing &mdash;
        the casting, the guiding, the reading of water, the business, and all the craft that makes
        this sport so endlessly rewarding. Safe travels, ${firstName}, and I will see you on the water.
      </p>

      <p style="font-size: 15px; margin: 0 0 28px;">&mdash; Mac Brown</p>

      <div style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center;">
        <a href="https://flyfishingguideschool.com" style="display: inline-block; margin-bottom: 12px;">
          <img src="https://flyfishingguideschool.com/ffgs-logo-square.webp"
               alt="Fly Fishing Guide School"
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
          <a href="https://flyfishingguideschool.com" style="color: #2c4a7c; text-decoration: none;">flyfishingguideschool.com</a>
        </p>
      </div>

    </div>
  `;

  // Attach all curriculum lesson plans
  const assessmentsDir = path.join(process.cwd(), "public", "assessments");
  const attachments: { filename: string; content: string }[] = [];

  const tryAttach = (file: string, label: string) => {
    try {
      const fullPath = path.join(assessmentsDir, file);
      const content = fs.readFileSync(fullPath).toString("base64");
      attachments.push({ filename: label, content });
      console.log(`[ffgs-payment-confirmed] Attached: ${file} (${content.length} base64 chars)`);
    } catch (err) {
      console.error(`[ffgs-payment-confirmed] MISSING FILE — could not attach ${file}:`, err);
    }
  };

  tryAttach("Advanced_Casting_MB_GB.pdf",                    "Advanced-Casting-Mac-Brown-Gary-Borger.pdf");
  tryAttach("FlyCastingMasteryWorkshop_1Day_Lesson_Plan.pdf", "Fly-Casting-Mastery-Workshop-Student-Handout.pdf");
  tryAttach("DryFly_1Day_Lesson_Plan.pdf",                    "Dry-Fly-2.5-Hour-Foundations-Clinic.pdf");
  tryAttach("WetFly_1Day_Lesson_Plan.pdf",                    "Wet-Fly-2.5-Hour-Foundations-Clinic.pdf");
  tryAttach("Nymph_1Day_Lesson_Plan.pdf",                     "Nymph-2.5-Hour-Foundations-Clinic.pdf");
  tryAttach("StreamerSchool_1Day_Lesson_Plan.pdf",            "Streamer-School-2.5-Hour-Foundations-Clinic.pdf");
  tryAttach("OarFrameRowingSchool_1Day_Lesson_Plan.pdf",      "Oar-Frame-Rowing-School-Student-Handout.pdf");

  console.log(`[ffgs-payment-confirmed] Total attachments ready: ${attachments.length} for ${email}`);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Fly Fishing Guide School <noreply@macbrownflyfish.com>",
        to: email,
        subject: "Payment Confirmed — Fly Fishing Guide School",
        html,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json({ error: `Resend error: ${body}` }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
