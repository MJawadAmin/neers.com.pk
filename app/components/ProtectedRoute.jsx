// components/ProtectedRoute.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  useEffect(() => {
    // Check if the user is authenticated (only on the client side)
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to the login page if the token is missing
      router.push("/signin");
    } else {
      // Set authenticated to true if the token exists
      setIsAuthenticated(true);
    }
  }, [router]);

  // Render children only if authenticated
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;