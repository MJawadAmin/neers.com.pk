import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CLIENT_UPDATE_STEPPER, CLIENT_GET_STEPPER } from "./graphqlOperation";

export default function Step4({ next, prev, productId }) {
  // State management
  const [files, setFiles] = useState({
    companyBrochure: null,
    productBrochure: null
  });

  // GraphQL operations
  const [updateStepper] = useMutation(CLIENT_UPDATE_STEPPER);
  const { data } = useQuery(CLIENT_GET_STEPPER, {
    variables: { 
      productId: productId,
      stepperType: "document_upload" // Replace with your actual stepper type
    }
  });

  // Initialize from API
  useEffect(() => {
    if (data?.clientGetStepper?.steps_info) {
      const stepData = data.clientGetStepper.steps_info.find(
        step => step.step_number === 4
      );
      if (stepData) {
        setFiles({
          companyBrochure: stepData.companyBrochure,
          productBrochure: stepData.productBrochure
        });
      }
    }
  }, [data]);

  // File upload handler
  const handleFileUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFiles(prev => ({
          ...prev,
          [type]: {
            name: file.name,
            type: file.type,
            content: reader.result.split(',')[1] // Store base64 content
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Navigation handler
  const handleNavigation = async (direction) => {
    try {
      await updateStepper({
        variables: {
          productId: productId,
          action: direction,
          currentStep: "4",
          stepperType: "document_upload",
          stepsInfo: [{
            step_number: 4,
            ...files
          }]
        }
      });
      direction === 'next' ? next() : prev();
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="w-full rounded-lg bg-white p-10 space-y-6 ">
      <h2 className="text-xl mb-6 text-center">9. The following documents should be attached with the application</h2>
  
      {/* Main document section */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 flex justify-center gap-2">
        {/* Company Brochure */}
        <div className="">
          <h1 className="text-xl font-semibold text-center">a. Company Brochure</h1>
          <p className="text-center">Pdf, .Doc Only (Maximum 100 MB)</p>
          <div className="flex justify-center items-center cursor-pointer flex-col border w-[300px] h-[150px]">
            <input 
              accept=".pdf,.doc,.docx" 
              className="hidden" 
              type="file"
              name="companyBrochure"
              onChange={(e) => handleFileUpload('companyBrochure', e)}
            />
            <svg
              viewBox="0 0 1024 1024"
              width="40px"
              height="40px"
              fill="#f76300"
            >
              <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
            </svg>
            <span className="mt-2 text-sm">
              {files.companyBrochure?.name || "Drag and drop, or browse"}
            </span>
            {files.companyBrochure && (
              <a 
                href={`data:${files.companyBrochure.type};base64,${files.companyBrochure.content}`}
                download
                className="text-blue-500 mt-1"
              >
                Download File
              </a>
            )}
          </div>
        </div>

        {/* Product Brochure */}
        <div className="">
          <h1 className="text-xl font-semibold">b. Product Brochure</h1>
          <p className="text-center">Pdf, .Doc Only (Maximum 100 MB)</p>
          <div className="flex justify-center items-center cursor-pointer flex-col border w-[300px] h-[150px]">
            <input 
              accept=".pdf,.doc,.docx" 
              className="hidden" 
              type="file"
              name="productBrochure"
              onChange={(e) => handleFileUpload('productBrochure', e)}
            />
            <svg
              viewBox="0 0 1024 1024"
              width="40px"
              height="40px"
              fill="#f76300"
            >
              <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
            </svg>
            <span className="mt-2 text-sm">
              {files.productBrochure?.name || "Drag and drop, or browse"}
            </span>
            {files.productBrochure && (
              <a 
                href={`data:${files.productBrochure.type};base64,${files.productBrochure.content}`}
                download
                className="text-blue-500 mt-1"
              >
                Download File
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4 justify-center">
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