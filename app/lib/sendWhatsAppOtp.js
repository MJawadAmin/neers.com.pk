export const sendWhatsAppOTP = (phoneNumber) => {
    const otpMessage = "Your OTP code is: 1234";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(otpMessage)}`;
    
    window.open(whatsappURL, "_blank");
  };
  