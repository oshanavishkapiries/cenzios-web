import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/data/images";

interface LogoProps {
  className?: string;
  variant?: "b" | "w";
}

const Logo = ({ className = "", variant = "b" }: LogoProps) => {
  const logoSrc = variant === "w" ? IMAGES.LOGO_W : IMAGES.LOGO_B;

  return (
    <Link href="/">
      <div className={`relative ${className}`}>
        <Image
          src={logoSrc}
          alt="Cenzios Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
};

export default Logo;
