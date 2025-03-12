import { useState } from "react";

export default function Step3({ next, prev }) {
  // State for registration status
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="w-full rounded-lg bg-white p-10 space-y-6">
      {/* Main div 1 */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
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
              value="text"
              name="companyName"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              b. Rating of Product/Appliance:<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="companyName"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              c. Size/Capacity:<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="number"
              name="companyName"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              d. Color (Specify All Available Colors):<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="companyName"
            />
          </div>
        </div>
      </div>

      {/* Second Main div */}
      <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <label htmlFor="companyName" className="text-sm font-medium">
        e. Is the product granted PS Mark by Pakistan Standards & Quality Control Authority (PSQCA)?
          <span className="text-red-500">*</span>
        </label>

        {/* Radio buttons for Yes/No */}
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="registrationStatus"
              className="custom-radio"
              checked={isRegistered}
              onChange={() => setIsRegistered(true)}
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
       {/* 3rd Main div */}
       <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <label htmlFor="companyName" className="text-sm font-medium">
        f. Any other salient feature of the product regarding energy consumption/efficiency:*
          <span className="text-red-500">*</span>
        </label>

        {/* Radio buttons for Yes/No */}
      
 <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              a. Name<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              value="text"
              name="companyName"
            />
          </div>
         
      </div>
 {/* Fourth Main div */}
 <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
        <label htmlFor="companyName" className="text-sm font-medium">
        8. Estimated production per annum of product/appliance of Model for which the application is submitted?
          <span className="text-red-500">*</span>
        </label>

        {/* Radio buttons for Yes/No */}
      
 <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm font-medium">
              a. Name<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              placeholder="Name..."
              className="text-black w-full h-9 border rounded p-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              value="text"
              name="companyName"
            />
          </div>
         
      </div>


      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button onClick={prev} className="bg-gray-500 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={next} className="bg-orange-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}