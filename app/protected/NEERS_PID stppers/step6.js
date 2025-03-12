import { useState } from "react";
import Firstdiv from "./step6/Firstdiv";
import Seconddiv from "./step6/Seconddiv"
export default function Step6({ prev }) {
  

  return (
    <div className="w-full  bg-white p-10 space-y-6">
    {/*Main div 1 */}
    <Firstdiv/>
    <Seconddiv/>
   

      <button onClick={prev} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
        Previous
      </button>
    </div>
  );
}
