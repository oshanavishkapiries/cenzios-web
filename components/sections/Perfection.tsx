import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Planning the procedure",
    description:
      "In this initial step we focus on identifying the issue and gathering the necessary information to form a solution.",
    image: "https://novasolutionsteam.com/assets/img/process/img1.png",
  },
  {
    title: "System Analysis",
    description:
      "Going with the ideas we formed before, in this stage we focus on building the system blueprint. We breakdown the work scope and responsibilities.",
    image: "https://novasolutionsteam.com/assets/img/process/img2.png",
  },
  {
    title: "Designing",
    description:
      "According to the blueprints, our developers get creative with their talents to build the perfect software solution for your company.",
    image: "https://novasolutionsteam.com/assets/img/process/img3.png",
  },
  {
    title: "Development",
    description:
      "Our expert team transforms the designs into fully functional software, ensuring high quality and performance at every step.",
    image: "https://novasolutionsteam.com/assets/img/process/img5.png",
  },
];

const Perfection = () => {
  return (
    <section className="myContainer">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our steps to perfection
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We work on a carefully designed guideline. We follow this procedure to
          reap you the full benefits of building a perfect software solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 mb-6">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perfection;
