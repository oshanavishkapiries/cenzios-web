import React from "react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="relative py-5">
      <div className="myContainer mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold my-4">
            Achieve Your Dream With Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            If you are Ready to turn your business dreams into reality,
            Don&apos;t hesitate to contact us today. We&apos;re here to empower
            your vision with innovative software solutions tailored to your
            success.
          </p>
          <Link href="/contact">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/70 transition-colors">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
