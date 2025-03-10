import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Product1 from './product1'
import Product2 from './product2'
import Product3 from './prduct3'


const page = () => {
  return (
    <div>   <div className='flex justify-between px-[170px] mt-8'>
   <button className="flex items-center gap-2">
  <Image src="/defaultProfile.webp" height={45} width={45} alt="Profile" />
  <span className='text-[18px]'>Hello jawadamin</span>
</button>

    <div><button className='bg-[#F76300] px-5 py-2 rounded-sm text-white text-[12px]'>Log out </button></div>
</div>
    <div className='w-[81.3%] mx-auto px-11 py-6 shadow-lg shadow-gray-500 mt-2  '>

    
    <div className="hover:scale-105 transition-transform duration-300   mt-5">
  <Link href="/stepper">
    <Product1 />
  </Link>
</div>
<div className="hover:scale-105 transition-transform duration-300  mt-5">
        <Product2 />
      </div>
      <div className="hover:scale-105 transition-transform duration-300  mt-5">
        <Product3 />
      </div>
     
      Welcome to Prduct List page 
    </div>
    </div>
  )
}

export default page
