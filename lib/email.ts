import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
});

export const sendContactFormEmail = async (formData: {
  "first-name": string;
  "last-name": string;
  "company-/-organization": string;
  "company-email": string;
  phone: string;
  "how-can-we-help-you?": string;
  message: string;
}) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
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
    return { success: false, error };
  }
};

export const sendJobApplicationEmail = async (formData: {
  name: string;
  email: string;
  position: string;
  resume: File | null;
}) => {
  let resumeBuffer: Buffer | null = null;

  if (formData.resume) {
    const arrayBuffer = await formData.resume.arrayBuffer();
    resumeBuffer = Buffer.from(arrayBuffer);
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CAREERS_RECIPIENT_EMAIL,
    subject: `New Job Application: ${formData.position}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Position:</strong> ${formData.position}</p>
      <p><strong>Resume:</strong> Attached</p>
    `,
    attachments: resumeBuffer
      ? [
          {
            filename: formData.resume!.name,
            content: resumeBuffer,
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending job application email:", error);
    return { success: false, error };
  }
};
