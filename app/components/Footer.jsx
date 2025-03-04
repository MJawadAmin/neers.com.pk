import Image from "next/image";
import React from "react";
const Footer = () => {
    return (
      <div className="bg-[rgb(21,21,29)]">
      <footer className=" py-60  flex px-32  items-center justify-between ">
       {/* mian Components*/}

      <div className=" flex flex-col text-[rgb(156,159,165)]"> <Image src="/neeca-logopng.png" alt="Logo" width={36} height={38} />
       <h1>Legally import and sell a product regulated for energy efficiency.</h1>
          </div>
       <div>
        <h1>Quick Links </h1>
        <div  className=" flex gap-20">
        <ul className="text-[rgb(156,159,165)]">
         <li>Home </li>
         <li>Home</li>
         <li>Home</li>
       </ul>  
       <ul className="text-[rgb(156,159,165)]">
         <li>Home </li>
         <li>Home</li>
         <li>Home</li>
       </ul> 
        </div> 
        </div>
       <div className="space-x-5">
        <div className="flex gap-5 text-[rgb(156,159,165)]"><Image src='fb.svg' alt="Facebook logo" width={30} height={30}></Image>
        <Image src='tw.svg' alt="twitter logo " width={30} height={30}></Image>
        </div>
        <span className="text-[rgb(156,159,165)]"> info@neeca.gov.pk </span>
<span className="text-white">  | </span>
<span className="text-[rgb(156,159,165)]"> 051-9206001</span>
  </div>

      </footer>
      <hr className="mx-auto w-[80%] border-gray-300" />
      <div className="flex justify-end text-[rgb(156,159,165)]">
  © Copyright 2022. Neeca Inc.
</div>

      
      </div>
    );
  };
  
  export default Footer;
  