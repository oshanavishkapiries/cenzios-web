"use client";

import { useState } from "react";
import { careersData } from "../../../data/sections/careers-data";
import ApplicationDialog from "./ApplicationDialog";

export default function OpenPositions() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50 myContainer">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {careersData.positions.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {careersData.positions.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careersData.positions.jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {job.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button
                  onClick={() => setSelectedPosition(job.title)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <ApplicationDialog
          isOpen={!!selectedPosition}
          onClose={() => setSelectedPosition(null)}
          position={selectedPosition || ""}
        />
      </div>
    </section>
  );
} 