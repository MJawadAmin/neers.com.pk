"use client";
import { useState } from "react";

const steps = ["Agreement", "Applicant Info", "Model Info", "Document", "Documents", "Test Repots"];

export default function Stepper({ currentStep }) {
  console.log("Stepper Rendered, Current Step:", currentStep); // Debugging log

  return (
    <div className="flex justify-center bg-[#173b45] max-w-[88%] w-full h-[120px] px-4 rounded-lg">
      <div className="flex w-full items-center px-4 sm:px-10 lg:px-20">
        {steps.map((step, index) => {
          console.log(`Rendering step ${index + 1}, currentStep: ${currentStep}`); // Debugging log
          return (
            <div key={index} className="flex items-center flex-1">
              {/* Step Circle and Name */}
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-white font-normal transition-all duration-300
                  ${currentStep >= index ? "bg-orange-600" : "bg-gray-400"}`}
                >
                  {index + 1}
                </div>

                {/* Step Name */}
                <div className="mt-2 sm:mt-3 text-nowrap text-white text-xs sm:text-sm text-center">
                  {step}
                </div>
              </div>

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-2 sm:mx-4 transition-all duration-300 
                  ${currentStep > index ? "bg-orange-600" : "bg-white"}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function StepperContainer() {
  const [currentStep, setCurrentStep] = useState(0);

  console.log("Total Steps:", steps.length); // Debugging log
  console.log("Current Step (Rendered):", currentStep); // Debugging log

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      console.log("Next clicked, currentStep:", prevStep); // Debugging log
      return prevStep < steps.length - 1 ? prevStep + 1 : prevStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      console.log("Previous clicked, currentStep:", prevStep); // Debugging log
      return prevStep > 0 ? prevStep - 1 : prevStep;
    });
  };

  const handleSave = () => {
    console.log("Save clicked, currentStep:", currentStep); // Debugging log

    // Add your save logic here
    saveInformation(currentStep); // Example function to save information
  };

  const saveInformation = (step) => {
    // Example: Save information for the current step
    console.log(`Saving information for step ${step + 1}: ${steps[step]}`);
    // You can add API calls or state updates here to save the data
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
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          Save
        </button>
      </div>
    </div>
  );
}