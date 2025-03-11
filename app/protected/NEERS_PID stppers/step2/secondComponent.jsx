import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import Select from "react-select"; // Ensure react-select is installed

// Dynamically import PhoneInput with SSR disabled
const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

const FactoryInformation = () => {
  // State variables
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    companyName: "",
    country: "",
    state: "",
    city: "",
    companyAddress: "",
    phone1: "",
    phone2: "",
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
      <h2 className="text-xl mb-6">Factory Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
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

      {/* Factory Address Textarea */}
      <div className="w-full mt-5">
        <label htmlFor="companyComments" className="text-sm font-medium">
          c. Factory/Firm Address<span className="text-red-500">*</span>
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

      {/* Phone Numbers */}
      <h1 htmlFor="companyComments" className="text-sm font-medium mt-5">
        d. Telephone<span className="text-red-500">*</span>
      </h1>

      <div className="flex flex-wrap gap-4">
        {/* First PhoneInput */}
        <div className="mt-5 w-1/3 flex-none">
          <label htmlFor="phone1" className="text-sm font-medium">
            Factory<span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country="PK" // Default country
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: "phone1",
              required: true,
            }}
            inputStyle={{
              width: "100%",
              height: "36px",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              paddingLeft: "48px", // Adjust for flag dropdown
            }}
            containerStyle={{
              marginTop: "0.5rem",
            }}
          />
          {errors.phone1 && (
            <div className="text-sm text-red-500">{errors.phone1}</div>
          )}
        </div>

        {/* Second PhoneInput */}
        <div className="mt-5 w-1/3 flex-none">
          <label htmlFor="phone2" className="text-sm font-medium">
            Office<span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country="PK" // Default country
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: "phone2",
              required: true,
            }}
            inputStyle={{
              width: "100%",
              height: "36px",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              paddingLeft: "48px", // Adjust for flag dropdown
            }}
            containerStyle={{
              marginTop: "0.5rem",
            }}
          />
          {errors.phone2 && (
            <div className="text-sm text-red-500">{errors.phone2}</div>
          )}
        </div>

        {/* Name of Managing Director */}
        <div className="w-1/3 mt-5 flex-none">
          <label htmlFor="companyName" className="text-sm font-medium">
            e. Name of Managing Director<span className="text-red-500">*</span>
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
      </div>
    </div>
  );
};

export default FactoryInformation;