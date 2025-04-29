export const contactData = {
  hero: {
    title: "Contact Us",
    description: "We are more than happy to allocate some time for you. We are here if you want to share a conversation and talk about building you a solution."
  },
  offices: {
    title: "Our Corporate Office",
    locations: [
      {
        country: "Australia",
        address: "608 Waverley Rd, Glen Waverley VIC 3150, Australia"
      },
      {
        country: "Sri Lanka",
        address: "No 406/07, Hokandara North, Hokandara, Sri Lanka"
      }
    ]
  },
  contactInfo: {
    title: "Contact",
    email: {
      label: "E-mail",
      addresses: [
        "info@novasolutionsteam.com.au",
        "info@novasolutionsteam.com"
      ]
    },
    phone: {
      label: "Mobile",
      numbers: [
        "(+94) 70 210 8867",
        "(+61) 426 370 624"
      ]
    }
  },
  form: {
    title: "Schedule a Free Consultation",
    description: "Partner with Us for Comprehensive IT",
    subDescription: "We're happy to answer any questions you may have and help you determine which of our services best fit your needs.",
    buttonText: "Submit",
    fields: [
      {
        label: "First name",
        type: "text",
        placeholder: "Enter your first name",
        required: true,
        gridCols: "col-span-1"
      },
      {
        label: "Last name",
        type: "text",
        placeholder: "Enter your last name",
        required: true,
        gridCols: "col-span-1"
      },
      {
        label: "Company / Organization",
        type: "text",
        placeholder: "Enter your company name",
        required: true,
        gridCols: "col-span-2"
      },
      {
        label: "Company email",
        type: "email",
        placeholder: "Enter your company email",
        required: true,
        gridCols: "col-span-2"
      },
      {
        label: "Phone",
        type: "tel",
        placeholder: "Enter your phone number",
        required: true,
        gridCols: "col-span-2"
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
          "Other"
        ]
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "To better assist you, please describe how we can help...",
        required: true,
        gridCols: "col-span-2"
      }
    ]
  }
}; 