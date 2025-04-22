"use client";
import { useState } from "react";
import { careersData } from "../../../data/sections/careers-data";

interface FormData {
  name: string;
  email: string;
  position: string;
  resume: File | null;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    position: "",
    resume: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <section className="py-16 bg-white myContainer">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {careersData.application.title}
          </h2>
          <p className="text-lg text-gray-600">
            {careersData.application.description}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {careersData.application.formFields.map((field, index) => (
              <div key={index} className="space-y-2">
                <label htmlFor={field.label.toLowerCase().replace(/\s+/g, '-')} className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                
                {field.type === "select" ? (
                  <select
                    id={field.label.toLowerCase().replace(/\s+/g, '-')}
                    name={field.label.toLowerCase().replace(/\s+/g, '-')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData[field.label.toLowerCase().replace(/\s+/g, '-') as keyof typeof formData] as string}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options?.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "file" ? (
                  <input
                    type="file"
                    id={field.label.toLowerCase().replace(/\s+/g, '-')}
                    name={field.label.toLowerCase().replace(/\s+/g, '-')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
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
                {careersData.application.buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 