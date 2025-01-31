import React from "react";
import typing from "../../assets/videos/typing.mp4";

const OurMission = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={typing}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-blue-950/60 text-white text-center px-6">
        <p className="text-5xl font-archivo max-w-5xl">
          <span className="text-amber-400">Our Mission:</span> Empowering
          businesses with innovative IT solutions that drive growth, enhance
          efficiency, and create lasting value in the digital world.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
