import React from 'react'
import Image from 'next/image'
import { BorderBeam } from '../magicui/border-beam'
import { aboutUsData } from '@/data/aboutus'

const Aboutus = () => {
  return (
    <div className="myContainer mx-auto px-4 py-16">
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
   
          <div className="lg:w-1/2">
            <Image
              src="/about-illustration.svg"
              alt="About Us Illustration"
              width={600}
              height={400}
              className="w-full"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="text-indigo-600 font-medium mb-4">{aboutUsData.title}</div>
            <h2 className="text-4xl font-bold mb-6">
              {aboutUsData.heading}
            </h2>
            <p className="text-gray-600 mb-8">
              {aboutUsData.description}
            </p>

            <div className="grid grid-cols-2 gap-8">
              {aboutUsData.stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform">
                    <BorderBeam 
                      size={50}
                      duration={4}
                      colorFrom={stat.gradient.from}
                      colorTo={stat.gradient.to}
                      className="opacity-30"
                    />
                    <div className="text-indigo-600 group-hover:text-purple-600 transition-colors">
                      {stat.icon === "check" && (
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                          <rect width="20" height="20" x="2" y="2" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M7 14l2-2 2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {stat.icon === "team" && (
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                      {stat.icon === "satisfaction" && (
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {stat.icon === "projects" && (
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-8">
              {aboutUsData.footerText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus