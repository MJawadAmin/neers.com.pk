import jwtDecode from 'jwt-decode';

export const validateToken = () => {
  if (typeof window === 'undefined') {
    console.error("Validation must run in a browser environment.");
    return null;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found in localStorage.");
    return null;
  }

  try {
    const decoded = jwtDecode(token); // Decode the token

    if (!decoded.exp) {
      console.error("Token does not contain an 'exp' field.");
      localStorage.removeItem("token"); // Clear invalid token
      return null;
    }

    const isExpired = decoded.exp * 1000 < Date.now(); // Check if the token is expired

    if (isExpired) {
      console.error("Token has expired.");
      localStorage.removeItem("token"); // Clear expired token
      return null;  
    }

    return decoded; // Return the valid token data
  } catch (error) {
    console.error("Failed to decode token:", error.message);
    localStorage.removeItem("token"); // Clear invalid token
    return null;
  }
};
