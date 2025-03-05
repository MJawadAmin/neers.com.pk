"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="text-[rgb(166,172,183)] p-4 h-28 ">
      <div className="container mx-auto flex justify-between items-center px-[120px]">
        {/* Logo */}
        <Link href="/" className=" ml-[15.5px] mt-[1px]">
          <Image src="/neeca-logo.webp" alt="Logo" width={68.5} height={68.5}  />
        </Link>

        {/* Navigation and Mobile Menu */}
        <div className="flex justify-between w-full md:w-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  ">
          <ul className="hidden flex-col lg:flex lg:flex-row gap-[39px]  font-[500] text-lg mr-[-3px] mt-[12px] items-start lg:items-center">
      {[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Tips", path: "/tips" },
        { name: "News", path: "/news" },
        { name: "Products", path: "/products" },
      ].map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`hover:text-[rgb(249,102,46)] ${
              pathname === item.path ? "text-orange-500 font-[500]" : ""
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}

      <li>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 hover:text-gray-100 text-white bg-[rgb(249,102,46)] px-[13px] py-[6px] rounded-md transition-transform duration-300 hover:-translate-y-2"

        >
          Register a company <FaArrowRight className="text-white text-2xl" />
        </Link>
      </li>
      <li>
        <Link
          href="/register"
          className={`hover:text-bg-[rgb(249,102,46)] ${
            pathname === '/signin'? "text-[rgb(249,102,46)] font-semibold" : ""
          }`}>
          Sign in
        </Link>
      </li>
    </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
