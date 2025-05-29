import nodemailer from "nodemailer";

// Define interfaces for type safety
interface ContactFormData {
  "first-name": string;
  "last-name": string;
  "company-/-organization": string;
  "company-email": string;
  phone: string;
  "how-can-we-help-you?": string;
  message: string;
}

interface JobApplicationData {
  name: string;
  email: string;
  position: string;
  resume: File | null;
}

// Create transporter with environment variables (remove NEXT_PUBLIC_ prefix)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.NEXT_PUBLIC_EMAIL_PASS || !process.env.NEXT_PUBLIC_CONTACT_FORM_RECIPIENT_EMAIL || !process.env.NEXT_PUBLIC_CAREERS_RECIPIENT_EMAIL) {
  throw new Error("Missing required email environment variables");
}

export const sendContactFormEmail = async (formData: ContactFormData) => {
  const mailOptions = {
    from: `"Contact Form" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
    to: process.env.NEXT_PUBLIC_CONTACT_FORM_RECIPIENT_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData["first-name"]} ${formData["last-name"]}</p>
      <p><strong>Company/Organization:</strong> ${formData["company-/-organization"]}</p>
      <p><strong>Email:</strong> ${formData["company-email"]}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>How can we help you?:</strong> ${formData["how-can-we-help-you?"]}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to send email"
    };
  }
};

export const sendJobApplicationEmail = async (formData: JobApplicationData) => {
  const mailOptions = {
    from: `"Job Application" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
    to: process.env.NEXT_PUBLIC_CAREERS_RECIPIENT_EMAIL,
    subject: `New Job Application: ${formData.position}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Position:</strong> ${formData.position}</p>
      <p><strong>Resume:</strong> ${formData.resume ? 'Attached' : 'Not provided'}</p>
    `,
    attachments: formData.resume ? [{
      filename: formData.resume.name,
      content: Buffer.from(await formData.resume.arrayBuffer()),
    }] : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending job application email:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to send email"
    };
  }
};