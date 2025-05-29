

export const navigationData = {
  logo: {
    src: "/logo.png",
    alt: "Cenzios"
  },
  mainLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
  ],
  ctaButton: {
    label: "Contact Us",
    variant: "default" as const,
    className: "bg-primary",
    link : "/contact"
  }
} 