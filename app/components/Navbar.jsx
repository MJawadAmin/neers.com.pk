"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-[rgb(166,172,183)] p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="ml-[175px]">
          <Image src="/neeca-logo.webp" alt="Logo" width={61.5} height={30} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-44 justify-center space-x-12 w-full">
          <ul className="flex gap-12">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="">
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/tips" className="hover:text-gray-400">
                Tips
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gray-400">
                News
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="hover:text-gray-400 text-white bg-[rgb(249,102,46)] px-5 py-2 rounded-md"
              >
                Register A Company
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-gray-400">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
