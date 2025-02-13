import React, { useState } from "react";
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
import ContactUs from "../contactUs/ContactUs";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccept = () => {
    // Logic for accepting terms
    console.log("Terms Accepted");
    setIsModalOpen(false); // Close the modal
  };

  const handleDecline = () => {
    // Logic for declining terms
    console.log("Terms Declined");
    setIsModalOpen(false); // Close the modal
  };

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

          {/* Button with Modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-lg hover:opacity-80 transition"
          >
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

      {/* Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[640px] h-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Terms and Conditions</h2>
            <p className="text-gray-700 mb-4">
              We agree to the terms and conditions that are being provided.
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.

              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            </p>

            <div className="flex justify-between">
              <button
                onClick={handleDecline}
                className="mt-4 w-40 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="mt-4 w-40 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Other Sections */}
      <MeetCodesc />
      <TrustedBy />
      <OurMission />
      <HowWeWork />
      <ServiceWeProvide />
      <WhatWeBuild />
      <NepalCashmere />
      <DynamicTeam />
      <ContactUs />
    </>
  );
};

export default Home;
