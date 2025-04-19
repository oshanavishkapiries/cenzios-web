import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
