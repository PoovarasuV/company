import nodemailer from "nodemailer";
import { logger } from "./logger";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "info.fenzo@gmail.com",
      subject: `New Project Request from ${data.name}`,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    logger.info({ email: data.email }, "Contact email sent successfully");
    return { success: true };
  } catch (error) {
    logger.error({ error, email: data.email }, "Failed to send contact email");
    throw error;
  }
}
