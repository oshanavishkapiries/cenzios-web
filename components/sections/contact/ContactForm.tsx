"use client";
import { useState } from "react";
import { contactData } from "../../../data/sections/contact-data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    "company-/-organization": "",
    "company-email": "",
    "phone": "",
    "how-can-we-help-you?": "",
    "message": ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Thank you! We'll get back to you soon.");
    setFormData({
      "first-name": "",
      "last-name": "",
      "company-/-organization": "",
      "company-email": "",
      "phone": "",
      "how-can-we-help-you?": "",
      "message": ""
    });
  };

  return (
    <section className="myContainer md:rounded-lg relative mb-12 px-4 py-16 bg-gradient-to-br from-blue-900 via-[#052266] to-blue-900">
      <div className="myContainer">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {contactData.form.description}
            </h1>
            <p className="text-gray-300 text-lg">
              {contactData.form.subDescription}
            </p>
            <div className="space-y-4 pt-8">
              <h3 className="text-xl font-semibold">Your benefits:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span>Client-oriented</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span>Results-driven</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span>Independent</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span>Transparent</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {contactData.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {contactData.form.fields.map((field, index) => (
                  <div key={index} className={field.gridCols}>
                    <label
                      htmlFor={field.label.toLowerCase().replace(/\s+/g, '-')}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.label.toLowerCase().replace(/\s+/g, '-')}
                        name={field.label.toLowerCase().replace(/\s+/g, '-')}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData[field.label.toLowerCase().replace(/\s+/g, '-') as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                      />
                    ) : field.type === "select" ? (
                      <select
                        id={field.label.toLowerCase().replace(/\s+/g, '-')}
                        name={field.label.toLowerCase().replace(/\s+/g, '-')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData[field.label.toLowerCase().replace(/\s+/g, '-') as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.label.toLowerCase().replace(/\s+/g, '-')}
                        name={field.label.toLowerCase().replace(/\s+/g, '-')}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData[field.label.toLowerCase().replace(/\s+/g, '-') as keyof typeof formData]}
                        onChange={handleChange}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/50 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {contactData.form.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 