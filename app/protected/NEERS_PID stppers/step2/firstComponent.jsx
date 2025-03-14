"use client";
import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import { useQuery, useMutation } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { GET_STEPPER, UPDATE_STEPPER } from "../../../src/apollo/queries";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    selectedCountry: null,
    selectedState: null,
    selectedCity: null,
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apolloClient = useMemo(() => {
    const httpLink = createHttpLink({
      uri: 'https://server.neers.com.pk/graphql',
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",
      }
    }));

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/signin");
    }
  }, [router]);

  const { data, loading } = useQuery(GET_STEPPER, {
    variables: {
      productId: "NEERS-PID-1",
      stepperType: "product",
    },
    client: apolloClient,
    skip: !localStorage.getItem("token"),
    onError: (error) => {
      if (error.graphQLErrors?.[0]?.extensions?.code === "UNAUTHENTICATED") {
        localStorage.removeItem("token");
        router.push("/signin");
      }
    }
  });

  const [updateStepper] = useMutation(UPDATE_STEPPER, {
    client: apolloClient,
    onError: (error) => {
      if (error.graphQLErrors?.[0]?.extensions?.code === "UNAUTHENTICATED") {
        localStorage.removeItem("token");
        router.push("/signin");
      }
    }
  });

  useEffect(() => {
    if (data?.clientGetStepper?.steps_info) {
      const { company_name, company_address, company_country, company_province, company_city } = data.clientGetStepper.steps_info.applicantInfo;
      setFormData({
        companyName: company_name || "",
        companyAddress: company_address || "",
        selectedCountry: countries.find(c => c.value === company_country),
        selectedState: states.find(s => s.value === company_province),
        selectedCity: cities.find(c => c.value === company_city)
      });
    }
  }, [data]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.selectedCountry) newErrors.country = "Country is required";
    if (!formData.selectedState) newErrors.state = "State is required";
    if (!formData.selectedCity) newErrors.city = "City is required";
    if (!formData.companyAddress.trim()) newErrors.companyAddress = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError("");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await updateStepper({
        variables: {
          action: "update",
          currentStep: "1",
          stepperType: "product",
          stepsInfo: [{
            applicantInfo: {
              company_name: formData.companyName,
              company_address: formData.companyAddress,
              company_country: formData.selectedCountry.value,
              company_province: formData.selectedState.value,
              company_city: formData.selectedCity.value,
            }
          }],
          productId: "NEERS-PID-1",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="w-full p-10 bg-white rounded-lg border border-gray-300 shadow-md shadow-gray-400">
      <h2 className="text-xl mb-6">1. Applicant Information</h2>
      <h2 className="text-xl mb-6">Company Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        <div className="flex flex-col">
          <label className="text-sm font-medium">
            a. Name<span className="text-red-500">*</span>
          </label>
          <input
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className={`w-full h-9 border rounded p-2 ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-red-500`}
            placeholder="Name..."
          />
          {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName}</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">
            Country<span className="text-red-500">*</span>
          </label>
          <Select
            options={countries}
            value={formData.selectedCountry}
            onChange={(option) => {
              handleInputChange('selectedCountry', option);
              handleInputChange('selectedState', null);
              handleInputChange('selectedCity', null);
            }}
            placeholder="Select Country"
            classNamePrefix="react-select"
          />
          {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">
            State/Province<span className="text-red-500">*</span>
          </label>
          <Select
            options={states}
            value={formData.selectedState}
            onChange={(option) => {
              handleInputChange('selectedState', option);
              handleInputChange('selectedCity', null);
            }}
            isDisabled={!formData.selectedCountry}
            placeholder="Select State"
            classNamePrefix="react-select"
          />
          {errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">
            City<span className="text-red-500">*</span>
          </label>
          <Select
            options={cities}
            value={formData.selectedCity}
            onChange={(option) => handleInputChange('selectedCity', option)}
            isDisabled={!formData.selectedState}
            placeholder="Select City"
            classNamePrefix="react-select"
          />
          {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium">
          b. Company Complete Address<span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.companyAddress}
          onChange={(e) => handleInputChange('companyAddress', e.target.value)}
          className={`mt-2 w-full h-24 border rounded p-2 ${errors.companyAddress ? 'border-red-500' : 'border-zinc-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none`}
          placeholder="Company address..."
        />
        {errors.companyAddress && <span className="text-red-500 text-sm">{errors.companyAddress}</span>}
      </div>

      <div className="mt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Saving...' : 'Save and Continue'}
        </button>
      </div>
    </form>
  );
};

export default FirstComponent;