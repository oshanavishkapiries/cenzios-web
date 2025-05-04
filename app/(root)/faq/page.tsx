import FAQAccordion from "@/components/sections/faq/FAQAccordion";
import ContactSection from "@/components/sections/faq/ContactSection";
import { faqData } from "@/data/sections/faq-data";
import SectionsHero from "@/components/sections/SectionsHero";
import ViewportAnimation from "@/components/ui/ViewportAnimation";

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
