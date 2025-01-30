import React from "react";

const WorkStepCard = ({ step }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="h-[280px] w-[450px] bg-opacity-30 backdrop-blur-lg shadow-lg mx-auto p-6 text-left transition-all duration-300 ease-in-out hover:shadow-[0_2px_10px_4px_rgba(37,99,235,0.6)]">
        <h1 className="text-6xl font-bold mb-5 text-white">{step.id}</h1>
        <h2 className="text-3xl font-bold text-white mb-3">{step.title}</h2>
        <p className="text-2xl text-white">{step.description}</p>
      </div>
    </div>
  );
};

export default WorkStepCard;
