import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavigationLink {
  name: string;
  href: string;
}

interface OfficeLocation {
  address: string;
  phone: string;
  email: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
];

export const quickLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export const exploreLinks: NavigationLink[] = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Service Request", href: "/service-request" },
];

export const officeLocations: OfficeLocation[] = [
  {
    address: "119/A, Werellahena Road, Horana, Sri Lanka.",
    phone: "(+94) 71 118 6028",
    email: "info@cenzios.com",
  },
  {
    address: "392/E, Gohagoda Road, Katugasthota, kandy, Sri Lanka.",
    phone: "(+94) 71 118 6028",
    email: "info@cenzios.com",
  },
];

export const companyDescription =
  "Cenzios IT Solutions provides Application Development and Digital Solutions worldwide. As a professional IT company, we ensure the ideal balance of cost, quality, and project requirements to empower your success.";
