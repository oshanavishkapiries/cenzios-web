import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { socialLinks, quickLinks, exploreLinks, officeLocations, companyDescription } from '../data/footer'

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="myContainer mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Image 
            src="/logo.png" 
            alt="Nova Solutions Logo" 
            width={120} 
            height={60}
          />
          <p className="text-gray-600">
            {companyDescription}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} className="bg-gray-700 p-2 rounded-md hover:bg-gray-800">
                <span className="sr-only">{social.name}</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon}/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-600 hover:text-gray-900">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-600 hover:text-gray-900">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
          <div className="space-y-2 text-gray-600">
            {officeLocations.map((location, index) => (
              <div key={index}>
                <p>{location.address}</p>
                <p className="pt-4">{location.phone}</p>
                <p className="pt-2">
                  <a href={`mailto:${location.email}`} className="text-blue-600 hover:text-blue-800">
                    {location.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer