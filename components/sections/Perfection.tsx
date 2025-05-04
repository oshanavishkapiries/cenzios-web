import React from "react";
import Image from "next/image";
//import { Features } from "../eldoraui/features";
import { steps } from "@/data/perfection";

const Perfection = () => {
  return (
    <section className="myContainer">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Process of Innovation
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Cenzios IT Solutions, we combine careful planning with creative
          diligence to deliver software that exceeds expectations. We engineer
          excellence at every stage.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative h-[400px] rounded-md overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/20 backdrop-blur-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {step.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perfection;