import React, { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SecondComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({});
  const [companyAddress, setCompanyAddress] = useState("Par hoti");
  const [phone, setPhone] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegistered1, setIsRegistered1] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [error, setError] = useState("");

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedRegions([...selectedRegions, value]); // Add region to selectedRegions
    } else {
      setSelectedRegions(selectedRegions.filter((region) => region !== value)); // Remove region from selectedRegions
    }
    setError(""); // Clear error when user interacts with checkboxes
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRegions.length === 0) {
      setError("Please select at least 1 of the Sale Network.");
    } else {
      setError(""); // Clear error if validation passes
      console.log("Selected Regions:", selectedRegions);
      // Proceed with form submission
    }
  };

  // Static data for countries, states, and cities
  const countries = [
    { value: "PK", label: "Pakistan" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
  ];

  const states = [
    { value: "ISL", label: "Islamabad" },
    { value: "TX", label: "Texas" },
    { value: "NY", label: "New York" },
  ];

  const cities = [
    { value: "Islam Abad", label: "Islamabad" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "San Diego", label: "San Diego" },
  ];

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!selectedCountry) {
      newErrors.country = "Country is required";
    }
    if (!selectedState) {
      newErrors.state = "State/Province is required";
    }
    if (!selectedCity) {
      newErrors.city = "City is required";
    }
    if (!companyAddress.trim()) {
      newErrors.companyAddress = "Company address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle Next button click
  const handleNext = () => {
    if (validateForm()) {
      // Proceed to the next step if the form is valid
      console.log("Form is valid, proceed to the next step");
    }
  };

  // Handle phone number change
  const handlePhoneChange = (value) => {
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: "" })); // Clear phone error
  };

  return (
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        
    <h2 className="text-xl mb-6">Factory Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      {/* Name Field */}

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
  {/*Phone Numbers  */}
  <h1 htmlFor="companyComments" className="text-sm font-medium">
      d. Telephone<span className="text-red-500">*</span>
      </h1>

  <div className="flex flex-wrap gap-4">
{/* First PhoneInput */}

<div className=" mt-5 w-1/3 flex-none">

<label htmlFor="phone1" className="text-sm font-medium">
  Factory<span className="text-red-500">*</span>
</label>
<PhoneInput
  country="pk" // Default country
  value={phone} // Use a separate state for each phone input
  onChange={(value) => setPhone(value)}
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
<div className=" mt-5 w-1/3 flex-none">

<label htmlFor="phone2" className="text-sm font-medium">
  Office<span className="text-red-500">*</span>
</label>
<PhoneInput
  country="pk" // Default country
  value={phone} // Use a separate state for each phone input
  onChange={(value) => setPhone(value)}
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

{/* Third PhoneInput */}
<div className="w-1/3 mt-5  flex-none">
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

export default SecondComponent;