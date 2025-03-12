import { useState } from "react";
import { getNames } from "country-list";
import CountryFlag from "country-flag-icons/react/3x2";

export default function Step5({ next, prev }) {
  // State for "The test is uploaded from" radio buttons
  const [uploadedFrom, setUploadedFrom] = useState("NEECA Enlisted Lab");

  // State for "Lab Location" radio buttons
  const [labLocation, setLabLocation] = useState("Lab in Pakistan");

  // State for selected country and city
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Get list of countries
  const countries = getNames();

  // Dummy cities data (replace with actual API or data)
  const cities = {
    Pakistan: ["Karachi", "Lahore", "Islamabad"],
    USA: ["New York", "Los Angeles", "Chicago"],
    UK: ["London", "Manchester", "Birmingham"],
  };

  return (
    <div className="w-full rounded-lg bg-white p-10 space-y-6">
      <h2 className="text-xl mb-6 text-center">
        9. The following documents should be attached with the application
      </h2>

      {/* Main div 1 */}
      <div className="w-full p-10 bg-white rounded-lg flex justify-center gap-2">
        <div className="">
          <h1 className="text-xl font-semibold text-center">a. Company Brochure</h1>
          <p className="text-center">Pdf, .Doc Only (Maximum 100 MB)</p>
          {/* File Upload Section */}
          <div className="flex justify-center items-center cursor-pointer flex-col border-gray-300 border-1 w-[500px] h-[300px]">
            <input accept=".pdf,.doc,.docx" className="hidden" type="file" />
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="inbox"
              width="50px"
              height="50px"
              fill="#f76300"
              aria-hidden="true"
            >
              <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
            </svg>
            <span className="mt-2 text-sm">Drag & Drop file here</span>
            <h1 className="font-semibold underline">Browse File</h1>
          </div>
        </div>
      </div>

      {/* Test Upload Section */}
      <div className="p-6 bg-white rounded-lg max-w-md">
        <p className="text-gray-700 font-medium">The test is uploaded from:</p>
        <div className="flex items-center gap-4 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="uploadedFrom"
              className="hidden peer"
              checked={uploadedFrom === "PNAC Accredited Lab"}
              onChange={() => setUploadedFrom("PNAC Accredited Lab")}
            />
            <div className="w-5 h-5 border border-gray-400 rounded peer-checked:bg-orange-500 transition-colors"></div>
            <span className="text-gray-600">PNAC Accredited Lab</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="uploadedFrom"
              className="hidden peer"
              checked={uploadedFrom === "NEECA Enlisted Lab"}
              onChange={() => setUploadedFrom("NEECA Enlisted Lab")}
            />
            <div className="w-5 h-5 border border-gray-400 rounded peer-checked:bg-orange-500 transition-colors"></div>
            <span className="text-gray-600">NEECA Enlisted Lab</span>
          </label>
        </div>

        {/* Conditionally Render Lab Location and Lab Category Sections */}
        {uploadedFrom === "NEECA Enlisted Lab" && (
          <>
            {/* Lab Location Section */}
            <div className="mb-4 mt-4">
              <p className="text-gray-700 font-medium">Lab Location:</p>
              <div className="flex items-center gap-4 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="labLocation"
                    className="hidden peer"
                    checked={labLocation === "Lab in Pakistan"}
                    onChange={() => setLabLocation("Lab in Pakistan")}
                  />
                  <div className="w-5 h-5 border border-gray-400 rounded peer-checked:bg-orange-500 transition-colors"></div>
                  <span className="text-gray-600">Lab in Pakistan</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="labLocation"
                    className="hidden peer"
                    checked={labLocation === "Foreign Labs"}
                    onChange={() => setLabLocation("Foreign Labs")}
                  />
                  <div className="w-5 h-5 border border-gray-400 rounded peer-checked:bg-orange-500 transition-colors"></div>
                  <span className="text-gray-600">Foreign Labs</span>
                </label>
              </div>
            </div>

            {/* Conditionally Render Lab Category or Country/City Selects */}
            {labLocation === "Lab in Pakistan" ? (
              <>
                {/* Lab Category Section */}
                <div className="mb-4">
                  <p className="text-gray-700 font-medium">Lab Category:</p>
                  <div className="flex items-center gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" className="hidden peer" />
                      <div className="w-5 h-5 border border-gray-400 rounded peer-checked:bg-orange-500 transition-colors"></div>
                      <span className="text-gray-600">Basic Category Lab</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" className="hidden peer" defaultChecked />
                      <div className="w-5 h-5 border border-gray-400 rounded peer-checked:bg-orange-500 transition-colors"></div>
                      <span className="text-gray-600">Professional Category Lab</span>
                    </label>
                  </div>
                </div>

                {/* Select Option */}
                <div className="mb-4">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Select Lab</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                {/* Country and City Selects for Foreign Labs */}
                <div className="mb-4">
                  <label className="text-gray-700 font-medium">Country:</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCountry && (
                  <div className="mb-4">
                    <label className="text-gray-700 font-medium">City:</label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mt-2"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      <option value="">Select City</option>
                      {cities[selectedCountry]?.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Show only the dropdown if "PNAC Accredited Lab" is selected */}
        {uploadedFrom === "PNAC Accredited Lab" && (
          <div className="mb-4 mt-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select Lab</option>
            </select>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4 justify-center">
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