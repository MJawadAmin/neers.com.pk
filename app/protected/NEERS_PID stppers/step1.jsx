import React, { useState } from "react";

export default function Step1({ next }) {
  // State to track the selected radio button
  const [isAgreed, setIsAgreed] = useState(false);

  // Handle radio button change
  const handleRadioChange = (e) => {
    setIsAgreed(e.target.value === "yes");
  };

  return (
    <div className="relative w-full">
      {/* Header Section */}
      <div className="bg-white py-4 px-4 w-full rounded-xl">
        <p className="max-w-[1020px] w-full font-poppins font-normal sm:text-[20px] text-base leading-8 sm:leading-[44px]">
          <span className="text-red-500">*</span>
          6. Read and understand the National Energy Efficiency and Conservation (Pakistan Energy Labels for Fans) regulations, 2023.
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F76300] border p-[5px] border-b-[#F76300] border-x-[0px] border-t-[0px]"
            href="https://neeca.pk/neecagov/regulations/SRO411(I)-2024.pdf"
          >
            Do you agree with the requirement, criteria, and conditions
          </a>{" "}
          for grant of Pakistan Energy label given in these regulations?
        </p>

       {/* Radio Buttons */}
<div className="flex space-x-4">
  <label className="flex items-center space-x-2">
    <input
      type="radio"
      name="myRadio"
      value="yes"
      className="w-5 h-5 custom-radio text-orange-500 focus:ring-orange-500 border-gray-300"
      onChange={handleRadioChange}
    />
    <span className="text-gray-800 font-medium">Yes</span>
  </label>

  <label className="flex items-center space-x-2">
    <input
      type="radio"
      name="myRadio"
      value="no"
      className="w-5 h-5 text-orange-500 custom-radio focus:ring-orange-500 border-gray-300"
      onChange={handleRadioChange}
    />
    <span className="text-gray-800 font-medium">No</span>
  </label>
</div>

        {/* Next Button */}
        <div className="w-full p-4">
          <button
            onClick={next}
            className={`mt-4 px-4 py-2 rounded ${
              isAgreed
                ? "bg-orange-600 text-white cursor-pointer" // Enabled state
                : "bg-orange-400 text-white cursor-not-allowed" // Disabled state
            }`}
            disabled={!isAgreed} // Disable the button if "Yes" is not selected
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}