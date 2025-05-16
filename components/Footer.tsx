import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { HiArrowRight } from "react-icons/hi";
import {
  socialLinks,
  quickLinks,
  exploreLinks,
  officeLocations,
  companyDescription,
} from "../data/footer";

const Footer = () => {
  return (
    <footer className="w-full m bg-gradient-to-br bg-secondary text-foreground pt-0">
      {/* Top CTA Section */}

      <div className="w-full rounded-lg flex flex-col lg:flex-row">
        <div className="w-full p-10 bg-primary lg:w-1/2 text-center flex flex-col justify-end items-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-primary-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-base md:text-lg font-medium mb-6 text-primary-foreground">
            Share Your Vision. We&apos;re Here to Listen and Transform Ideas
            into Digital Realities
          </p>
          <Link href="/contact" className="w-full md:w-1/2 flex justify-center">
            <span className="inline-flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-lg h-12 md:h-14 lg:h-16 bg-background text-primary font-semibold px-4 md:px-8 py-3 rounded-md shadow hover:bg-muted transition text-base md:text-lg">
              <span>Start the Conversation</span>
              <HiArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </span>
          </Link>
        </div>
        <div className="w-full p-10 bg-blue-900 lg:w-1/2 text-center flex flex-col justify-end items-center">
          <div className="text-primary-foreground">
            <span className="block text-sm">Email Us</span>
            <a
              href={`mailto:${officeLocations[0].email}`}
              className="text-lg font-semibold break-all"
            >
              {officeLocations[0].email}
            </a>
          </div>
          <div className="my-4 text-primary-foreground">
            <span className="block text-sm">Call Us</span>
            <span className="text-lg font-semibold">
              {officeLocations[0].phone}
            </span>
          </div>
          <Link href="/contact" className="w-full md:w-1/2 flex justify-center">
            <span className="inline-flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-lg h-12 md:h-14 lg:h-16 bg-background text-primary font-semibold px-4 md:px-8 py-3 rounded-md shadow hover:bg-muted transition text-base md:text-lg">
              <span>Schedule a Call</span>
              <HiArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="myContainer px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Corporate Office */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Corporate Office</h3>
          <div className="space-y-4 text-sm">
            {officeLocations.map((location, idx) => (
              <div key={idx} className="mb-2">
                <p>{location.address}</p>
                <p className="pt-2">{location.phone}</p>
                <p className="pt-1">
                  <a
                    href={`mailto:${location.email}`}
                    className="text-primary hover:underline"
                  >
                    {location.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* About & Social */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <Logo className="mb-4 w-[100px] aspect-video" />
            <p className="text-sm mb-4">{companyDescription}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="hover:text-primary transition"
                >
                  <span className="sr-only">{social.name}</span>
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>©</span>
              <span>{new Date().getFullYear()}</span>
              <span className="font-medium text-foreground">
                Cenzios (Pvt) Ltd
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
              <div className="h-4 w-px bg-border/50" />
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
