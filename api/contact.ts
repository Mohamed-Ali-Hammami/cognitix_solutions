import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { email, subject, message } = req.body;
  
  if (!email || !subject || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password (NOT your actual password)
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
