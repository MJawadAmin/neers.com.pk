import React, { useState } from "react";
import Select from "react-select"; // Ensure react-select is installed

const ForthComponent = () => {
  // State variables
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("Par hoti");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false); // Added missing state
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
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
      {/* Label for the question */}
      <label htmlFor="companyName" className="text-sm font-medium">
        2. Whether the firm/factory is registered with the local chamber of commerce and industry? If YES then fill the following;
        <span className="text-red-500">*</span>
      </label>

      {/* Radio buttons for Yes/No */}
      <div className="flex space-x-4 mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="myRadio"
            className="custom-radio"
            checked={isRegistered}
            onChange={() => setIsRegistered(true)}
          />
          <span className="text-gray-800 font-medium">Yes</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="myRadio"
            className="custom-radio"
            checked={!isRegistered}
            onChange={() => setIsRegistered(false)}
          />
          <span className="text-gray-800 font-medium">No</span>
        </label>
      </div>

      {/* Conditionally render input fields if "Yes" is selected */}
      {isRegistered && (
        <div className="mt-4 gap-4 w-full flex">
          {/* First Input Field */}
          <div className="w-1/3">
            <label htmlFor="registrationNumber" className="text-sm font-medium">
              Registration Number #<span className="text-red-500">*</span>
            </label>
            <input
              id="registrationNumber"
              placeholder="Enter registration number..."
              className="mt-2 text-black w-full h-10 border rounded p-2 border-red-500"
              type="text"
            />
          </div>

          {/* Second Input Field */}
          <div className="w-1/3">
            <label htmlFor="chamberName" className="text-sm font-medium">
              Year<span className="text-red-500">*</span>
            </label>
            <input
              id="chamberName"
              placeholder="Enter chamber name..."
              className="mt-2 text-black w-full h-10 border rounded p-2 border-red-500"
              type="number"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ForthComponent;