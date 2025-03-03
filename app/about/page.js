import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative">
    <div className="absolute right-20  top-28 w-[200px] h-[50px]"> {/* Adjust width & height as needed */}
      <Image src="/bulb.webp" alt="Logo" width={200} height={50} className="object-contain" />
    </div>
  
      <h1 className='text-4xl p-20 text-center text-[rgb(55,65,81)]'>About NEECA</h1>
      <p className='w-[70vw] items-center ml-32 text-lg'>The National Energy Efficiency & Conservation Authority (NEECA) is an attached Department of the Ministry of Energy (Power Division) and serves as the focal federal agency to capture substantial economic and environmental benefits through energy conservation and efficiency across all sectors of the economy.
      <br></br> <br></br>
Delivering the transition to energy-efficient lighting in residential, commercial, industrial, and outdoor sectors in Pakistan.
<br></br>
- Project funded by GEF/UN Environment</p>

<div className="flex justify-center p-5">
  <h1 className="text-[rgb(247,100,0)] bg-[rgb(255,239,233)] p-6 py-2 rounded-full text-center">
    Objectives
  </h1>
</div>

<p className='w-[70vw] items-center ml-32 text-lg'>The objective of the project is to mitigate the effects of global climate change by reducing GHG emissions through the use of high-efficiency lighting products. This objective will be achieved through the implementation of four project components.
    </p>
    <ul className='w-[70vw] items-center ml-32 text-lg p-10'>
    <li className="flex items-center gap-2">
      <FaArrowRight className="text-orange-500 text-2xl" /> 
      Developing a National Efficient Lighting Strategy.
    </li>

      
      <li className="flex items-center gap-2">    <FaArrowRight className="text-orange-500 text-2xl" /> Strengthening monitoring, verification, and enforcement (MVE) capacities in Pakistan to ensure an effective transition to efficient lighting. </li>
      
      <li className="flex items-center gap-2">    <FaArrowRight className="text-orange-500 text-2xl" />  Design for a 'Lighting Funding Window' in Pakistan's Revolving Loan Fund (RLF).</li>
      <li className="flex items-center gap-2">    <FaArrowRight className="text-orange-500 text-2xl" /> Accelerating the use of light-emitting diodes (LEDs) and controls.</li>
    </ul>
    </div>
  )
}

export default About
