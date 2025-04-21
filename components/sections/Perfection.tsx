import React from "react";
import { Features } from "../eldoraui/features";
import { steps } from "@/data/perfection";

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

      <Features data={steps} />
    </section>
  );
};

export default Perfection;
