import type { Metadata } from "next";
import "./globals.css";
import { general } from "@/data/general";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
      <body className="antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
