export default function Step1({ next }) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Step 1</h2>
        <p>Enter your details</p>
        <button onClick={next} className="mt-4 bg-orange-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    );
  }
  