// authResolver.js
clientVerifyOtp: async (_, { email, phoneOtp, emailOtp }) => {
    console.log("Resolving clientVerifyOtp...");
    console.log("Received Email:", email);
    console.log("Received Email OTP:", emailOtp);
    console.log("Received Phone OTP:", phoneOtp);
  
    try {
      // Example database query
      const userOtpRecord = await db.collection("otps").findOne({ email });
      console.log("OTP record from DB:", userOtpRecord);
  
      if (!userOtpRecord) {
        throw new Error("No OTP record found for this email.");
      }
  
      const { emailOtp: storedEmailOtp, phoneOtp: storedPhoneOtp, expiry } = userOtpRecord;
  
      if (Date.now() > expiry) {
        throw new Error("OTP has expired. Please request a new one.");
      }
  
      if (storedEmailOtp !== emailOtp || storedPhoneOtp !== phoneOtp) {
        throw new Error("Invalid OTPs provided.");
      }
  
      console.log("OTP Verification Success!");
      return {
        phoneVerified: true,
        emailVerified: true,
        status: "success",
      };
    } catch (error) {
      console.error("Error in clientVerifyOtp:", error.message);
      throw new Error(error.message);
    }
  };
  