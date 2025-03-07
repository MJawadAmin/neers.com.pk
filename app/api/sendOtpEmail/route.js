import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      console.error("Missing email or OTP");
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    console.log("Received email:", email);
    console.log("Received OTP:", otp);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
      html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    return NextResponse.json({ message: "OTP sent successfully!" });
  } catch (error) {
    console.error("Full Error Details:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
