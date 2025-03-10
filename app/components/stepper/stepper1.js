"use client";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

export default function Stepper({ currentStep }) {
  console.log("Stepper Rendered, Current Step:", currentStep); // ✅ Debugging log

  return (
    <div className="flex justify-center items-center mb-6">
     {steps.map((step, index) => {
  console.log(`Rendering step ${index + 1}, currentStep: ${currentStep}`); // Debugging log
  return (
    <div key={index} className="flex items-center">
      {/* Step Circle */}
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all duration-300
        ${currentStep >= index ? "bg-orange-600" : "bg-gray-400"}`}
      >
        {index + 1}
      </div>

      {/* Connector Line */}
      {index !== steps.length - 1 && (
        <div
          className={`w-16 h-1 transition-all duration-300 
          ${currentStep > index ? "bg-orange-600" : "bg-gray-400"}`}
        ></div>
      )}
    </div>
  );
})}
    </div>
  );
}

// ✅ Fully Functional Parent Component
export function StepperContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  
  console.log("Total Steps:", steps.length); // ✅ Debugging log
  console.log("Current Step (Rendered):", currentStep); // ✅ Debugging log

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      console.log("Next clicked, currentStep:", prevStep); // ✅ Debugging log
      return prevStep < steps.length - 1 ? prevStep + 1 : prevStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      console.log("Previous clicked, currentStep:", prevStep); // ✅ Debugging log
      return prevStep > 0 ? prevStep - 1 : prevStep;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Stepper currentStep={currentStep} />
      <div className="flex gap-4 mt-4">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50"
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-orange-600 text-white rounded disabled:opacity-50"
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
