import React from "react";
import { NavLink } from "react-router-dom";
import herovid from "../../assets/videos/herovid.mp4";
import HowWeWork from "../../pages/howWework/HowWeWork";
import MeetCodesc from "../../pages/meetCodesc/MeetCodesc";
import OurMission from "../../pages/ourMission/OurMission";
import TrustedBy from "../../pages/trustedBy/TrustedBy";
import ServiceWeProvide from "../../pages/serviceWeProvide/ServiceWeProvide";
import NepalCashmerer from "../../pages/nepalCashmere/NepalCashmerer";
import WhatWeBuild from "../../pages/whatWeBuild/WhatWeBuild";
import DynamicTeam from "../../pages/dynamicTeam/DynamicTeam";

const Header = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <video
          src={herovid}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          loop
          autoPlay
          muted
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center p-6">
            <div>
              <img
                src="/images/CodescLogo.png"
                alt="Codesc Logo"
                className="h-12"
              />
            </div>

            <nav>
              <ul className="flex space-x-6">
                <li>
                  <NavLink
                    to="/about-us"
                    className="text-white hover:text-blue-700"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className="text-white hover:text-blue-700"
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/support-team"
                    className="text-white hover:text-blue-700"
                  >
                    Meet Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-us"
                    className="text-white hover:text-blue-700"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div>
              <button
                className="px-6 py-3 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-[0_0_20px_rgba(180,60,110,0.5)] "
                onClick={() => {}}
              >
                Start Project
              </button>
            </div>
          </div>

          <div className="text-center px-4">
            <h1 className="font-archivo text-white font-bold text-6xl mb-8">
              Your <span className="text-blue-700">Digital Success</span> Starts
              Here.
            </h1>

            <h2 className="font-archivo text-white text-3xl font-semibold mb-20">
              Kickstart Your Journey to Digital Excellence.
            </h2>
            <button
              className="px-8 py-4 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-[0_0_20px_rgba(180,60,110,0.5)]"
              onClick={() => {}}
            >
              Let's Build Your Dream Project
            </button>
          </div>

          <div className="font-archivo py-8 mb-10cd">
            <div className="flex justify-around items-center text-center text-white">
              <div>
                <p className="text-yellow-300 text-4xl font-bold ">10+</p>
                <p className="text-3xl">Successful Projects</p>
              </div>
              <div>
                <p className="text-yellow-300 text-4xl font-bold">5+</p>
                <p className="text-3xl">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-yellow-300 text-4xl font-bold">12+</p>
                <p className="text-3xl">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeetCodesc/>
      <TrustedBy/>
      <OurMission/>
      <HowWeWork />
      <ServiceWeProvide/>
      <WhatWeBuild/>
      <NepalCashmerer/>
      <DynamicTeam/>
      

    </>
  );
};

export default Header;
