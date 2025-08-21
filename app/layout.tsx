import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "sonner";
import { IMAGES } from "@/data/images";
import StructuredData from "@/components/StructuredData";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cenzios.com"),
  title: {
    default:
      "Cenzios Pvt Ltd - Strategic Software Solutions Engineered To Fuel Your Growth",
    template: "%s | Cenzios Pvt Ltd",
  },
  description:
    "Cenzios Pvt Ltd provides top-notch web and mobile app development, IT solutions, and outsourcing services in Sri Lanka and globally. Expert in React, Angular, Django, Spring, and enterprise solutions.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software solutions",
    "IT outsourcing",
    "Sri Lanka software company",
    "React development",
    "Angular development",
    "Django development",
    "Spring framework",
    "enterprise software",
    "digital transformation",
    "software consulting",
  ],
  authors: [{ name: "Cenzios Pvt Ltd" }],
  creator: "Cenzios Pvt Ltd",
  publisher: "Cenzios Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Cenzios Pvt Ltd - Strategic Software Solutions Engineered To Fuel Your Growth",
    description:
      "Leading software development company in Sri Lanka. Expert web apps, mobile apps, custom software solutions, and IT outsourcing services. React, Angular, Django, Spring specialists.",
    images: [
      {
        url: "/logo-b.png",
        width: 1200,
        height: 630,
        alt: "Cenzios Pvt Ltd - Software Development Company",
      },
    ],
    url: "https://cenzios.com",
    siteName: "Cenzios Pvt Ltd",
    type: "website",
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cenzios Pvt Ltd - Strategic Software Solutions Engineered To Fuel Your Growth",
    description:
      "Leading software development company in Sri Lanka. Expert web apps, mobile apps, custom software solutions, and IT outsourcing services.",
    images: [IMAGES.LOGO_B],
    site: "@cenzios",
    creator: "@cenzios",
  },
  icons: {
    icon: [
      { url: IMAGES.LOGO, sizes: "32x32", type: "image/png" },
      { url: IMAGES.LOGO, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: IMAGES.LOGO, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className} relative`}>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <PerformanceMonitor />
        <GoogleAnalytics />
        {children}
        <FloatingWhatsApp />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
