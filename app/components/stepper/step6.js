export default function Step6({ prev }) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Step 6</h2>
        <p>Registration complete!</p>
        <button onClick={prev} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
      </div>
    );
  }
  