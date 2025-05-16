import React from "react";
import { steps } from "@/data/perfection";
import ViewportAnimation from "../ViewportAnimation";

const Perfection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-blue-200/50">
      <ViewportAnimation>
        <div className="text-center mb-16 myContainer">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Process of Innovation
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Cenzios (Pvt) Ltd, we combine careful planning with creative
            diligence to deliver software that exceeds expectations. We engineer
            excellence at every stage.
          </p>
        </div>
      </ViewportAnimation>

      <div className="relative flex flex-col items-center myContainer">
        {/* Vertical timeline line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/20 z-0"
          style={{ transform: "translateX(-50%)" }}
        />
        <div className="w-full flex flex-col gap-16">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <ViewportAnimation key={step.id}>
                <div
                  className={`relative flex flex-col md:flex-row items-center md:justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`w-full md:w-1/2 flex justify-center ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    } mb-6 md:mb-0`}
                  >
                    <div className="w-[320px] h-[200px] rounded-lg shadow-lg flex items-center justify-center bg-gradient-to-br from-primary to-blue-500 max-md:w-full">
                      {React.cloneElement(step.icon, {
                        className: "h-16 w-16 text-white",
                      })}
                    </div>
                  </div>
                  {/* Timeline dot and connector */}
                  <div className="hidden md:flex flex-col items-center z-10 mx-6">
                    <span className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg" />
                    {idx !== steps.length - 1 && (
                      <span className="flex-1 w-1 bg-gray-200" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-bold">
                        STEP {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              </ViewportAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Perfection;
