"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useQuery } from "@apollo/client";
import { GET_STEPPER } from "../../../src/apollo/queries";

const countries = [
  { value: "pakistan", label: "Pakistan" },
  { value: "usa", label: "USA" },
  { value: "uk", label: "UK" },
];

const states = [
  { value: "sindh", label: "Sindh" },
  { value: "punjab", label: "Punjab" },
  { value: "balochistan", label: "Balochistan" },
];

const cities = [
  { value: "karachi", label: "Karachi" },
  { value: "lahore", label: "Lahore" },
  { value: "quetta", label: "Quetta" },
];

const FirstComponent = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "Par hoti",
    country: null,
    state: null,
    city: null,
  });

  // Query for fetching data
  const { data, loading, error } = useQuery(GET_STEPPER, {
    variables: {
      productId: "NEERS-PID-1",
      stepperType: "product",
    },
    fetchPolicy: "network-only",
  });

  // Log response data
  useEffect(() => {
    if (data) {
      setCurrentStep(data?.clientGetStepper?.current_step)
      console.log("Stepper Data:", data, "\nCurrent step", data?.clientGetStepper?.current_step);
    }
  }, [data]);


  

  // Initialize form from API response
  useEffect(() => {
    if (data?.clientGetStepper?.steps_info) {
      const stepsInfo = data.clientGetStepper.steps_info || [];
      const applicantInfoData = stepsInfo.find(
        (step) => step.applicantInfo
      )?.applicantInfo;

      if (applicantInfoData) {
        setFormData({
          companyName: applicantInfoData.company_name || "",
          companyAddress: applicantInfoData.company_address || "Par hoti",
          country: countries.find(c => c.value === applicantInfoData.company_country) || null,
          state: states.find(s => s.value === applicantInfoData.company_province) || null,
          city: cities.find(c => c.value === applicantInfoData.company_city) || null,
        });
      }
    }
  }, [data]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border shadow-md">
      <h2 className="text-xl mb-6">1. Applicant Information</h2>
      <h2 className="text-xl mb-6">Company Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            a. Name<span className="text-red-500">*</span>
          </label>
          <input
            value={formData.companyName}
            readOnly
            className="w-full h-9 border rounded p-2 border-gray-300 bg-gray-50"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Country<span className="text-red-500">*</span>
          </label>
          <Select
            options={countries}
            value={formData.country}
            isDisabled
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            State<span className="text-red-500">*</span>
          </label>
          <Select
            options={states}
            value={formData.state}
            isDisabled
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            City<span className="text-red-500">*</span>
          </label>
          <Select
            options={cities}
            value={formData.city}
            isDisabled
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>

      {/* Address */}
      <div className="mt-5">
        <label className="text-sm font-medium">
          b. Address<span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.companyAddress}
          readOnly
          className="w-full h-24 border rounded p-2 border-gray-300 bg-gray-50"
        />
      </div>
    </div>
  );
};

export default FirstComponent;








// "use client";
// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import { useQuery, useMutation } from "@apollo/client";
// import { GET_STEPPER, UPDATE_STEPPER } from "../../../src/apollo/queries";

// // Define dropdown options outside the component
// const countries = [
//   { value: "pakistan", label: "Pakistan" },
//   { value: "usa", label: "USA" },
//   { value: "uk", label: "UK" },
// ];

// const states = [
//   { value: "sindh", label: "Sindh" },
//   { value: "punjab", label: "Punjab" },
//   { value: "balochistan", label: "Balochistan" },
// ];

// const cities = [
//   { value: "karachi", label: "Karachi" },
//   { value: "lahore", label: "Lahore" },
//   { value: "quetta", label: "Quetta" },
// ];

// const FirstComponent = () => {
//   // State initialization with proper null checks
//   const [companyName, setCompanyName] = useState("");
//   const [companyAddress, setCompanyAddress] = useState("Par hoti");
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [errors, setErrors] = useState({});

//   // GraphQL Operations with error handling
//   const { data, loading, error } = useQuery(GET_STEPPER, {
//     variables: {
//       productId: "NEERS-PID-1",
//       stepperType: "product"
//     }
//   });

//   const [updateStepper] = useMutation(UPDATE_STEPPER);

//   // Safe data initialization with optional chaining
//   useEffect(() => {
//     if (data?.clientGetStepper?.steps_info) {
//       const stepsInfo = data.clientGetStepper.steps_info || [];
//       const applicantStep = stepsInfo.find(step => step?.applicantInfo);

//       if (applicantStep?.applicantInfo) {
//         const applicantInfo = applicantStep.applicantInfo;
        
//         // Set form fields with fallback values
//         setCompanyName(applicantInfo.company_name || "");
//         setCompanyAddress(applicantInfo.company_address || "Par hoti");

//         // Safe dropdown initialization
//         setSelectedCountry(
//           applicantInfo.company_country 
//             ? countries.find(c => c.value === applicantInfo.company_country) 
//             : null
//         );

