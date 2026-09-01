import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/ffgs-contact", async (req, res) => {
  const { name, email, phone, inquiry, date, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const appPassword = process.env.GMAIL_APP_PASSWORD;
  if (!appPassword) {
    req.log.error("GMAIL_APP_PASSWORD not set");
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "macbrownflyfish@gmail.com",
      pass: appPassword,
    },
  });

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
    await transporter.sendMail({
      from: `"Fly Fishing Guide School Website" <macbrownflyfish@gmail.com>`,
      to: "flyfishingguideschool@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name}${inquiry ? ` — ${inquiry}` : ""}`,
      text: body,
    });

    req.log.info({ name, email }, "FFGS contact form submitted");
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err, "Failed to send FFGS contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
