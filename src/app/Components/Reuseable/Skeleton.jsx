"use client";

import React from "react";

const Skeleton = () => {
  return (
    <div className="border p-4 rounded shadow-lg w-80 mx-auto max-w-500">
      <div className="relative mb-4 d-flex justify-content-center align-items-center bg-secondary animate-pulse" style={{ backgroundColor: "#e2e2e2" }}>
        <svg
          className="w-10 h-10 text-light"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
          style={{ backgroundColor: "#e2e2e2" }}
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="rounded mb-4" style={{ height: '1rem', backgroundColor: "#e2e2e2" }}></div>
      <div className="rounded mb-3" style={{ height: '0.5rem', backgroundColor: "#e2e2e2" }}></div>
      <div className="rounded mb-3" style={{ height: '0.5rem', backgroundColor: "#e2e2e2" }}></div>
      <div className="rounded mb-3" style={{ height: '0.5rem', backgroundColor: "#e2e2e2" }}></div>
      <div className="rounded mb-3" style={{ height: '0.5rem', backgroundColor: "#e2e2e2" }}></div>
      <div className="rounded mb-3" style={{ height: '0.5rem', backgroundColor: "#e2e2e2" }}></div>
    </div>
  );
};

export default Skeleton;
