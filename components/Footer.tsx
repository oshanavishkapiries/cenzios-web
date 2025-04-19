import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Image 
            src="/logo.png" 
            alt="Nova Solutions Logo" 
            width={120} 
            height={60}
          />
          <p className="text-gray-600">
            Nova Solutions offerings the Application Development and Digital Solutions across Sri Lanka. We are a professional information technology company that finds the right balance among price, quality, and project requirements.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="bg-gray-700 p-2 rounded-md hover:bg-gray-800">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-gray-700 p-2 rounded-md hover:bg-gray-800">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-gray-700 p-2 rounded-md hover:bg-gray-800">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
            <li><Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link></li>
            <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
            <li><Link href="/service-request" className="text-gray-600 hover:text-gray-900">Service Request</Link></li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
          <div className="space-y-2 text-gray-600">
            <p>Bay 9, Trace Expert City, Colombo, Sri Lanka.</p>
            <p>No 608 Waverley Rd, Glen Waverley VIC 3150, Australia</p>
            <p className="pt-4">(+94) 70 210 8867</p>
            <p>(+61) 426 370 624</p>
            <p className="pt-2">
              <a href="mailto:info@novasolutionsteam.com" className="text-blue-600 hover:text-blue-800">
                info@novasolutionsteam.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer