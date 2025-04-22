"use client"
import { useState } from "react";
import { faqData } from "../../../data/sections/faq-data";

export default function FAQAccordion() {
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});

  const toggleCategory = (index: number) => {
    if (openCategories.includes(index)) {
      setOpenCategories(openCategories.filter(i => i !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions({
      ...openQuestions,
      [key]: !openQuestions[key]
    });
  };

  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {faqData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                <svg
                  className={`h-6 w-6 text-blue-600 transition-transform ${
                    openCategories.includes(categoryIndex) ? "rotate-180" : ""
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
              
              {openCategories.includes(categoryIndex) && (
                <div className="mt-4 space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-medium text-gray-900 text-left">{item.question}</h3>
                        <svg
                          className={`h-5 w-5 text-blue-600 transition-transform ${
                            openQuestions[`${categoryIndex}-${questionIndex}`] ? "rotate-180" : ""
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
                      
                      {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                        <div className="px-6 py-4 bg-gray-50">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 