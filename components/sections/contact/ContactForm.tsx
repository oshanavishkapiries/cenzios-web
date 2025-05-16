"use client";
import { useState } from "react";
import { contactData } from "../../../data/sections/contact-data";
import { z, ZodError } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  "first-name": z.string().min(1, "First name is required"),
  "last-name": z.string().min(1, "Last name is required"),
  "company-/-organization": z
    .string()
    .min(1, "Company/Organization is required"),
  "company-email": z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  "how-can-we-help-you?": z.string().min(1, "Please select an option"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    "company-/-organization": "",
    "company-email": "",
    phone: "",
    "how-can-we-help-you?": "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err: ZodError["issues"][0]) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.");
        setFormData({
          "first-name": "",
          "last-name": "",
          "company-/-organization": "",
          "company-email": "",
          phone: "",
          "how-can-we-help-you?": "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span>Client-oriented</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span>Results-driven</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span>Independent</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
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
                  <div
                    key={index}
                    className={
                      field.type === "textarea" ? "col-span-2" : field.gridCols
                    }
                  >
                    <label
                      htmlFor={field.label.toLowerCase().replace(/\s+/g, "-")}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <>
                        <textarea
                          id={field.label.toLowerCase().replace(/\s+/g, "-")}
                          name={field.label.toLowerCase().replace(/\s+/g, "-")}
                          placeholder={field.placeholder}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                          value={
                            formData[
                              field.label
                                .toLowerCase()
                                .replace(/\s+/g, "-") as keyof typeof formData
                            ]
                          }
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                        {errors[
                          field.label.toLowerCase().replace(/\s+/g, "-")
                        ] && (
                          <p className="text-red-500 text-xs mt-1">
                            {
                              errors[
                                field.label.toLowerCase().replace(/\s+/g, "-")
                              ]
                            }
                          </p>
                        )}
                      </>
                    ) : field.type === "select" ? (
                      <>
                        <select
                          id={field.label.toLowerCase().replace(/\s+/g, "-")}
                          name={field.label.toLowerCase().replace(/\s+/g, "-")}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                          value={
                            formData[
                              field.label
                                .toLowerCase()
                                .replace(/\s+/g, "-") as keyof typeof formData
                            ]
                          }
                          onChange={handleChange}
                          disabled={isSubmitting}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((option, idx) => (
                            <option key={idx} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors[
                          field.label.toLowerCase().replace(/\s+/g, "-")
                        ] && (
                          <p className="text-red-500 text-xs mt-1">
                            {
                              errors[
                                field.label.toLowerCase().replace(/\s+/g, "-")
                              ]
                            }
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <input
                          type={field.type}
                          id={field.label.toLowerCase().replace(/\s+/g, "-")}
                          name={field.label.toLowerCase().replace(/\s+/g, "-")}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                          value={
                            formData[
                              field.label
                                .toLowerCase()
                                .replace(/\s+/g, "-") as keyof typeof formData
                            ]
                          }
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                        {errors[
                          field.label.toLowerCase().replace(/\s+/g, "-")
                        ] && (
                          <p className="text-red-500 text-xs mt-1">
                            {
                              errors[
                                field.label.toLowerCase().replace(/\s+/g, "-")
                              ]
                            }
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/50 text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  contactData.form.buttonText
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
