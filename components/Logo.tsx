import React from "react";
import Link from "next/link";
// import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
    // const sizeClasses = {
    //     sm: "w-8 h-8",
    //     md: "w-10 h-10",
    //     lg: "w-12 h-12",
    //   };
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/logo.png"
          alt="Cenzios Logo"
          fill
          className="object-contain"
          priority
        />
      </div> */}
      {showText && (
        <span className={`font-bold text-primary ${textSizeClasses[size]}`}>
          Cenzios
        </span>
      )}
    </Link>
  );
};

export default Logo;
