import React from "react";
import Image from "next/image";
import { IoAlertCircle } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { solutions } from "@/data/solutions";
import { Button } from "@/components/ui/button";

const OurSolutions = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="myContainer mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We&apos;re Not Just Another
            <br />
            Software Solutions Company
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on bringing you the best product, always going the extra
            mile to fulfill your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <div className="text-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          View Details
                          <IoAlertCircle className="h-6 w-6 text-primary" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        className="max-w-[250px] p-3 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg rounded-lg"
                      >
                        <p className="text-sm text-gray-700">
                          {solution.description}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
