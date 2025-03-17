import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CLIENT_UPDATE_STEPPER, CLIENT_GET_STEPPER } from "../graphqlOperations";

export default function Step3({ next, prev, productId }) {
  // Existing state
  const [isRegistered, setIsRegistered] = useState(false);
  
  // New state for form data
  const [formData, setFormData] = useState({
    companyName: "",
    productRating: "",
    productCapacity: "",
    productColors: "",
    registrationNumber: "",
    registrationYear: "",
    features: "",
    productionEstimate: ""
  });

  // GraphQL operations
  const [updateStepper] = useMutation(CLIENT_UPDATE_STEPPER);
  const { data } = useQuery(CLIENT_GET_STEPPER, {
    variables: { 
      productId: productId,
      stepperType: "energy_efficiency" // Replace with your actual stepper type
    }
  });

  // Initialize form data from API
  useEffect(() => {
    if (data?.clientGetStepper?.steps_info) {
      const stepData = data.clientGetStepper.steps_info.find(
        step => step.step_number === 3
      );
      if (stepData) {
        setIsRegistered(stepData.isRegistered || false);
        setFormData(prev => ({
          ...prev,
          ...stepData.formData
        }));
      }
    }
  }, [data]);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Navigation handler
  const handleNavigation = async (direction) => {
    try {
      await updateStepper({
        variables: {
          productId: productId,
          action: direction,
          currentStep: "3",
          stepperType: "energy_efficiency",
          stepsInfo: [{
            step_number: 3,
            isRegistered,
            formData: formData
          }]
        }
      });
      direction === 'next' ? next() : prev();
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="w-full rounded-lg bg-white p-10 space-y-6">
      {/* Main div 1 - Original JSX preserved */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <h2 className="text-xl mb-6">1. Applicant Information</h2>
        <h2 className="text-xl mb-6">Company Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              a. Name<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productRating" className="text-sm font-medium">
              b. Rating of Product/Appliance:<span className="text-red-500">*</span>
            </label>
            <input
              id="productRating"
              placeholder="Rating..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="productRating"
              value={formData.productRating}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productCapacity" className="text-sm font-medium">
              c. Size/Capacity:<span className="text-red-500">*</span>
            </label>
            <input
              id="productCapacity"
              placeholder="Capacity..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="number"
              name="productCapacity"
              value={formData.productCapacity}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productColors" className="text-sm font-medium">
              d. Color (Specify All Available Colors):<span className="text-red-500">*</span>
            </label>
            <input
              id="productColors"
              placeholder="Colors..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="productColors"
              value={formData.productColors}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Second Main div - Original JSX preserved */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <label htmlFor="registrationStatus" className="text-sm font-medium">
          e. Is the product granted PS Mark by Pakistan Standards & Quality Control Authority (PSQCA)?
          <span className="text-red-500">*</span>
        </label>

        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="registrationStatus"
              className="custom-radio"
              checked={isRegistered}
              onChange={() => setIsRegistered(true)}
            />
            <span className="text-gray-800 font-medium">Yes</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="registrationStatus"
              className="custom-radio"
              checked={!isRegistered}
              onChange={() => setIsRegistered(false)}
            />
            <span className="text-gray-800 font-medium">No</span>
          </label>
        </div>

        {isRegistered && (
          <div className="mt-4 gap-4 w-full flex">
            <div className="w-1/3">
              <label htmlFor="registrationNumber" className="text-sm font-medium">
                Registration Number #<span className="text-red-500">*</span>
              </label>
              <input
                id="registrationNumber"
                placeholder="Enter registration number..."
                className="mt-2 text-black w-full h-10 border rounded p-2 border-red-500"
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-1/3">
              <label htmlFor="registrationYear" className="text-sm font-medium">
                Year<span className="text-red-500">*</span>
              </label>
              <input
                id="registrationYear"
                placeholder="Enter year..."
                className="mt-2 text-black w-full h-10 border rounded p-2 border-red-500"
                type="number"
                name="registrationYear"
                value={formData.registrationYear}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>

      {/* Remaining sections with same pattern */}

      {/* Navigation Buttons - Original JSX preserved */}
      <div className="flex gap-4 mt-4">
        <button 
          onClick={() => handleNavigation('prev')} 
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button 
          onClick={() => handleNavigation('next')} 
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}