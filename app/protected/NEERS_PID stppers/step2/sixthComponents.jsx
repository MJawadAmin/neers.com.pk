import React from 'react'

const SixthComponents = () => {
  return (
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
    <div className="flex flex-col space-y-2">
   <h1> 4. Whether you have sales/distributors/retailers network for the specific product? (Tick the applicable box)</h1>
{/* Throughout Pakistan */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Throughout Pakistan"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Throughout Pakistan</span>
</label>

{/* Azad Jammu & Kashmir */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Azad Jammu & Kashmir"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Azad Jammu & Kashmir</span>
</label>

{/* Balochistan */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Balochistan"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Balochistan</span>
</label>

{/* Gilgit Baltistan */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Gilgit Baltistan"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Gilgit Baltistan</span>
</label>

{/* Khyber Pakhtunkhwa */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Khyber Pakhtunkhwa"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Khyber Pakhtunkhwa</span>
</label>

{/* Punjab */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Punjab"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Punjab</span>
</label>

{/* Sindh */}
<label className="flex items-center space-x-2">
<input
  type="checkbox"
  name="regions"
  value="Sindh"
  className="w-5 h-5 accent-orange-500"
/>
<span className="text-gray-800">Sindh</span>
</label>
</div>
  </div>
  )
}

export default SixthComponents
