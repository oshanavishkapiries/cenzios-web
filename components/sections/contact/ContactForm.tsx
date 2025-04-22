"use client";
import { useState } from "react";
import { contactData } from "../../../data/sections/contact-data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-16 mb-16 bg-gray-50 myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {contactData.form.title}
          </h2>
          <p className="text-lg text-gray-600">
            {contactData.form.description}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {contactData.form.fields.map((field, index) => (
              <div key={index} className="space-y-2">
                <label htmlFor={field.label.toLowerCase().replace(/\s+/g, '-')} className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                
                {field.type === "textarea" ? (
                  <textarea
                    id={field.label.toLowerCase().replace(/\s+/g, '-')}
                    name={field.label.toLowerCase().replace(/\s+/g, '-')}
                    placeholder={field.placeholder}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData[field.label.toLowerCase().replace(/\s+/g, '-') as keyof typeof formData] as string}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.label.toLowerCase().replace(/\s+/g, '-')}
                    name={field.label.toLowerCase().replace(/\s+/g, '-')}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData[field.label.toLowerCase().replace(/\s+/g, '-') as keyof typeof formData] as string}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {contactData.form.buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 