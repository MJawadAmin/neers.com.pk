import { useState } from "react"; // Import useState for managing state

export default function Step4({ next, prev }) {
  // State to store the uploaded image
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="w-full rounded-lg bg-white p-10 space-y-6 ">
        <h2 className="text-xl mb-6 text-center">9. The following documents should be attached with the application</h2>
    
    {/* Main div 1 */}
    <div className="w-full  p-10 bg-white rounded-lg border-gray-300 border-1 flex justify-center gap-2">
    <div className="">
  <h1 className="text-xl font-semibold text-center">a. Company Brochure</h1>
  <p className="text-center">Pdf, .Doc Only (Maximum 100 MB)</p>
      {/* Image Upload Section */}
      <div className="flex  justify-center items-center cursor-pointer flex-col border w-[300px] h-[150px]">
       
  <input accept=".pdf,.doc,.docx" className="hidden" type="file" />
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    data-icon="inbox"
    width="40px" // Adjusted width
    height="40px" // Adjusted height
    fill="#f76300"
    aria-hidden="true"
  >
    <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
  </svg>
  <span className="mt-2 text-sm">Drag and drop, or browse</span> {/* Added margin-top and smaller font size */}
</div>
</div>
<div className="">
  <h1 className="text-xl font-semibold">b. Product Brochure</h1>
  <p className="text-center">Pdf, .Doc Only (Maximum 100 MB)</p>
      {/* Image Upload Section */}
      <div className="flex  justify-center items-center cursor-pointer flex-col border w-[300px] h-[150px]">
       
  <input accept=".pdf,.doc,.docx" className="hidden" type="file" />
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    data-icon="inbox"
    width="40px" // Adjusted width
    height="40px" // Adjusted height
    fill="#f76300"
    aria-hidden="true"
  >
    <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
  </svg>
  <span className="mt-2 text-sm">Drag and drop, or browse</span> {/* Added margin-top and smaller font size */}
</div>
</div>
</div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4 justify-center">
        <button
          onClick={prev}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
  
    </div>
  );
}