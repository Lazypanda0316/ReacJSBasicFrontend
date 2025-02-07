import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";


const ExtraHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center p-6">
          {/* Logo */}
          <NavLink to="/">
            <img src="/images/CodescLogo.png" alt="Codesc Logo" className="h-12" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <NavLink to="/about-us" className="text-black hover:text-blue-700">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="text-black hover:text-blue-700">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/support-team" className="text-black hover:text-blue-700">
                  Meet Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-black hover:text-blue-700">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Start Project Button (Hidden on Mobile) */}
          <div className="hidden md:block">
            <NavLink to="/login" className="px-6 py-3 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-lg">
              Start Project
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-blue-950/90 py-4">
            <ul className="flex flex-col space-y-4 items-center">
              <li>
                <NavLink to="/about-us" className="text-black hover:text-blue-700">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="text-black hover:text-blue-700">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/support-team" className="text-black hover:text-blue-700">
                  Meet Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-black hover:text-blue-700">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          )}

    
        </div>
      </div>

 
    </>
  );
};

export default ExtraHeader;
