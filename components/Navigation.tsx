"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationData } from "@/data/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useCurrentPath } from "@/hooks/useCurrentPath";
import { ScrollProgress } from "./eldoraui/scrollprogress";
import Logo from "@/components/Logo";
import ContactUsBtn from "./ContactUsBtn";
import { useState } from "react";

export default function Navigation() {
  const { y } = useScrollPosition();
  const currentPath = useCurrentPath();
  const [isOpen, setIsOpen] = useState(false);

  const isScrolled = y > 5;
  const isHome = currentPath === "/";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`${
        isHome ? "fixed bg-transparent" : "sticky bg-background"
      } left-0 right-0 top-0 z-50 transition-all overflow-hidden duration-300 ${
        isScrolled ? "shadow-md bg-white/80 backdrop-blur-xl" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo
              className="w-[100px] aspect-video"
              variant={!isHome ? "b" : isScrolled ? "b" : "w"}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigationData.mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`font-semibold px-3 py-2 ${
                  currentPath === link.href
                    ? "text-primary"
                    : isScrolled || !isHome
                    ? "text-gray-800 hover:text-primary/50"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href={navigationData.ctaButton.link}>
              <ContactUsBtn />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="default" size="icon">
                  <FiMenu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationData.mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 px-3 py-2"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Link
                    href={navigationData.ctaButton.link}
                    className="mx-3"
                    onClick={handleLinkClick}
                  >
                    <ContactUsBtn />
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
