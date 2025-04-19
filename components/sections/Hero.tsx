import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="myContainer mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Software Solutions
              <span className="block">For New Millennia</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Unique, functional and innovative digital solutions tailor made
              for you, and you only!
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Right illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
