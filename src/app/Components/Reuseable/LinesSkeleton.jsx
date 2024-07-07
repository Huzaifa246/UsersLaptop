"use client";

import React from "react";

const LinesSkeleton = ({ lines = 5 }) => {
  return (
    <div className="border p-4 rounded shadow-lg w-100 mx-auto my-3">
      {[...Array(lines)].map((_, index) => (
        <div key={index} className="skeleton-line rounded mb-3"></div>
      ))}
    </div>
  );
};

export default LinesSkeleton;
