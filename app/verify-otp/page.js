"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

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
    <div className="flex flex-col items-center justify-center h-screen w-full pt-[18.5px]">
      <h3 className="text-center text-[#F76300] font-semibold text-lg lg:text-[33.5px] leading-[27px] font-poppins mb-4">
        Sign Up
      </h3>
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw]  shadow-[0px_0px_2px_2px_rgba(0,0,0,0.06)]  rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="">
            <div className="bg-[#fafafa]  shadow-[0px_3px_4px_2px_rgba(0,0,0,0.2)] px-2 rounded-sm  flex flex-col">
              <h1 className="text-sm font-semibold mt-3">Email OTP</h1>
              <div className="flex gap-10 mb-4 justify-center ">
                {otp.map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-11.5 h-11.5 text-center border border-orange-500 bg-white rounded text-black outline-none focus:ring-0 focus:border-orange-500"
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e)}
                  />
                ))}
              </div>
              
            </div>


            <div className="bg-[#fafafa]  shadow-[0px_3px_4px_2px_rgba(0,0,0,0.2)] mt-5 px-2 rounded-sm  flex flex-col">
              <h1 className="text-sm font-semibold mt-3">Phone OTP</h1>
              <div className="flex gap-10 mb-4 justify-center ">
                {otp.map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-11.5 h-11.5 text-center border border-orange-500 bg-white rounded text-black outline-none focus:ring-0 focus:border-orange-500"
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e)}
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
