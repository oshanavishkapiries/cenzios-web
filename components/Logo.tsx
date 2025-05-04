import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/logo.png"
          alt="Cenzios Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`font-bold text-primary ${textSizeClasses[size]}`}>
          Cenzios
        </span>
      )}
    </Link>
  );
};

export default Logo;
