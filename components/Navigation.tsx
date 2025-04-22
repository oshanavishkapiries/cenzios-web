"use client";
import Link from "next/link";
import Image from 'next/image';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationData } from "@/data/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useCurrentPath } from "@/hooks/useCurrentPath";
import { ScrollProgress } from "./eldoraui/scrollprogress";

export default function Navigation() {
  const { y } = useScrollPosition();
  const currentPath = useCurrentPath();

  const isScrolled = y > 5;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white/80 backdrop-blur-xl" : "shadow-none"}`}>
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-12 w-auto"
                src={navigationData.logo.src}
                alt={navigationData.logo.alt}
                width={48}
                height={48}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationData.mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-800 font-semibold hover:text-primary/50 px-3 py-2 ${currentPath === link.href ? "text-primary" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            <Link href={navigationData.ctaButton.link}>
              <Button
                variant={navigationData.ctaButton.variant}
                className={navigationData.ctaButton.className}
                size="lg"
              >
                {navigationData.ctaButton.label}
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationData.mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 px-3 py-2"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link href={navigationData.ctaButton.link}>
                    <Button
                      variant={navigationData.ctaButton.variant}
                      className={`${navigationData.ctaButton.className} mx-3`}
                    >
                      {navigationData.ctaButton.label}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

       
      </div>
      <ScrollProgress />
    </nav>
  );
}
