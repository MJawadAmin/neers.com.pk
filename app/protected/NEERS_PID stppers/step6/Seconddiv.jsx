import { useState } from "react";

const Seconddiv = () => {
  const [payOrderNo, setPayOrderNo] = useState("123");
  const [date, setDate] = useState("");



  return (
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
      <h3 className="text-lg mb-4">
        7. Specify the information about deposited non-refundable Fees payable to NEECA*
      </h3>


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

export default Seconddiv;