export default function Step1({ next }) {
    return (
      <div className="relative w-full"> {/* Changed w-screen to w-full */}
        {/* Header Section */}
        <div className="bg-white py-4 px-4 w-full rounded-xl">
        <p className="max-w-[1020px] w-full font-poppins font-normal sm:text-[20px] text-base leading-8 sm:leading-[44px]"> 
          <span className="text-red-500">*</span>
           6. Read and understand the National Energy Efficiency and Conservation (Pakistan Energy Labels for Fans) regulations, 2023.<a target="_blank" rel="noopener noreferrer" className="text-[#F76300] border p-[5px] border-b-[#F76300] border-x-[0px] border-t-[0px]" href="https://neeca.pk/neecagov/regulations/SRO411(I)-2024.pdf">Do you agree with the requirement, criteria, and conditions</a> for grant of Pakistan Energy label given in these regulations?</p>

           <div className="flex space-x-4">
      <label className="flex items-center space-x-2">
        <input type="radio" name="myRadio" className="w-5 h-5 text-blue-500" />
        <span className="text-gray-800 font-medium">Yes</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="radio" name="myRadio" className="w-5 h-5 text-blue-500" />
        <span className="text-gray-800 font-medium">No</span>
      </label>
    </div>
        <div className="w-full  p-4">
            <button
              onClick={next}
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
  
     
      </div>
    );
  }