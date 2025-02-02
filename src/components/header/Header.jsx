import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src={herovid}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          loop
          autoPlay
          muted
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center p-6">
            {/* Logo */}
            <div>
              <img
                src="/images/CodescLogo.png"
                alt="Codesc Logo"
                className="h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Start Project Button (Hidden on Mobile) */}
            <div className="hidden md:block">
              <button className="px-6 py-3 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-lg">
                Start Project
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-blue-950/90 py-4">
              <ul className="flex flex-col space-y-4 items-center">
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
            </div>
          )}

          {/* Hero Section */}
          <div className="text-center px-4">
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
          </div>

          {/* Stats Section */}
          <div className="font-archivo py-8">
            <div className="flex flex-col sm:flex-row justify-around items-center text-center text-white gap-6">
              <div>
                <p className="text-yellow-300 text-3xl sm:text-4xl font-bold">
                  10+
                </p>
                <p className="text-lg sm:text-2xl">Successful Projects</p>
              </div>
              <div>
                <p className="text-yellow-300 text-3xl sm:text-4xl font-bold">
                  5+
                </p>
                <p className="text-lg sm:text-2xl">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-yellow-300 text-3xl sm:text-4xl font-bold">
                  12+
                </p>
                <p className="text-lg sm:text-2xl">Team Members</p>
              </div>
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
      <NepalCashmerer />
      <DynamicTeam />
    </>
  );
};

export default Header;
