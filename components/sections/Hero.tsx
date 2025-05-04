"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { general } from "@/data/general";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import heroAnimation from "@/public/hero.json";

const Hero = () => {
  const { hero } = general;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="matrix-effect absolute top-0 left-0 w-full h-full"></div>

      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black to-blue-900/50"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-black to-transparent"></div>

      {/* Content Layer */}
      <div className="relative h-full z-10">
        <div className="myContainer h-full mx-auto px-6 flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            {/* Left content */}
            <div className="flex-1  text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8">
                {hero.description}
              </p>
              <Link
                href={hero.buttonLink}
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {hero.buttonText}
              </Link>
            </div>

            {/* Right content - Lottie Animation */}
            <div className="hidden lg:flex flex-1 relative">
              <div className="relative w-full scale-100 pt-16">
                {isClient && (
                  <Lottie
                    animationData={heroAnimation}
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
