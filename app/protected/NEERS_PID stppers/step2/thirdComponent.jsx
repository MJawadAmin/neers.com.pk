import React, { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-number-input"; // Ensure react-phone-number-input is installed
import "react-phone-number-input/style.css"; // Import the styles for PhoneInput

const ThirdComponent = () => {
  const [companyName, setCompanyName] = useState("");

  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
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
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
      <h2 className="text-xl mb-6">Person Information</h2>

      <div className="flex flex-wrap gap-4">
        {/* First PhoneInput */}
        <div className="mt-7 w-[calc(33.333%-1rem)] flex-none">
          <label htmlFor="contactPersonName" className="text-sm font-medium">
            f. Contact Person Name<span className="text-red-500">*</span>
          </label>
          <input
            id="contactPersonName"
            placeholder="Name..."
            className="text-black w-full h-9  rounded p-2 border border-gray-500 focus:outline-none "
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            name="contactPersonName"
          />
          {errors.companyName && (
            <div className="text-sm text-red-500">{errors.companyName}</div>
          )}
        </div>

        {/* Second PhoneInput */}
        <div className="mt-5 w-[calc(33.333%-1rem)] flex-none">
          <label htmlFor="phone1" className="text-sm font-medium">
            Factory<span className="text-red-500">*</span>
          </label>
          <PhoneInput
            international
            defaultCountry="PK"
            value={phone1}
            onChange={setPhone1}
            id="phone1"
            className="phone-input w-full h-9 border rounded p-2 border-gray-500 focus:outline-none"
          />
          {errors.phone1 && (
            <div className="text-sm text-red-500">{errors.phone1}</div>
          )}
        </div>

        {/* Third PhoneInput */}
        <div className="mt-5 w-[calc(33.333%-1rem)] flex-none">
          <label htmlFor="phone2" className="text-sm font-medium">
            Office<span className="text-red-500">*</span>
          </label>
          <PhoneInput
            international
            defaultCountry="PK"
            value={phone2}
            onChange={setPhone2}
            id="phone2"
            className="phone-input w-full h-9 border rounded p-2 border-gray-500 focus:outline-none"
          />
          {errors.phone2 && (
            <div className="text-sm text-red-500">{errors.phone2}</div>
          )}
        </div>

        {/* Fourth Input (Name of Managing Director) */}
        <div className="mt-7 w-1/3">
          <label htmlFor="managingDirectorName" className="text-sm font-medium">
            e. Name of Managing Director<span className="text-red-500">*</span>
          </label>
          <input
            id="managingDirectorName"
            placeholder="Name..."
            className="w-full h-9 border rounded p-2 border-gray-500 focus:outline-none "
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            name="managingDirectorName"
          />
          {errors.companyName && (
            <div className="text-sm text-red-500">{errors.companyName}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;