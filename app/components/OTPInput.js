import React, { useState, useRef } from "react";

const OTPInput = ({ onComplete }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.join("").length === 4) {
      onComplete(newOtp.join(""));
    }
  };

  return (
    <div className="flex gap-2">
      {otp.map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center border border-gray-500 rounded"
          value={otp[index]}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
