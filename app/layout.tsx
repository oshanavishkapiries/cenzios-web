import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Cenzios Pvt Ltd - Strategic Software Solutions Engineered To Fuel Your Growth",
  description:
    "Cenzios Pvt Ltd provides top-notch web and mobile app development, IT solutions, and outsourcing services in Sri Lanka and globally.",
  openGraph: {
    title:
      "Cenzios Pvt Ltd - Strategic Software Solutions Engineered To Fuel Your Growth",
    description:
      "Providing web apps, mobile apps, combo solutions, and tech outsourcing globally.",
    images: [
      {
        url: "/logo-b.png",
      },
    ],
    url: "https://cenzios.com",
    type: "website",
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cenzios Pvt Ltd - Strategic Software Solutions Engineered To Fuel Your Growth",
    description:
      "Providing web apps, mobile apps, combo solutions, and tech outsourcing globally.",
    images: ["/logo-b.png"],
    site: "@cenzios",
    creator: "@cenzios",
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className} relative`}>
        {children}
        <FloatingWhatsApp />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
