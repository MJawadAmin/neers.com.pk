import React from 'react' 
import { FaChartBar, FaRegClock, FaCheckSquare, FaPencilAlt } from "react-icons/fa";
import { BiRegistered } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Tips = () => {
  const features = [
    {
      icon: <FaChartBar className="text-blue-400 text-3xl" />,
      text: "This website (portal) can be used as a: Visitor, Registered Manufacturer, or Supplier of MEPS-compliant LED Lights.",
    },
    {
      icon: <BiRegistered className="text-orange-400 text-3xl" />,
      text: "Create a registration with NEECA, which integrates your product's registration, so adding a label and product details are automated and fast.",
    },
    {
      icon: <FaRegClock className="text-purple-400 text-3xl" />,
      text: "Submit electronically; your application, along with the fee, is submitted directly to the state agency’s PRO account.",
    },
    {
      icon: <FaCheckSquare className="text-green-400 text-3xl" />,
      text: "Receive direct approval when all conditions are met. You will receive an electronic certificate to start selling immediately.",
    },
    {
      icon: <FaPencilAlt className="text-white text-3xl" />,
      text: "Easily edit. If the application is denied or requires additional information, you can correct and re-submit electronically.",
    },
    {
      icon: <MdOutlineLibraryBooks className="text-red-400 text-3xl" />,
      text: "Stay organized. Your dashboard will display all of your approved, pending, and denied registrations.",
    },
  ];

  return (
    
    <section className="bg-[rgb(21,21,29)] text-white py-16 px-6">
         <div className='bg-[rgb(21,21,29)] text-white'>
      <div className="flex justify-center p-5">
  <h1 className="text-[rgb(247,100,0)] bg-[rgb(49,33,34)] p-6 py-2 rounded-full text-center">
  Tips
  </h1>
</div>
      <h1 className='text-6xl text-center '>Tips that's may help</h1>
      <div className='bg-[rgb(45,45,52)] text-white'></div>
    </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[rgb(45,45,52)] p-6 rounded-md shadow-lg flex items-start gap-4">
            {feature.icon}
            <p className="text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;

