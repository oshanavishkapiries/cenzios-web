import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import SectionsHero from "@/components/sections/SectionsHero";
import { contactData } from "@/data/sections/contact-data";
import ViewportAnimation from "@/components/ViewportAnimation";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch",
  description:
    "Contact Cenzios Pvt Ltd for software development services. Get in touch with our expert team for web development, mobile apps, custom software solutions, and IT consulting in Sri Lanka.",
  keywords: [
    "contact Cenzios",
    "software development contact",
    "IT consulting contact",
    "Sri Lanka software company contact",
    "web development contact",
    "mobile app development contact",
  ],
  openGraph: {
    title: "Contact Us - Cenzios Pvt Ltd",
    description:
      "Contact Cenzios Pvt Ltd for software development services. Get in touch with our expert team for web development, mobile apps, custom software solutions, and IT consulting in Sri Lanka.",
    url: "https://cenzios.com/contact",
  },
  twitter: {
    title: "Contact Us - Cenzios Pvt Ltd",
    description:
      "Contact Cenzios Pvt Ltd for software development services. Get in touch with our expert team for web development, mobile apps, custom software solutions, and IT consulting in Sri Lanka.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main>
      <StructuredData type="contact" />
      <SectionsHero
        title={contactData.hero.title}
        description={contactData.hero.description}
      />
      <ViewportAnimation delay={0.1}>
        <ContactInfo />
      </ViewportAnimation>
      <ViewportAnimation delay={0.1}>
        <ContactForm />
      </ViewportAnimation>
    </main>
  );
}
