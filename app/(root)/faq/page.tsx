import FAQAccordion from "@/components/sections/faq/FAQAccordion";
import ContactSection from "@/components/sections/faq/ContactSection";
import { faqData } from "@/data/sections/faq-data";
import SectionsHero from "@/components/sections/SectionsHero";

export default function FAQ() {
  return (
    <main>
      <SectionsHero title={faqData.hero.title} description={faqData.hero.description} />
      <FAQAccordion />
      <ContactSection />
    </main>
  );
} 