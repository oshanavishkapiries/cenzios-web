import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import SectionsHero from "@/components/sections/SectionsHero";
import { contactData } from "@/data/sections/contact-data";

export default function Contact() {
  return (
    <main>
      <SectionsHero title={contactData.hero.title} description={contactData.hero.description} />
      <ContactInfo />
      <ContactForm />
    </main>
  );
} 