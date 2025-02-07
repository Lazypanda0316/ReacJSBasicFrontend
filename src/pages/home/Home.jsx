import React from "react";
import herovid from "../../assets/videos/herovid.mp4";
import MeetCodesc from "../meetCodesc/MeetCodesc";
import TrustedBy from "../trustedBy/TrustedBy";
import OurMission from "../ourMission/OurMission";
import HowWeWork from "../howWework/HowWeWork";
import ServiceWeProvide from "../serviceWeProvide/ServiceWeProvide";
import WhatWeBuild from "../whatWeBuild/WhatWeBuild";
import DynamicTeam from "../dynamicTeam/DynamicTeam";
import NepalCashmere from "../nepalCashmere/NepalCashmerer";
import Header from "../../components/header/Header";

const Home = ({ items, toggleReadMore, expanded }) => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
      <Header />

        {/* Background Video */}
        <video
          src={herovid}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          loop
          autoPlay
          muted
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          {/* Hero Section */}
          <h1 className="font-archivo text-white font-bold text-4xl sm:text-5xl md:text-6xl mb-8">
            Your <span className="text-blue-700">Digital Success</span> Starts
            Here.
          </h1>

          <h2 className="font-archivo text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-12">
            Kickstart Your Journey to Digital Excellence.
          </h2>

          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-lg">
            Let's Build Your Dream Project
          </button>

          {/* Stats Section */}
          <div className="font-archivo py-8 w-full flex flex-col sm:flex-row justify-around items-center text-white gap-6">
            <div className="text-center">
              <p className="text-yellow-300 text-3xl sm:text-4xl font-bold">
                10+
              </p>
              <p className="text-lg sm:text-2xl">Successful Projects</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-300 text-3xl sm:text-4xl font-bold">
                5+
              </p>
              <p className="text-lg sm:text-2xl">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-300 text-3xl sm:text-4xl font-bold">
                12+
              </p>
              <p className="text-lg sm:text-2xl">Team Members</p>
            </div>
          </div>
        </div>
      </div>
      {/* Other Sections */}
      <MeetCodesc />
      <TrustedBy />
      <OurMission />
      <HowWeWork />
      <ServiceWeProvide />
      <WhatWeBuild />
      <NepalCashmere />
      <DynamicTeam />
    </>
  );
};

export default Home;
