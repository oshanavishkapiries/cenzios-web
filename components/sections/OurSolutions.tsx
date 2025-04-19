import React from 'react'
import Image from 'next/image'
import { AlertCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { solutions } from '@/data/solutions'
import { Button } from "@/components/ui/button"

const OurSolutions = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="myContainer mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We're Not Just Another<br />
            Software Solutions Company
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on bringing you the best product, always going the extra
            mile to fulfill your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
              <div className="text-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="inline-flex items-center gap-2">
                        View Details
                        <AlertCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-[250px] p-2">
                      <p className="text-sm">{solution.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurSolutions