// emailService.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,      // e.g., "smtp.gmail.com"
  port: Number(process.env.EMAIL_PORT),  // e.g., 587
  secure: false,                     // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,    // your email address
    pass: process.env.EMAIL_PASS,    // your email password or app-specific password
  },
});

export async function sendContactEmail({ name, email, company, service, message }: {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address, can be same as user
    to: process.env.EMAIL_TO,     // your receiving email address (or a list separated by commas)
    subject: 'New Contact Form Submission',
    text: `
      You received a new message from your contact form:
      
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Service: ${service}
      Message: ${message}
    `,
  };

  return transporter.sendMail(mailOptions);
}
