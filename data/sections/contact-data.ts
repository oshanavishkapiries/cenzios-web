import { Description } from "@radix-ui/react-dialog";
import { describe } from "node:test";

export const contactData = {
  hero: {
    title: "We are more than happy to have a conversation with you..",
    //description: "We are more than happy to have a conversation with you.."
  },
  offices: {
    title: "Our Corporate Office",
    locations: [
      
      {
        country: "Sri Lanka",
        address: "119/A, Werellahena Road, Horana, Sri Lanka"
      }
       ,
      {
        country: "Sri Lanka",
        address: '392/E, Gohagoda Road, Katugasthota, kandy, Sri Lanka.',
      }
    ]
  },
  contactInfo: {
    title: "Contact",
    email: {
      label: "E-mail",
      addresses: [
        "info@novasoluticenzios.com",
      ]
    },
    phone: {
      label: "Mobile",
      numbers: [
        "(+94) 71 118 6028",
      ]
    }
  },
  hours: {
    title: "Hours of Operation",
    schedule: [
      {
        days: "Remove This part from the page",
        hours: "Remove This part from the page"
      }
    ]
  },
  form: {
    title: "Lets have a Chat, It costs Nothing! ",
   // description: "Let's have a chat about your Future",
    buttonText: "Send Message",
    fields: [
      {
        label: "Name",
        type: "text",
        placeholder: "Enter your name"
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Enter your email address"
      },
      {
        label: "Phone",
        type: "tel",
        placeholder: "Enter your phone number"
      },
      {
        label: "Subject",
        type: "text",
        placeholder: "Enter the subject of your message"
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Enter your message"
      }
    ]
  }
}; 