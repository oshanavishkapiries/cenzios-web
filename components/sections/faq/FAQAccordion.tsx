"use client";
import { useState } from "react";
import { faqData } from "../../../data/sections/faq-data";

export default function FAQAccordion() {
  const [openQuestions, setOpenQuestions] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleQuestion = (index: number) => {
    setOpenQuestions({
      ...openQuestions,
      [index]: !openQuestions[index],
    });
  };

  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.questions.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 text-left">
                    {item.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 text-blue-600 transition-transform ${
                      openQuestions[index] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openQuestions[index] && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
