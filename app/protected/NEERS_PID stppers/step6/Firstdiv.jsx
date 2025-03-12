import { useState } from "react";

const Firstdiv = () => {
  const [payOrderNo, setPayOrderNo] = useState("123");
  const [date, setDate] = useState("");
  const [showAlert, setShowalert] = useState(false);

  // Function to handle PDF download
  const handleDownloadPdf = () => {
    // Path to the static PDF file in the public folder
    const pdfUrl = "/voucher.pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "voucher.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowalert(true); // Corrected this line
    setTimeout(() => setShowalert(false), 3000);
  };

  return (
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>Downloaded!</span>
        </div>
      )}
      <h3 className="text-lg mb-4">
        7. Specify the information about deposited non-refundable Fees payable to NEECA*
      </h3>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
         
          className="w-5 h-5"
        />
        <label className="text-gray-700">Company Registration Fee</label>
      </div>

   
        <div className="mt-4  rounded-lg  bg-orange-100  flex w-2/3 gap-3">
        <div className="w-[5px] h-24 bg-orange-800 "></div>

         <div> <p className="text-orange-600 font-semibold flex  items-center">
            <span className="mt-2">🎁 </span>
          </p></div>
          <div className="py-4"><p className="text-orange-600 ">
            <p>Special Offer!</p>
            We are offering free registrations! If you are registering before
            <strong> March 19, 2025</strong>, download the free voucher and get registered with us.
          </p></div>
        <div>  <button
            onClick={handleDownloadPdf} // Add onClick handler for PDF download
            className="mt-2 mr-2.5 bg-orange-500 hover:bg-orange-600 text-sm text-white px-2 py-1 rounded text-nowrap"
          >
            ⬇ Download Voucher
          </button></div>
        </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700">Product Price</label>
          <input
            type="text"
            value="PKR 0"
            disabled
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Pay Order No:</label>
          <input
            type="text"
            value={payOrderNo}
            onChange={(e) => setPayOrderNo(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">
          Upload Demand Draft / Pay Order Evidence (PDF, JPG, PNG Only)
        </label>
        <div className="border-dashed border-2 border-gray-300 p-6 mt-2 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500">
          <svg
            className="text-orange-500 w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h16M12 4v16"
            ></path>
          </svg>
          <p className="mt-2 text-gray-500">Drag & Drop file here</p>
          <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Browse File
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firstdiv;