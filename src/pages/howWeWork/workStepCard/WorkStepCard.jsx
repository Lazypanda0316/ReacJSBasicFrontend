import React from "react";

const WorkStepCard = ({step}) => {
    
  return (
    <div>
      <div className="h-[270px] w-[450px] bg-gray-400 mx-auto p-6 text-left">
        <h1 className="text-6xl font-bold mb-5">{step.id}</h1>
        <h2 className="text-3xl font-bold">{step.title}</h2>
        <p className="text-2xl">{step.description}</p>
      </div>
    </div>
  );
};

export default WorkStepCard;
