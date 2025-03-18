"use client";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CLIENT_UPDATE_STEPPER, CLIENT_GET_STEPPER } from "./graphqlOperation";
import Loader from "@/app/components/Loader";

export default function Step3({ next, prev, productId }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
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
  const [updateStepper, { loading: updating }] = useMutation(CLIENT_UPDATE_STEPPER);
  const { data, loading, error } = useQuery(CLIENT_GET_STEPPER, {
    variables: { 
      productId: productId,
      stepperType: "energy_efficiency"
    },
    fetchPolicy: "network-only"
  });

  // Initialize form data from API
  useEffect(() => {
    if (data?.clientGetStepper?.steps_info) {
      const stepData = data.clientGetStepper.steps_info.find(
        (step) => step.step_number === 3
      );
      
      if (stepData) {
        const applicantInfo = stepData.applicantInfo || {};
        setIsRegistered(stepData.isRegistered || false);
        
        setFormData({
          companyName: applicantInfo.company_name || "",
          productRating: applicantInfo.product_rating || "",
          productCapacity: applicantInfo.product_capacity || "",
          productColors: applicantInfo.product_colors || "",
          registrationNumber: applicantInfo.registration_number || "",
          registrationYear: applicantInfo.registration_year?.toString() || "",
          features: applicantInfo.features || "",
          productionEstimate: applicantInfo.production_estimate || ""
        });
      }
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = [
      'companyName', 
      'productRating', 
      'productCapacity', 
      'productColors'
    ];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = "This field is required";
      }
    });

    if (isRegistered) {
      if (!formData.registrationNumber.trim()) {
        errors.registrationNumber = "Registration number is required";
      }
      if (!formData.registrationYear.trim()) {
        errors.registrationYear = "Registration year is required";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNavigation = async (direction) => {
    if (!validateForm()) return;

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
            applicantInfo: {
              company_name: formData.companyName,
              product_rating: formData.productRating,
              product_capacity: formData.productCapacity,
              product_colors: formData.productColors,
              registration_number: formData.registrationNumber,
              registration_year: parseInt(formData.registrationYear) || 0,
              features: formData.features,
              production_estimate: formData.productionEstimate
            }
          }]
        }
      });

      direction === 'next' ? next() : prev();
    } catch (error) {
      console.error("API Error:", error);
      setFormErrors({ submit: error.message });
    }
  };

  if (loading) return <div className="text-center p-8"><Loader /></div>;
  if (error) return <div className="text-red-500 p-8">Error: {error.message}</div>;

  return (
    <div className="w-full rounded-lg bg-white p-10 space-y-6">
      {/* Applicant Information Section */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <h2 className="text-xl mb-6">1. Applicant Information</h2>
        <h2 className="text-xl mb-6">Company Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {/* Company Name */}
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              a. Name<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className={`text-black w-full h-9 border rounded p-2 ${
                formErrors.companyName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            {formErrors.companyName && (
              <span className="text-red-500 text-sm">{formErrors.companyName}</span>
            )}
          </div>

          {/* Product Rating */}
          <div className="flex flex-col">
            <label htmlFor="productRating" className="text-sm font-medium">
              b. Rating of Product/Appliance<span className="text-red-500">*</span>
            </label>
            <input
              id="productRating"
              placeholder="Rating..."
              className={`text-black w-full h-9 border rounded p-2 ${
                formErrors.productRating ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              type="text"
              name="productRating"
              value={formData.productRating}
              onChange={handleInputChange}
            />
            {formErrors.productRating && (
              <span className="text-red-500 text-sm">{formErrors.productRating}</span>
            )}
          </div>

          {/* Product Capacity */}
          <div className="flex flex-col">
            <label htmlFor="productCapacity" className="text-sm font-medium">
              c. Size/Capacity<span className="text-red-500">*</span>
            </label>
            <input
              id="productCapacity"
              placeholder="Capacity..."
              className={`text-black w-full h-9 border rounded p-2 ${
                formErrors.productCapacity ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              type="number"
              name="productCapacity"
              value={formData.productCapacity}
              onChange={handleInputChange}
            />
            {formErrors.productCapacity && (
              <span className="text-red-500 text-sm">{formErrors.productCapacity}</span>
            )}
          </div>

          {/* Product Colors */}
          <div className="flex flex-col">
            <label htmlFor="productColors" className="text-sm font-medium">
              d. Available Colors<span className="text-red-500">*</span>
            </label>
            <input
              id="productColors"
              placeholder="Colors..."
              className={`text-black w-full h-9 border rounded p-2 ${
                formErrors.productColors ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              type="text"
              name="productColors"
              value={formData.productColors}
              onChange={handleInputChange}
            />
            {formErrors.productColors && (
              <span className="text-red-500 text-sm">{formErrors.productColors}</span>
            )}
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <label htmlFor="registrationStatus" className="text-sm font-medium">
          e. PS Mark Registration Status<span className="text-red-500">*</span>
        </label>

        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="registrationStatus"
              className="custom-radio"
              checked={isRegistered}
              onChange={() => setIsRegistered(true)}
              disabled={updating}
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
              disabled={updating}
            />
            <span className="text-gray-800 font-medium">No</span>
          </label>
        </div>

        {isRegistered && (
          <div className="mt-4 gap-4 w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <label htmlFor="registrationNumber" className="text-sm font-medium">
                Registration Number<span className="text-red-500">*</span>
              </label>
              <input
                id="registrationNumber"
                placeholder="Registration number..."
                className={`mt-2 text-black w-full h-10 border rounded p-2 ${
                  formErrors.registrationNumber ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                disabled={updating}
              />
              {formErrors.registrationNumber && (
                <span className="text-red-500 text-sm">{formErrors.registrationNumber}</span>
              )}
            </div>

            <div className="w-full md:w-1/3">
              <label htmlFor="registrationYear" className="text-sm font-medium">
                Year<span className="text-red-500">*</span>
              </label>
              <input
                id="registrationYear"
                placeholder="Registration year..."
                className={`mt-2 text-black w-full h-10 border rounded p-2 ${
                  formErrors.registrationYear ? "border-red-500" : "border-gray-300"
                }`}
                type="number"
                name="registrationYear"
                value={formData.registrationYear}
                onChange={handleInputChange}
                min="1900"
                max={new Date().getFullYear()}
                disabled={updating}
              />
              {formErrors.registrationYear && (
                <span className="text-red-500 text-sm">{formErrors.registrationYear}</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex gap-4 mt-4 justify-end">
        <button 
          onClick={() => handleNavigation('prev')}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={updating}
        >
          Previous
        </button>
        <button 
          onClick={() => handleNavigation('next')}
          className="bg-orange-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={updating}
        >
          {updating ? <Loader size="sm" /> : "Next"}
        </button>
      </div>

      {formErrors.submit && (
        <div className="text-red-500 text-center mt-4">
          {formErrors.submit}
        </div>
      )}
    </div>
  );
}