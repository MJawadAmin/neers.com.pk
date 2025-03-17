import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CLIENT_UPDATE_STEPPER, CLIENT_GET_STEPPER } from "./graphqlOperation";
import Firstdiv from "./step6/Firstdiv";
import Seconddiv from "./step6/Seconddiv";

export default function Step6({ prev, productId }) { // Add productId prop
  // Add API operations
  const [updateStepper] = useMutation(CLIENT_UPDATE_STEPPER);
  const { data } = useQuery(CLIENT_GET_STEPPER, {
    variables: { 
      productId: productId,
      stepperType: "final_step"
    }
  });

  // Add navigation handler
  const handleNavigation = async () => {
    try {
      await updateStepper({
        variables: {
          productId: productId,
          action: "prev",
          currentStep: "6",
          stepperType: "final_step"
        }
      });
      prev();
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="w-full bg-white p-10 space-y-6">
      {/* Pass required props to children */}
      <Firstdiv 
        productId={productId}
        updateStepper={updateStepper}
        initialData={data?.clientGetStepper?.steps_info?.firstDiv}
      />
      <Seconddiv 
        productId={productId}
        updateStepper={updateStepper}
        initialData={data?.clientGetStepper?.steps_info?.secondDiv}
      />

      {/* Updated previous button */}
      <button 
        onClick={handleNavigation} 
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Previous
      </button>
    </div>
  );
}