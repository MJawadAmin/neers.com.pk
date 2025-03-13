export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: "Email and OTP are required" });

  // Verify OTP
  if (otpStorage[email] && otpStorage[email] == otp) {
    delete otpStorage[email]; // Remove OTP after verification
    return res.status(200).json({ success: true, message: "OTP Verified!" });
  }

  res.status(400).json({ success: false, message: "Invalid OTP" });
}
