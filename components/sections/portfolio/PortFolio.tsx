"use client";
import React from "react";

const PortFolio = () => {
  return (
    <div className="w-full h-screen">
      <object
        data="/Portfolio.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <p className="p-4 text-center">
          Your browser does not support PDFs.{" "}
          <a
            href="/Portfolio.pdf"
            download="Portfolio.pdf"
            className="text-primary hover:text-primary/80 underline"
          >
            Click here to download the PDF
          </a>
        </p>
      </object>
    </div>
  );
};

export default PortFolio;
