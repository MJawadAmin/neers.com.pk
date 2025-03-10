export default function Step3({next,  prev }) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Step 3</h2>
        <p>Still Going on !</p>
        <div className="flex gap-4 mt-4">
          <button onClick={prev} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
          <button onClick={next} className="bg-orange-600 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    );
  }
  