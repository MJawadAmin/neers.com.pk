"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const storedOtp = sessionStorage.getItem("otp");

  const handleChange = (index, e) => {
    const { value } = e.target;
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const verifyOTP = () => {
    if (otp.join("") === storedOtp) {
      toast.success("OTP Verified!");
      sessionStorage.removeItem("otp");
      router.push("/dashboard");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
      <div className="flex space-x-2 mb-4">
        {otp.map((_, index) => (
          <input key={index} ref={(el) => (inputRefs.current[index] = el)} type="text" maxLength="1" className="w-12 h-12 text-center border" value={otp[index]} onChange={(e) => handleChange(index, e)} />
        ))}
      </div>
      <button onClick={verifyOTP} className="bg-orange-500 text-white px-4 py-2 rounded">Verify</button>
    </div>
  );
};

export default VerifyOtp;
