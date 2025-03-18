"use client";

import React from "react";

const Loader = ({ size = "sm" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };

  return (
    <div className={`${sizes[size]} animate-spin rounded-full border-2 border-solid border-white border-t-transparent`} />
  );
};

export default Loader;