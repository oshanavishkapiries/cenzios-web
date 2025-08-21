import SectionsHero from "@/components/sections/SectionsHero";
import { TechStack } from "@/components/sections/TechStack";
import { hero } from "@/data/sections/product-data";
import ServiceComponent from "@/components/sections/services/ServiceComponent";
import ViewportAnimation from "@/components/ViewportAnimation";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Comprehensive software development services including web development, mobile app development, custom software solutions, and enterprise technology services. Expert in React, Angular, Django, and Spring.",
  keywords: [
    "software development services",
    "web development services",
    "mobile app development",
    "custom software solutions",
    "enterprise software",
    "React development",
    "Angular development",
    "Django development",
    "Spring framework",
    "IT consulting services",
  ],
  openGraph: {
    title: "Software Development Services - Cenzios Pvt Ltd",
    description:
      "Comprehensive software development services including web development, mobile app development, custom software solutions, and enterprise technology services.",
    url: "https://cenzios.com/services",
  },
  twitter: {
    title: "Software Development Services - Cenzios Pvt Ltd",
    description:
      "Comprehensive software development services including web development, mobile app development, custom software solutions, and enterprise technology services.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <main className="min-h-screen">
      <StructuredData type="service" />
      <SectionsHero title={hero.title} description={hero.description} />

      <ViewportAnimation delay={0.1}>
        <TechStack />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <ServiceComponent />
      </ViewportAnimation>
    </main>
  );
}
