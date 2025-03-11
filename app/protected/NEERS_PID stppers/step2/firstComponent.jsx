import React, { useState } from "react";
import Select from "react-select"; // Ensure react-select is installed

const FirstComponent = () => {
  // State variables
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("Par hoti");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [errors, setErrors] = useState({
    companyName: "",
    country: "",
    state: "",
    city: "",
    companyAddress: "",
  });

  // Dummy data for dropdowns (replace with actual data)
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

  return (
    <div>
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            name="companyName"
          />
          {errors.companyName && (
            <div className="text-sm text-red-500">{errors.companyName}</div>
          )}
        </div>

        {/* Country Dropdown */}
        <div className="w-full">
          <label htmlFor="country" className="text-sm font-medium">
            Country<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => {
                setSelectedCountry(selectedOption);
                setSelectedState(null); // Reset state when country changes
                setSelectedCity(null); // Reset city when country changes
                setErrors((prev) => ({ ...prev, country: "" })); // Clear country error
              }}
              placeholder="Select Country"
              className="mt-2"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #d1d5db", // Match border color
                  borderRadius: "0.375rem", // Match rounded corners
                  height: "36px", // Match height
                  boxShadow: "none", // Remove default box shadow
                  "&:hover": {
                    borderColor: "#d1d5db", // Match hover border color
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#9ca3af", // Match placeholder color
                }),
              }}
            />
          </div>
          {errors.country && (
            <div className="text-sm text-red-500">{errors.country}</div>
          )}
        </div>

        {/* State Dropdown */}
        <div className="w-full">
          <label htmlFor="state" className="text-sm font-medium">
            State/Province<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Select
              options={states}
              value={selectedState}
              onChange={(selectedOption) => {
                setSelectedState(selectedOption);
                setSelectedCity(null); // Reset city when state changes
                setErrors((prev) => ({ ...prev, state: "" })); // Clear state error
              }}
              placeholder="Select State"
              isDisabled={!selectedCountry} // Disable if no country is selected
              className="mt-2"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #d1d5db", // Match border color
                  borderRadius: "0.375rem", // Match rounded corners
                  height: "36px", // Match height
                  boxShadow: "none", // Remove default box shadow
                  "&:hover": {
                    borderColor: "#d1d5db", // Match hover border color
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#9ca3af", // Match placeholder color
                }),
              }}
            />
          </div>
          {errors.state && (
            <div className="text-sm text-red-500">{errors.state}</div>
          )}
        </div>

        {/* City Dropdown */}
        <div className="w-full">
          <label htmlFor="city" className="text-sm font-medium">
            City<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Select
              options={cities}
              value={selectedCity}
              onChange={(selectedOption) => {
                setSelectedCity(selectedOption);
                setErrors((prev) => ({ ...prev, city: "" })); // Clear city error
              }}
              placeholder="Select City"
              isDisabled={!selectedState} // Disable if no state is selected
              className="mt-2"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #d1d5db", // Match border color
                  borderRadius: "0.375rem", // Match rounded corners
                  height: "36px", // Match height
                  boxShadow: "none", // Remove default box shadow
                  "&:hover": {
                    borderColor: "#d1d5db", // Match hover border color
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#9ca3af", // Match placeholder color
                }),
              }}
            />
          </div>
          {errors.city && (
            <div className="text-sm text-red-500">{errors.city}</div>
          )}
        </div>
      </div>

      {/* Company Address Textarea */}
      <div className="w-full mt-5">
        <label htmlFor="companyComments" className="text-sm font-medium">
          b. Company Complete Address<span className="text-red-500">*</span>
        </label>
        <textarea
          name="comments"
          id="companyComments"
          placeholder="company address..."
          className="mt-2 w-full h-24 border border-zinc-300 rounded p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          spellCheck="false"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        ></textarea>
        {errors.companyAddress && (
          <div className="text-sm text-red-500">{errors.companyAddress}</div>
        )}
      </div>
    </div>
  );
};

export default FirstComponent;