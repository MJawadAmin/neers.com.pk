"use client";
import { useState } from "react";
import Stepper from "@/app/components/stepper/stepper1";
import Step1 from "@/app/components/stepper/step1";
import Step2 from "@/app/components/stepper/step2";
import Step3 from "@/app/components/stepper/step3";
import Step4 from "@/app/components/stepper/step4";
import Step5 from "@/app/components/stepper/step5";
import Step6 from "@/app/components/stepper/step6";

export default function StepperPage() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <Stepper currentStep={step} />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-5">
        {step === 0 && <Step1 next={nextStep} />}
        {step === 1 && <Step2 next={nextStep} prev={prevStep} />}
        {step === 2 && <Step3 next={nextStep} prev={prevStep} />}
        {step === 3 && <Step4 next={nextStep} prev={prevStep} />}
        {step === 4 && <Step5 next={nextStep} prev={prevStep} />}
        {step === 5 && <Step6 prev={prevStep} />}
      </div>
    </div>
  );
}