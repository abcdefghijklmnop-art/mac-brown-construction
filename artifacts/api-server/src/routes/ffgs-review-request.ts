import { Router } from "express";

const router = Router();

const FROM_EMAIL  = "Mac Brown — Fly Fishing Guide School <noreply@macbrownflyfish.com>";
const REPLY_TO    = "flyfishingguideschool@gmail.com";
const REVIEW_LINK = "https://g.page/r/CfxPhFfWYElCEBM/review";
const TFO_LINK    = "https://tforods.com/";
const TFO_CODE    = "TFO30Brown";
const LOGO_URL    = "https://flyfishingguideschool.com/ffgs-logo-square.webp";
const HERO_URL    = "https://flyfishingguideschool.com/ffgs-email-hero-banner.jpg";

router.post("/ffgs-review-request", async (req, res) => {
  const { firstName, email, schoolName } = req.body as Record<string, unknown>;

  if (!email) {
    res.status(400).json({ error: "Missing email." });
    return;
  }

  const name   = String(firstName  || "there");
  const school = String(schoolName || "the Fly Fishing Guide School");

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:     FROM_EMAIL,
        reply_to: REPLY_TO,
        to:       email as string,
        subject:  `A Note from Mac — Thank You for ${school}`,
        html:     buildEmailHtml(name, school),
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      req.log.error({ err, email }, "ffgs-review-request email failed");
      res.status(500).json({ error: "Email failed." });
      return;
    }

    req.log.info({ email, name, school }, "FFGS review request sent");
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err, "ffgs-review-request unexpected error");
    res.status(500).json({ error: "Unexpected error." });
  }
});

function buildEmailHtml(name: string, school: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f5f5f0;">
  <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#ffffff;">

    <!-- Hero Banner -->
    <img src="${HERO_URL}" alt="Smoky Mountain overlook near the Fly Fishing Guide School" width="600" style="width:100%;max-width:600px;height:auto;display:block;" />

    <!-- Header -->
    <div style="text-align:center;padding:24px 0 20px;">
      <a href="https://flyfishingguideschool.com" style="display:inline-block;">
        <img src="${LOGO_URL}" alt="Fly Fishing Guide School" width="180" style="display:block;width:180px;height:auto;margin:0 auto;" />
      </a>
    </div>

    <!-- Body -->
    <div style="padding:36px 32px;color:#1a1a1a;">
      <p style="font-size:16px;margin:0 0 16px;">Hi ${name},</p>

      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
        Thank you for joining us at the <strong>${school}</strong>! It was a pleasure working with you
        and I wanted to let you in on a discount to show this appreciation with our TFO family of products.
      </p>

      <!-- TFO Discount Block -->
      <div style="background:hsl(215,55%,28%);padding:28px 24px;margin:24px 0;border-radius:2px;text-align:center;">
        <p style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin:0 0 10px;">Your Exclusive Discount</p>
        <p style="font-size:16px;font-style:italic;color:#ffffff;line-height:1.6;margin:0 0 16px;">Log into TFO and at checkout, simply type in your code:</p>
        <p style="display:inline-block;background:#ffffff;color:hsl(215,55%,28%);font-size:24px;font-weight:bold;letter-spacing:0.1em;padding:10px 22px;margin:0 0 18px;border-radius:3px;font-family:'Courier New',monospace;">
          ${TFO_CODE}
        </p>
        <div style="margin-top:6px;">
          <a href="${TFO_LINK}"
             style="display:inline-block;background:#ffffff;color:hsl(215,55%,28%);text-decoration:none;
                    padding:12px 30px;font-size:14px;font-family:Georgia,serif;letter-spacing:0.05em;border-radius:2px;">
            Shop TFO Rods &amp; Gear
          </a>
        </div>
      </div>

      <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
        Could you take 60 seconds to leave a review on our Google profile? This is a niche business
        that we want your review to help others find us — which keeps getting bigger for rankings.
        We hope many of the handouts and attention for you moving forward during the school helps bring
        a deeper enrichment for your journey.
      </p>

      <p style="font-size:15px;line-height:1.7;margin:0 0 24px;">
        Mentioning how this instruction helped you with whatever topic you found most useful may help
        other growth-minded anglers find us:
      </p>

      <!-- Review Button -->
      <div style="text-align:center;margin:28px 0;">
        <a href="${REVIEW_LINK}"
           style="display:inline-block;background:hsl(215,55%,28%);color:#ffffff;text-decoration:none;
                  padding:14px 36px;font-size:15px;font-family:Georgia,serif;letter-spacing:0.05em;border-radius:2px;">
          Leave a Google Review
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="border-top:1px solid #ddd;margin-top:8px;padding-top:20px;padding-bottom:24px;text-align:center;">
      <a href="https://flyfishingguideschool.com" style="display:inline-block;margin-bottom:12px;">
        <img src="${LOGO_URL}" alt="Fly Fishing Guide School" width="140" style="display:block;width:140px;height:auto;margin:0 auto;" />
      </a>
      <p style="font-size:18px;letter-spacing:0.1em;margin:0 0 4px;">
        <span style="color:#c8a84b;">&#62;&#60;((((&#176;&#62;</span>
        &nbsp;
        <span style="color:#3a6b3e;">&#62;&#60;((((&#176;&#62;</span>
        &nbsp;
        <span style="color:#c8a84b;">&#62;&#60;((((&#176;&#62;</span>
      </p>
      <p style="font-size:13px;font-weight:bold;color:#1a1a1a;margin:10px 0 2px;">Mac Brown</p>
      <p style="font-size:12px;color:#666;margin:2px 0;">779 West Deep Creek Rd. &middot; Bryson City, NC 28713</p>
      <p style="font-size:12px;color:#666;margin:2px 0;">Cell: (828) 736-1469</p>
      <p style="font-size:12px;margin:6px 0 0;">
        <a href="https://flyfishingguideschool.com" style="color:hsl(215,55%,28%);text-decoration:none;">flyfishingguideschool.com</a>
      </p>
    </div>

  </div>
</body>
</html>`;
}

export default router;
