import WhyWorkWithUs from "@/components/sections/careers/WhyWorkWithUs";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import { careersData } from "@/data/sections/careers-data";
import SectionsHero from "@/components/sections/SectionsHero";
import ViewportAnimation from "@/components/ViewportAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Join Cenzios Pvt Ltd and be part of a dynamic software development team. Explore career opportunities in web development, mobile app development, and software engineering in Sri Lanka.",
  keywords: [
    "careers at Cenzios",
    "software development jobs",
    "IT jobs Sri Lanka",
    "web developer jobs",
    "mobile app developer jobs",
    "software engineer careers",
    "tech jobs Sri Lanka",
  ],
  openGraph: {
    title: "Careers - Join Our Team - Cenzios Pvt Ltd",
    description:
      "Join Cenzios Pvt Ltd and be part of a dynamic software development team. Explore career opportunities in web development, mobile app development, and software engineering in Sri Lanka.",
    url: "https://cenzios.com/careers",
  },
  twitter: {
    title: "Careers - Join Our Team - Cenzios Pvt Ltd",
    description:
      "Join Cenzios Pvt Ltd and be part of a dynamic software development team. Explore career opportunities in web development, mobile app development, and software engineering in Sri Lanka.",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function Careers() {
  return (
    <main>
      <SectionsHero
        title={careersData.hero.title}
        description={careersData.hero.description}
      />
      <ViewportAnimation delay={0.1}>
        <WhyWorkWithUs />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <OpenPositions />
      </ViewportAnimation>
    </main>
  );
}
