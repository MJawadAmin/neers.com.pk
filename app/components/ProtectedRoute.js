"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("Authorization");

      if (!token) {
        console.error("No token found. Redirecting...");
        console.log(" T bg f bg ndsk" ,token)
        router.push("/signin");
      } else {
        try {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            console.error("Token expired.");
            localStorage.removeItem("Authorization");
            router.push("/signin");
          } else {
            setIsVerified(true);
          }
        } catch (error) {
          console.error("Invalid token.");
          localStorage.removeItem("Authorization");
          router.push("/signin");
        }
      }
    }
  }, [router]);

  if (!isVerified) return <div>Loading...</div>;

  return <>{children}</>;
};

export default ProtectedRoute;
