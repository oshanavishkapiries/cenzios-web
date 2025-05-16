import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { general } from "@/data/general";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from 'sonner';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: general.title,
  description: general.description,
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
