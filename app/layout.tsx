import type { Metadata } from "next";
import "./globals.css";
import { general } from "@/data/general";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ScrollProgress } from "@/components/eldoraui/scrollprogress";

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
        <ScrollProgress className="top-[80px]" />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
