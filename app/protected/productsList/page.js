"use client"; // Add this directive to mark the component as a client component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Product1 from './product1';
import Product2 from './product2';
import Product3 from './prduct3';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    router.push("/signin");
  };

  return (
    <ProtectedRoute>
      <div>
        {/* Header Section */}
        <div className='flex justify-between px-[160px] mt-7'>
          <button className="flex items-center gap-2">
            <Image src="/defaultProfile.webp" height={45} width={45} alt="Profile" />
            <span className='text-[18px]'>Hello jawadamin</span>
          </button>

          {/* Logout Button */}
          <div>
            <button
              className='bg-[#F76300] px-5 py-2 rounded-sm text-white text-[13px]'
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Main Content Section */}
        <div className='w-[81.3%] mx-auto px-11 py-6 shadow-lg shadow-gray-500 mt-2'>
          {/* Product Links */}
          <div className="hover:scale-105 transition-transform duration-300 mt-5">
            <Link href="/stepper">
              <Product1 />
            </Link>
          </div>
          <div className="hover:scale-105 transition-transform duration-300 mt-5">
            <Product2 />
          </div>
          <div className="hover:scale-105 transition-transform duration-300 mt-5">
            <Product3 />
          </div>

          {/* Welcome Message */}
          Welcome to Product List page
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;