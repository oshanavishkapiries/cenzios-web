"use client";
import { BackgroundGradientAnimation } from "../acenity/background-gradient-animation";

interface HeroProps {
  title: string;
  description: string;
}

export default function SectionsHero({ title, description }: HeroProps) {
  return (
    <div className="relative h-[350px] flex items-center justify-center">
      <BackgroundGradientAnimation className="relative h-[350px] flex items-center justify-center py-20 bg-gradient-to-br from-blue-900/90 via-[#052266]/90 to-blue-900/90 text-white">
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto p-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl opacity-90">
              {description}
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
