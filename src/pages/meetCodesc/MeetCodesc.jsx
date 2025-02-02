import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdLink } from "react-icons/md";

const MeetCodesc = () => {
  return (
    <div className="bg-blue-950 text-white font-archivo py-16 px-8 relative">
   
      <div className="absolute inset-0">
        <img
          src="/images/Subtract.png"
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 items-center">
      
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="col-span-1 row-span-2">
            <img
              src="/images/main.png"
              alt="Main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/images/mainR.png"
              alt="Top Right"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/images/mainB.png"
              alt="Bottom Right"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center space-y-6 text-center sm:text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400">Meet Codesc</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-300">From Concept to Reality</h2>
          <p className="text-lg leading-relaxed sm:text-base">
            At Codesc, we aim to empower businesses with innovative IT solutions
            that foster growth and efficiency, helping our clients thrive in a
            rapidly changing digital world.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-300 rounded-full font-medium transition-all hover:bg-white/20"
              aria-label="Innovative Solution"
            >
              <FaRegLightbulb className="text-lg" />
              Innovative Solution
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-300 rounded-full font-medium transition-all hover:bg-white/20"
              aria-label="Customer-Centric Approach"
            >
              <FaUserGroup className="text-lg" />
              Customer-Centric Approach
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-300 rounded-full font-medium transition-all hover:bg-white/20"
              aria-label="Expert Team"
            >
              <FaHandshake className="text-lg" />
              Expert Team
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-300 rounded-full font-medium transition-all hover:bg-white/20"
              aria-label="End-to-End Services"
            >
              <MdLink className="text-lg" />
              End-to-End Services
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MeetCodesc;
