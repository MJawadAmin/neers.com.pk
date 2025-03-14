"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '../context/utils/auth';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Client-side check after hydration
    const token = getToken();
    
    if (!token) {
      router.push('/signin');
    } else {
      setIsVerified(true);
    }
  }, [router]);

  if (typeof window === 'undefined') {
    // Server-side: Return null or loading state
    return null; 
  }

  return isVerified ? children : null;
};

export default ProtectedRoute;