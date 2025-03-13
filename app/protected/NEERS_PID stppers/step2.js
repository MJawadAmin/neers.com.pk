import { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FirstComponent from "./step2/FirstComponent";
import ThirdComponent from "./step2/ThirdComponent";
import SecondComponent from "./step2/SecondComponent";
import ForthComponent from "./step2/ForthComponent";
import FifthComponent from "./step2/FifthComponent";
import SixthComponents from "./step2/SixthComponents";

export default function Step2({ next, prev, save }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({});
  const [companyAddress, setCompanyAddress] = useState("Par hoti");
 
 const [phone, setPhone] = useState("");
 const [isRegistered, setIsRegistered]=useState(false)
 const [isRegistered1, setIsRegistered1]=useState(false)
const [selectedRegions, setSelectedRegions] = useState([]);
  // State to track validation error
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
    }}
 


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
      next(); // Proceed to the next step if the form is valid
    }
  };
   // Handle phone number change
   const handlePhoneChange = (value) => {
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: "" })); // Clear phone error
  };

  return (
    <div className="w-full border-2 bg-white p-10 space-y-6">
      {/*Main div 1 */}
      <FirstComponent/>
      {/*Main div 2 */}
      <SecondComponent/>
      {/*Main div 3 */}
     <ThirdComponent/>
{/*Main div 4 */}
<ForthComponent/>
{/*Main div 5 */}
<FifthComponent/>
        {/*Main div 6 */}
      <SixthComponents/>
      
        {/* Buttons */}
        <div className="flex gap-4 mt-4 justify-center">
          <button onClick={prev} className="bg-gray-500 text-white px-4 py-2 rounded">
            Previous
          </button>
          <button onClick={save} className="bg-gray-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button
            onClick={handleNext}
            className="bg-orange-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
    </div>
  );
}