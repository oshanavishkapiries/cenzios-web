"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { solutions } from "@/data/solutions";
import dynamic from "next/dynamic";

import animation1 from "@/public/web-dev.json";
import animation2 from "@/public/mobile-dev.json";
import animation3 from "@/public/software-dev.json";
import animation4 from "@/public/system.json";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const animationData = [
  {
    animation: animation1,
    height: "75%",
    width: "75%",
  },
  {
    animation: animation2,
    height: "50%",
    width: "50%",
  },
  {
    animation: animation3,
    height: "75%",
    width: "75%",
  },
  {
    animation: animation4,
    height: "60%",
    width: "60%",
  },
];

const ServiceComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="pb-16 px-4 md:px-8">
      <div className="myContainer mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Solutions
            <br />
            For Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of technology solutions designed to
            drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[450px] shadow-xl hover:shadow-2xl"
            >
              {/* Lottie animation as background */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center pb-20 bg-gray-900 transition-colors duration-300 group-hover:bg-gray-800">
                {isClient && (
                  <Lottie
                    animationData={animationData[index].animation}
                    loop={true}
                    autoplay={true}
                    style={{
                      width: animationData[index].width,
                      height: animationData[index].height,
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>

              {/* Gradient overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent h-[50%]" />

              {/* Content */}
              <div className="relative h-full z-10 p-8 flex flex-col justify-end">
                <div className="text-white flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl p-3 transform group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    <Image
                      src={solution.icon}
                      alt={`${solution.title} icon`}
                      width={132}
                      height={132}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-200/90 text-base leading-relaxed hidden group-hover:block sm:block transition-all duration-300">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
