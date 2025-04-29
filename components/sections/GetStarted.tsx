import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const GetStarted = () => {
  return (
    <section className="relative py-5">
      <div className="myContainer mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4">
            <Image 
              src="https://syntelligenceit.com/wp-content/uploads/2023/03/mohammad-rahmani-8OnkIkFBBtM-unsplash.jpg"
              alt="Get Started Illustration"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold mb-4">We Like to Start Your Project With Us</h2>
            <p className="text-gray-600 mb-8">
              If you want to create a new website for your business, do not hesitate to contact us today. We have created you to provide all types of services on the website.
            </p>
            <Link href="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/70 transition-colors">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted