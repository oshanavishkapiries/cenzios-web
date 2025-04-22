import React from "react";
import { Features } from "../eldoraui/features";
import { steps } from "@/data/perfection";

const Perfection = () => {
  return (
    <section className="myContainer">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Process of Innovation
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        At Cenzios IT Solutions, we combine careful planning with creative diligence to deliver software that exceeds expectations. We engineer excellence at every stage.
        </p>
      </div>

      <Features data={steps} />
    </section>
  );
};

export default Perfection;
