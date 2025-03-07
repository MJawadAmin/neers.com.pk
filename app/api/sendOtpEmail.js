import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const otpStorage = {}; // Store OTPs temporarily (Use DB in production)

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
  otpStorage[email] = otp; // Save OTP temporarily

  // Set up email transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  // Send OTP email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
  });

  res.status(200).json({ success: true, message: "OTP sent successfully" });
}
