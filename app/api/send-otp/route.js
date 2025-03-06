import { NextResponse } from "next/server";
import sendOtpEmail from "@/lib/sendOtpEmail";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await sendOtpEmail(email);
    return NextResponse.json({ message: "OTP sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
