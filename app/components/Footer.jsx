import Image from "next/image";
import React from "react";
const Footer = () => {
    return (
      <footer className="bg-[rgb(21,21,29)] text-white py-4 px-12 pb-96">
       {/* mian Components*/}

      <div className=" flex flex-col"> <Image src="/neeca-logo.webp" alt="Logo" width={50} height={25} />
       <h1>Legally import and sell a product regulated for energy efficiency.</h1>
          </div>
       <div> <ul>
         <li> </li>
         <li></li>
         <li></li>
       </ul>   </div>
       <div>    </div>
      </footer>
    );
  };
  
  export default Footer;
  