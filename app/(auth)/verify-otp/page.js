"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { useMutation, gql } from "@apollo/client";

const VERIFY_OTP_MUTATION = gql`
  mutation ClientVerifyOtp($email: String!, $phoneOtp: String!, $emailOtp: String!) {
    clientVerifyOtp(email: $email, phoneOtp: $phoneOtp, emailOtp: $emailOtp) {
      phoneVerified
      emailVerified
      status
    }
  }
`;

const VerifyOtp = () => {
  const router = useRouter();
  const [emailOtp, setEmailOtp] = useState(["", "", "", ""]);
  const [whatsappOtp, setWhatsappOtp] = useState(["", "", "", ""]);
  const emailRefs = useRef([]);
  const whatsappRefs = useRef([]);

  const [verifyOtpMutation, { loading }] = useMutation(VERIFY_OTP_MUTATION);

  const handleChange = (otpType, index, e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow digits

    if (otpType === "email") {
      const newEmailOtp = [...emailOtp];
      newEmailOtp[index] = value;
      setEmailOtp(newEmailOtp);
      if (value && index < 3 && emailRefs.current[index + 1]) {
        emailRefs.current[index + 1].focus();
      }
    } else if (otpType === "whatsapp") {
      const newWhatsappOtp = [...whatsappOtp];
      newWhatsappOtp[index] = value;
      setWhatsappOtp(newWhatsappOtp);
      if (value && index < 3 && whatsappRefs.current[index + 1]) {
        whatsappRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (otpType, index, e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      if (otpType === "email") {
        emailRefs.current[index - 1].focus();
      } else if (otpType === "whatsapp") {
        whatsappRefs.current[index - 1].focus();
      }
    }
  };

  const verifyOTP = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      console.log("Email from localStorage:", email);

      if (!email) {
        toast.error("Email not found. Please log in again.");
        console.error("Email is null. localStorage might be empty or unavailable.");
        return; // Stop the mutation
      }

      if (loading) return;

      const emailOtpString = emailOtp.join("");
      const whatsappOtpString = whatsappOtp.join("");

      const { data } = await verifyOtpMutation({
        variables: {
          email: email,
          phoneOtp: whatsappOtpString,
          emailOtp: emailOtpString,
        },
      });

      if (data?.clientVerifyOtp?.status === "Approved") {
        toast.success("OTP Verified!");
        router.push("/signin");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      toast.error("An error occurred during OTP verification.");
    }
  };

  useEffect(() => {
    emailRefs.current = emailRefs.current.slice(0, 4);
    whatsappRefs.current = whatsappRefs.current.slice(0, 4);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full pt-[18.5px]">
      <h3 className="text-center text-[#F76300] font-semibold text-lg lg:text-[33.5px] leading-[27px] font-poppins mb-4">
        Sign Up
      </h3>
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.06)] rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div>
            <div className="bg-[#fafafa] shadow-[0px_3px_4px_2px_rgba(0,0,0,0.2)] px-2 rounded-sm flex flex-col">
              <h1 className="text-sm font-semibold mt-3">Email OTP</h1>
              <div className="flex gap-10 mb-4 justify-center">
                {emailOtp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (emailRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-11.5 h-11.5 text-center border border-orange-500 bg-white rounded text-black outline-none focus:ring-0 focus:border-orange-500"
                    value={digit}
                    onChange={(e) => handleChange("email", index, e)}
                    onKeyDown={(e) => handleKeyDown("email", index, e)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#fafafa] shadow-[0px_3px_4px_2px_rgba(0,0,0,0.2)] mt-5 px-2 rounded-sm flex flex-col">
              <h1 className="text-sm font-semibold mt-3">WhatsApp OTP</h1>
              <div className="flex gap-10 mb-4 justify-center">
                {whatsappOtp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (whatsappRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-11.5 h-11.5 text-center border border-orange-500 bg-white rounded text-black outline-none focus:ring-0 focus:border-orange-500"
                    value={digit}
                    onChange={(e) => handleChange("whatsapp", index, e)}
                    onKeyDown={(e) => handleKeyDown("whatsapp", index, e)}
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