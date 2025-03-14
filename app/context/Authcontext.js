// context/AuthContext.js
"use client";
import { createContext, useState, useEffect } from "react";
import { getToken, setToken, removeToken } from "./utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setAuthToken] = useState(null);

  useEffect(() => {
    // This will only run on the client side after hydration
    const storedToken = getToken();
    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    setAuthToken(newToken);
  };

  const logout = () => {
    removeToken();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;