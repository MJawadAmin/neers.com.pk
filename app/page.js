"use client"; // Keep this at the top

import React, { useState, useEffect } from "react";
import { SiTicktick } from "react-icons/si";
import Image from "next/image";

const Page = () => {
  const images = ["/hero-2.webp", "/hero-3.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[rgb(255,246,243)] space-y-8">
      <span
        data-aos="fade-in"
        className="flex justify-center items-center w-full pt-18 text-center text-gray-700 font-semibold 
             text-xl md:text-3xl lg:text-[53px] px-4 lg:px-0"
      >
        Lighten up your life with quality.
      </span>

      <p className="text-xl text-[rgb(55,65,81)] font-semibold text-center">
        Get the mental satisfaction of{" "}
        <span className="underline decoration-[rgb(249,102,46)] underline-offset-8">
          importing
        </span>{" "}
        and{" "}
        <span className="underline decoration-[rgb(249,102,46)] underline-offset-8">
          selling
        </span>{" "}
        your product legally, regulated for energy efficiency.
      </p>

      <div className="pb-20">
        <ul className="flex justify-center gap-12">
          <li className="flex items-center gap-2">
            <SiTicktick className="text-orange-700" /> Simple registration
          </li>
          <li className="flex items-center gap-2">
            <SiTicktick className="text-orange-700" /> Statistics Dashboard
          </li>
          <li className="flex items-center gap-2">
            <SiTicktick className="text-orange-700" /> Products & orders management
          </li>
        </ul>
      </div>

      <div className="relative w-[80vw] h-[170vh] mx-auto bg-white overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt="hero"
          fill
          className="rounded-xl p-3  transition-opacity duration-500"
        />
      </div>
 
    </div>
  );
};

export default Page;
