import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { socialLinks, quickLinks, exploreLinks, officeLocations, companyDescription } from '../data/footer'

const Footer = () => {
  return (
    <footer className="w-full mb-12 bg-gradient-to-br bg-secondary max-w-7xl mx-auto text-foreground pt-0 rounded-lg overflow-hidden">
      {/* Top CTA Section */}
      <div className="w-full rounded-lg flex flex-col md:flex-row">
        <div className="w-full p-10 bg-primary md:w-1/2 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-primary-foreground">Let&apos;s Connect</h2>
          <p className="text-base md:text-lg font-medium mb-6 text-primary-foreground">Share Your Vision. We&apos;re Here to Listen and Transform Ideas into Digital Realities</p>
          <Link href="/products">
            <span className="inline-block w-full md:w-auto bg-background text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-muted transition text-base md:text-lg">Start the Conversation →</span>
          </Link>
        </div>
        <div className="w-full p-10 bg-blue-900 md:w-1/2 text-white text-center">
          <div>
            <span className="block text-sm">Email Us</span>
            <a href={`mailto:${officeLocations[0].email}`} className="text-lg font-semibold break-all">{officeLocations[0].email}</a>
          </div>
          <div className="my-4">
            <span className="block text-sm">Call Us</span>
            <span className="text-lg font-semibold">{officeLocations[0].phone}</span>
          </div>
          <Link href="/contact">
            <span className="inline-block w-full md:w-auto bg-background text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-muted transition text-base md:text-lg">Schedule a Call →</span>
          </Link>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary transition">{link.name}</Link>
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
                <Link href={link.href} className="hover:text-primary transition">{link.name}</Link>
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
                  <a href={`mailto:${location.email}`} className="text-primary hover:underline">{location.email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* About & Social */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <Image src="/logo.png" alt="Company Logo" width={120} height={60} className="mb-4" />
            <p className="text-sm mb-4">{companyDescription}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="hover:text-primary transition">
                <span className="sr-only">{social.name}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 px-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <span>Copyright © 2020 -2025 | Cenzios Technologies</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer