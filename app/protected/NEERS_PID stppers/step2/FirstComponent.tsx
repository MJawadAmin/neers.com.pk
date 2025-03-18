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
      console.log("Stepper Data:", data);
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