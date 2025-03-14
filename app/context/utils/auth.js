// utils/auth.js

// Check if window is defined (client-side)
const isBrowser = typeof window !== "undefined";

export const getToken = () => {
  return isBrowser ? localStorage.getItem("token") : null;
};

export const setToken = (token) => {
  if (isBrowser) localStorage.setItem("token", token);
};

export const removeToken = () => {
  if (isBrowser) localStorage.removeItem("token");
};
