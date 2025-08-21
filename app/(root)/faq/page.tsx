import FAQAccordion from "@/components/sections/faq/FAQAccordion";
import ContactSection from "@/components/sections/faq/ContactSection";
import { faqData } from "@/data/sections/faq-data";
import SectionsHero from "@/components/sections/SectionsHero";
import ViewportAnimation from "@/components/ViewportAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about Cenzios Pvt Ltd software development services, web development, mobile app development, and IT consulting in Sri Lanka.",
  keywords: [
    "FAQ software development",
    "frequently asked questions",
    "software development questions",
    "web development FAQ",
    "mobile app development FAQ",
    "IT consulting questions",
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions - Cenzios Pvt Ltd",
    description:
      "Find answers to frequently asked questions about Cenzios Pvt Ltd software development services, web development, mobile app development, and IT consulting in Sri Lanka.",
    url: "https://cenzios.com/faq",
  },
  twitter: {
    title: "FAQ - Frequently Asked Questions - Cenzios Pvt Ltd",
    description:
      "Find answers to frequently asked questions about Cenzios Pvt Ltd software development services, web development, mobile app development, and IT consulting in Sri Lanka.",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQ() {
  return (
    <main>
      <SectionsHero
        title={faqData.hero.title}
        description={faqData.hero.description}
      />
      <ViewportAnimation delay={0.1}>
        <FAQAccordion />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <ContactSection />
      </ViewportAnimation>
    </main>
  );
}
