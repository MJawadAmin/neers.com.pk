"use client";
import { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

export default function Stepper({ currentStep }) {
  return (
    <div >
      {steps.map((step, index) => (
        <div key={index} >
          {/* Step Circle */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all duration-300
            ${currentStep >= index ? "bg-[#173b45]" : "bg-gray-400"}`}
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
      ))}
    </div>
  );
}

export function StepperContainer() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep
    );
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="flex flex-col items-center">
      <Stepper currentStep={currentStep} />
      <div className="flex gap-4 mt-4">
        <button
          onClick={prevStep}
         
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
     disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}