import React from "react";
import { steps } from "./workJson/Data";
import WorkStepCard from "./workStepCard/WorkStepCard";


const HowWeWork = () => {
    
  return (
    <div className="relative h-screen bg-blue-950 text-white font-archivo flex flex-col items-center justify-center text-center p-4">
      <img
        src="/images/hww.png"
        alt="How We Work"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />
      <div className="relative z-10">
        <p className="text-7xl font-bold">How We Work?</p>
        <p className="text-xl mt-12">
          "We work through a strategic approach—understanding your needs,
          crafting tailored solutions, and delivering with excellence."
        </p>

        {/* Generating steps dynamically */}
        <div className="grid grid-cols-2 gap-[15px] mt-10 text-left">
          {steps.map((step) => (
            <WorkStepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
