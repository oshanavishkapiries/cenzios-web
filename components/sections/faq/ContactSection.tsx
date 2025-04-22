import { faqData } from "../../../data/sections/faq-data";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50 myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {faqData.contact.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {faqData.contact.description}
          </p>
          <Link 
            href={faqData.contact.buttonLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            {faqData.contact.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
} 