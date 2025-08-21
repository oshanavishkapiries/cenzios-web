import Stats from "@/components/sections/about/Stats";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import Journey from "@/components/sections/about/Journey";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import VisionMission from "@/components/sections/about/VisionMission";
import SectionsHero from "@/components/sections/SectionsHero";
import { aboutData } from "@/data/sections/about-data";
import ViewportAnimation from "@/components/ViewportAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Delivering Excellence Since 2023",
  description:
    "Learn about Cenzios Pvt Ltd, a leading software development company in Sri Lanka. Discover our journey, team expertise, and commitment to delivering innovative software solutions since 2023.",
  keywords: [
    "about Cenzios",
    "software company Sri Lanka",
    "IT company history",
    "software development team",
    "Cenzios journey",
    "Sri Lanka tech company",
  ],
  openGraph: {
    title: "About Us - Cenzios Pvt Ltd",
    description:
      "Learn about Cenzios Pvt Ltd, a leading software development company in Sri Lanka. Discover our journey, team expertise, and commitment to delivering innovative software solutions since 2023.",
    url: "https://cenzios.com/about",
  },
  twitter: {
    title: "About Us - Cenzios Pvt Ltd",
    description:
      "Learn about Cenzios Pvt Ltd, a leading software development company in Sri Lanka. Discover our journey, team expertise, and commitment to delivering innovative software solutions since 2023.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main>
      <SectionsHero
        title={aboutData.hero.title}
        description={aboutData.hero.description}
      />
      <ViewportAnimation delay={0.1}>
        <Stats />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <VisionMission />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <WhoWeAre />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <Journey />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <WhyChooseUs />
      </ViewportAnimation>
    </main>
  );
}
