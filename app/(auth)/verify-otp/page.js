"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

const VerifyOtp = () => {
  const router = useRouter();
  const [emailOtp, setEmailOtp] = useState(["", "", "", ""]);
  const [whatsappOtp, setWhatsappOtp] = useState(["", "", "", ""]);
  const emailRefs = useRef([]);
  const whatsappRefs = useRef([]);

  const STATIC_OTP = "1234"; // Static OTP for verification

  // Handle OTP input change for both Email & WhatsApp
  const handleChange = (otpType, index, e) => {
    const { value } = e.target;
    if (isNaN(value)) return;

    if (otpType === "email") {
      let newEmailOtp = [...emailOtp];
      newEmailOtp[index] = value;
      setEmailOtp(newEmailOtp);
      if (value && index < 3) emailRefs.current[index + 1]?.focus();
    } else {
      let newWhatsappOtp = [...whatsappOtp];
      newWhatsappOtp[index] = value;
      setWhatsappOtp(newWhatsappOtp);
      if (value && index < 3) whatsappRefs.current[index + 1]?.focus();
    }
  };

  // Verify OTPs
  const verifyOTP = () => {
    if (emailOtp.join("") === STATIC_OTP && whatsappOtp.join("") === STATIC_OTP) {
      toast.success("OTP Verified!");
      router.push("/signin");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full pt-[18.5px]">
      <h3 className="text-center text-[#F76300] font-semibold text-lg lg:text-[33.5px] leading-[27px] font-poppins mb-4">
        Sign Up
      </h3>
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.06)] rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div>
            {/* Email OTP Section */}
            <div className="bg-[#fafafa] shadow-[0px_3px_4px_2px_rgba(0,0,0,0.2)] px-2 rounded-sm flex flex-col">
              <h1 className="text-sm font-semibold mt-3">Email OTP</h1>
              <div className="flex gap-10 mb-4 justify-center">
                {emailOtp.map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (emailRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-11.5 h-11.5 text-center border border-orange-500 bg-white rounded text-black outline-none focus:ring-0 focus:border-orange-500"
                    value={emailOtp[index]}
                    onChange={(e) => handleChange("email", index, e)}
                  />
                ))}
              </div>
            </div>

            {/* WhatsApp OTP Section */}
            <div className="bg-[#fafafa] shadow-[0px_3px_4px_2px_rgba(0,0,0,0.2)] mt-5 px-2 rounded-sm flex flex-col">
              <h1 className="text-sm font-semibold mt-3">WhatsApp OTP</h1>
              <div className="flex gap-10 mb-4 justify-center">
                {whatsappOtp.map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (whatsappRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-11.5 h-11.5 text-center border border-orange-500 bg-white rounded text-black outline-none focus:ring-0 focus:border-orange-500"
                    value={whatsappOtp[index]}
                    onChange={(e) => handleChange("whatsapp", index, e)}
                  />
                ))}
              </div>
            </div>

            <button onClick={verifyOTP} className="w-full mt-10 bg-orange-500 text-white py-2">
              Verify
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image src="/login.webp" alt="background" className="w-full h-full object-cover" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
