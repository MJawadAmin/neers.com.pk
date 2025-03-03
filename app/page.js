"use client"; // Add this line at the top

import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";

const page = () => {
  const images = ["/hero-2.webp", "/hero-3.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='bg-[rgb(255,246,243)] space-y-8 p-20'>
      <h1 className='text-5xl text-[rgb(55,65,81)] font-semibold text-center'>Lighten up your life with quality.</h1>
      <p className="text-xl text-[rgb(55,65,81)] font-semibold text-center">
        Get the mental satisfaction of{" "}
        <span className="underline decoration-[rgb(249,102,46)] underline-offset-8">
          importing
        </span>{" "}
        and <span className="underline decoration-[rgb(249,102,46)] underline-offset-8">
          selling
        </span>{" "}your product legally, regulated for energy efficiency.
      </p>

      <div className='pb-20'>
        <ul className='flex justify-center gap-12 '>
          <li className='flex'> <Image src='/tick.jpeg' alt="tick" width={30} height={30} className='bg-transparent'></Image>  Simple registeration </li>
          <li className='flex'> <Image src='/tick.jpeg' alt="tick" width={30} height={30} className='bg-transparent'></Image>  Statistics Dashboard </li>
          <li className='flex'> <Image src='/tick.jpeg' alt="tick" width={30} height={30} className='bg-transparent'></Image>  Products & orders management</li>
        </ul>
      </div>

      <div className="relative w-[80vw] h-[160vh] mx-auto bg-white overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt="hero"
          fill
          className="rounded-xl p-3 object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  )
}

export default page;
