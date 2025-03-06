import nodemailer from "nodemailer";

const sendOtpEmail = async (userEmail) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your Gmail
      pass: process.env.EMAIL_PASSWORD, // App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Your OTP Code",
    text: "Your OTP code is: 1234",
  };

  await transporter.sendMail(mailOptions);
};

export default sendOtpEmail;
