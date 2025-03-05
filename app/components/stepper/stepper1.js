"use client";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3"];

export default function Stepper({ currentStep }) {
  return (
    <div className="flex justify-center items-center mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold 
            ${currentStep === index ? "bg-orange-600" : "bg-gray-400"}`}
          >
            {index + 1}
          </div>
          {index !== steps.length - 1 && (
            <div className="w-16 h-1 bg-gray-400"></div>
          )}
        </div>
      ))}
    </div>
  );
}
