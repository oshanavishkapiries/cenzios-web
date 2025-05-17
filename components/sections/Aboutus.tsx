"use client";
import React, { useEffect, useState } from "react";
import { aboutUsData } from "@/data/aboutus";
import Counter from "../syntaxui/TextTicker";
import dynamic from "next/dynamic";
import { IMAGES } from "@/data/images";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Aboutus = () => {
  const [isClient, setIsClient] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    setIsClient(true);
    fetch(IMAGES.ABOUT_ANIMATION)
    .then((response) => response.json())
    .then((data) => setAnimationData(data))
    .catch((error) => console.error("Error loading animation:", error));
  }, []);

  const getNumericValue = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    return parseInt(numericValue, 10);
  };

  return (
    <div className="myContainer mx-auto px-4 py-4">
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          {/* Left: Overlapping rectangles */}
          <div className="hidden lg:flex flex-col justify-center items-center lg:w-1/4 relative bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 rounded-xl p-4">
            {isClient && (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: "110%", height: "110%", objectFit: "cover" }}
              />
            )}
          </div>

          {/* Center: Heading and description */}
          <div className="flex-1 flex flex-col justify-center lg:w-2/4 text-center lg:text-left">
            {/* <div className="text-indigo-600 font-medium mb-4">{aboutUsData.title}</div> */}
            <h2 className="text-4xl font-bold mb-6">{aboutUsData.heading}</h2>
            <p className="text-gray-600 mb-1">{aboutUsData.description}</p>
            <p className="text-gray-600 mt-1">{aboutUsData.footerText}</p>
          </div>

          {/* Right: Stats in a grid layout */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/4">
            {aboutUsData.stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="h-full flex flex-col bg-secondary items-center justify-center p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-indigo-600 group-hover:text-purple-600 transition-colors mb-2">
                    {stat.icon === "check" && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 14l2-2 2 2 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {stat.icon === "team" && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M23 21v-2a4 4 0 00-3-3.87"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16 3.13a4 4 0 010 7.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {stat.icon === "satisfaction" && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 11.08V12a10 10 0 11-5.93-9.14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M22 4L12 14.01l-3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {stat.icon === "projects" && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      <Counter value={getNumericValue(stat.value)} />
                      <span className="text-xl ml-1">
                        {stat.value.replace(/[0-9]/g, "")}
                      </span>
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
