import React from "react";
import { steps } from "./workJson/Data";
import WorkStepCard from "./workStepCard/WorkStepCard";

const HowWeWork = () => {
  return (
    <div className="relative min-h-screen bg-blue-950 text-white font-archivo flex flex-col items-center justify-center text-center p-4 sm:p-8">
      {/* Background Image */}
      <img
        src="/images/hww.png"
        alt="How We Work"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full">
        <p className="text-4xl sm:text-5xl md:text-7xl font-bold">
          How We Work?
        </p>
        <p className="text-lg sm:text-xl mt-6 sm:mt-12 px-4 sm:px-8">
          "We work through a strategic approach—understanding your needs,
          crafting tailored solutions, and delivering with excellence."
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-10 text-left">
          {steps.map((step) => (
            <WorkStepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
