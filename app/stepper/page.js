"use client";
import { useState } from "react";
import Stepper from "@/app/protected/NEERS_PID stppers/stepper1";
import Step1 from "@/app/protected/NEERS_PID stppers/step1";
import Step2 from "@/app/protected/NEERS_PID stppers/step2";
import Step3 from "@/app/protected/NEERS_PID stppers/step3";
import Step4 from "@/app/protected/NEERS_PID stppers/step4";
import Step5 from "@/app/protected/NEERS_PID stppers/step5";
import Step6 from "@/app/protected/NEERS_PID stppers/step6";

export default function StepperPage() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-[#f76300] p-5 w-full">
      <Stepper currentStep={step} />
      <div className="max-w-[90%] w-full bg-whiteshadow-lg rounded-lg px-5 pt-2 ">
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