export const contactData = {
  hero: {
    title: "We’re Happy To Talk With You",
    description: "Contact us today to discuss how we can support your business goals.",
  },
  offices: {
    title: "Our Corporate Office",
    locations: [
      {
        country: "Sri Lanka",
        address: "119/A, Werellahena Road, Horana, Sri Lanka",
      },
      {
        country: "Sri Lanka",
        address: "392/E, Gohagoda Road, Katugasthota, kandy, Sri Lanka.",
      },
    ],
  },
  contactInfo: {
    title: "Contact",
    email: {
      label: "E-Mail",
      addresses: ["info@cenzios.com"],
    },
    phone: {
      label: "Mobile",
      numbers: ["(+94) 71 118 6028"],
    },
  },
  form: {
    title: "Schedule A Free Consultation",
    description: "Partner With Us For Comprehensive IT",
    subDescription:
      "We're happy to answer any questions you may have and help you determine which of our services best fit your needs.",
    buttonText: "Submit",
    fields: [
      {
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        required: true,
        gridCols: "col-span-1",
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        required: true,
        gridCols: "col-span-1",
      },
      {
        label: "Company / Organization",
        type: "text",
        placeholder: "Enter your company name",
        required: true,
        gridCols: "col-span-2",
      },
      {
        label: "Company Email",
        type: "email",
        placeholder: "Enter your company email",
        required: true,
        gridCols: "col-span-2",
      },
      {
        label: "Phone",
        type: "tel",
        placeholder: "Enter your phone number",
        required: true,
        gridCols: "col-span-2",
      },
      {
        label: "How Can We Help You?",
        type: "select",
        placeholder: "Select Option",
        required: true,
        gridCols: "col-span-2",
        options: [
          "Web Development",
          "Mobile App Development",
          "Custom Software",
          "IT Consulting",
          "Other",
        ],
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "To better assist you, please describe how we can help...",
        required: true,
        gridCols: "col-span-2",
      },
    ],
  },
};
