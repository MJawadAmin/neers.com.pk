export default function Step1({ next }) {
    return (
      <div className="relative w-full"> {/* Changed w-screen to w-full */}
        {/* Header Section */}
        <div className="bg-gray-200 py-4 px-4 w-full">
          <h2 className="text-2xl font-semibold mb-4 px-4">
            *
            6. Read and understand the National Energy Efficiency and Conservation
            (Pakistan Energy Labels for Fans) regulations, 2023. Do you agree with
            the requirement, criteria, and conditions for grant of Pakistan Energy
            label given in these regulations?
          </h2>
        </div>
  
        {/* Content Section */}
        <div className="w-full border-2 mt-16">
          <div className="w-full bg-gray-200 p-4">
            <p className="w-full">Enter your details</p>
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