//         setSelectedState(
//           applicantInfo.company_province 
//             ? states.find(s => s.value === applicantInfo.company_province) 
//             : null
//         );

//         setSelectedCity(
//           applicantInfo.company_city 
//             ? cities.find(c => c.value === applicantInfo.company_city) 
//             : null
//         );
//       }
//     }
//   }, [data]);

//   // Enhanced validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!companyName.trim()) newErrors.companyName = "Company name required";
//     if (!selectedCountry) newErrors.country = "Country selection required";
//     if (!selectedState) newErrors.state = "State selection required";
//     if (!selectedCity) newErrors.city = "City selection required";
//     if (!companyAddress.trim()) newErrors.address = "Address required";
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Submission handler with error feedback
//   const handleSubmit = async () => {
//     if (!validateForm()) return;

//     try {
//       const stepsInfo = {
//         applicantInfo: {
//           company_name: companyName,
//           company_address: companyAddress,
//           company_country: selectedCountry?.value,
//           company_province: selectedState?.value,
//           company_city: selectedCity?.value
//         }
//       };

//       await updateStepper({
//         variables: {
//           productId: "NEERS-PID-1",
//           action: "update",
//           currentStep: data?.clientGetStepper?.current_step || "1",
//           stepperType: "product",
//           stepsInfo: [stepsInfo]
//         }
//       });
//     } catch (err) {
//       console.error("Update failed:", err);
//       setErrors({ submit: err.message });
//     }
//   };

//   if (loading) return <div className="p-4 text-center">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

//   return (
//     <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
//       <h2 className="text-xl mb-6">1. Applicant Information</h2>
//       <h2 className="text-xl mb-6">Company Information</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
//         {/* Company Name Input */}
//         <div className="flex flex-col">
//           <label htmlFor="companyName" className="text-sm font-medium">
//             a. Name<span className="text-red-500">*</span>
//           </label>
//           <input
//             id="companyName"
//             placeholder="Name..."
//             className={`text-black w-full h-9 border rounded p-2 ${
//               errors.companyName ? "border-red-500" : "border-gray-300"
//             } focus:outline-none focus:ring-2 focus:ring-red-500`}
//             type="text"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//           />
//           {errors.companyName && (
//             <div className="text-sm text-red-500">{errors.companyName}</div>
//           )}
//         </div>

//         {/* Country Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium">
//             Country<span className="text-red-500">*</span>
//           </label>
//           <Select
//             options={countries}
//             value={selectedCountry}
//             onChange={(selected) => {
//               setSelectedCountry(selected);
//               setSelectedState(null);
//               setSelectedCity(null);
//               setErrors(prev => ({ ...prev, country: "" }));
//             }}
//             placeholder="Select Country"
//             className="mt-1"
//           />
//           {errors.country && (
//             <div className="text-sm text-red-500">{errors.country}</div>
//           )}
//         </div>

//         {/* State Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium">
//             State/Province<span className="text-red-500">*</span>
//           </label>
//           <Select
//             options={states}
//             value={selectedState}
//             onChange={(selected) => {
//               setSelectedState(selected);
//               setSelectedCity(null);
//               setErrors(prev => ({ ...prev, state: "" }));
//             }}
//             placeholder="Select State"
//             isDisabled={!selectedCountry}
//             className="mt-1"
//           />
//           {errors.state && (
//             <div className="text-sm text-red-500">{errors.state}</div>
//           )}
//         </div>

//         {/* City Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium">
//             City<span className="text-red-500">*</span>
//           </label>
//           <Select
//             options={cities}
//             value={selectedCity}
//             onChange={(selected) => {
//               setSelectedCity(selected);
//               setErrors(prev => ({ ...prev, city: "" }));
//             }}
//             placeholder="Select City"
//             isDisabled={!selectedState}
//             className="mt-1"
//           />
//           {errors.city && (
//             <div className="text-sm text-red-500">{errors.city}</div>
//           )}
//         </div>
//       </div>

//       {/* Address Textarea */}
//       <div className="mt-5">
//         <label className="text-sm font-medium">
//           b. Company Complete Address<span className="text-red-500">*</span>
//         </label>
//         <textarea
//           placeholder="Company address..."
//           className={`mt-2 w-full h-24 border rounded p-2 text-black ${
//             errors.address ? "border-red-500" : "border-gray-300"
//           } focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none`}
//           value={companyAddress}
//           onChange={(e) => setCompanyAddress(e.target.value)}
//         />
//         {errors.address && (
//           <div className="text-sm text-red-500">{errors.address}</div>
//         )}
//       </div>

//       {/* Submit Button */}
//       <div className="mt-6">
//         <button
//           onClick={handleSubmit}
//           className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save and Continue"}
//         </button>
//         {errors.submit && (
//           <div className="mt-2 text-sm text-red-500">{errors.submit}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FirstComponent;