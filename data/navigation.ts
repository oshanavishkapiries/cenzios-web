import { link } from "fs";

export const navigationData = {
  logo: {
    src: "/logo.png",
    alt: "Cenzios"
  },
  mainLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/faq", label: "FAQ" },
    { href: "/careers", label: "Careers" },
  ],
  ctaButton: {
    label: "Contact Us",
    variant: "default" as const,
    className: "bg-primary",
    link : "/contact"
  }
} 