"use client";
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '@/app/context/Authcontext';

const ProtectedRoute = ({ children }) => {
  const { token, isLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !token) {
      router.push('/login');
    }
  }, [token, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Or your loader component
  }

  return token ? children : null;
};

export default ProtectedRoute;