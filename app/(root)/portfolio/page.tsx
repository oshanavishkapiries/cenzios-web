import PortFolio from "@/components/sections/portfolio/PortFolio";
//import SectionsHero from "@/components/sections/SectionsHero";
import ViewportAnimation from "@/components/ViewportAnimation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our Projects",
  description:
    "Explore Cenzios Pvt Ltd portfolio showcasing successful software development projects, web applications, mobile apps, and custom software solutions delivered to clients worldwide.",
  keywords: [
    "Cenzios portfolio",
    "software development projects",
    "web development portfolio",
    "mobile app portfolio",
    "custom software projects",
    "IT projects showcase",
  ],
  openGraph: {
    title: "Portfolio - Our Projects - Cenzios Pvt Ltd",
    description:
      "Explore Cenzios Pvt Ltd portfolio showcasing successful software development projects, web applications, mobile apps, and custom software solutions delivered to clients worldwide.",
    url: "https://cenzios.com/portfolio",
  },
  twitter: {
    title: "Portfolio - Our Projects - Cenzios Pvt Ltd",
    description:
      "Explore Cenzios Pvt Ltd portfolio showcasing successful software development projects, web applications, mobile apps, and custom software solutions delivered to clients worldwide.",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

const PortFlioPage = () => {
  return (
    <main>
      {/* <SectionsHero title="Portfolio" description="Our Portfolio" /> */}
      <ViewportAnimation delay={0.1}>
        <PortFolio />
      </ViewportAnimation>
    </main>
  );
};

export default PortFlioPage;
