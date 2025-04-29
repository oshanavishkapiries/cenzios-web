import React from "react";
import Link from "next/link";
import { general } from "@/data/general";
import Image from "next/image";
//import Background from "../eldoraui/novatrixbg";

const Hero = () => {
  const { hero } = general;

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
      {/* <Background /> */}
        <Image
          src="https://syntelligenceit.com/wp-content/uploads/2024/11/group-people-working-team-2048x1365.jpg"
          alt="Team working together"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-transparent to-transparent"></div>

      {/* Content Layer */}
      <div className="relative h-full z-10">
        <div className="myContainer h-full mx-auto px-4 flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            {/* Left content */}
            <div className="flex-1  text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                {hero.description}
              </p>
              <Link
                href={hero.buttonLink}
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {hero.buttonText}
              </Link>
            </div>

            {/* Right content - if needed */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
