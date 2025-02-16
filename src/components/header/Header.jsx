import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
                <NavLink to="/about-us" className="text-white hover:text-blue-700">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="text-white hover:text-blue-700">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/support-team" className="text-white hover:text-blue-700">
                  Meet Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-white hover:text-blue-700">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Section - Hamburger Menu & Start Project Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Start Project Button with Sidebar Menu Button */}
            <div className="hidden md:flex items-center space-x-5">
              <button
                className="text-white text-2xl"
                onClick={() => setSidebarOpen(true)}
              >
                <RxHamburgerMenu />
              </button>
              <NavLink
                to="/login"
                className="px-6 py-3 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-lg"
              >
                Start Project
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-blue-950/90 py-4">
            <ul className="flex flex-col space-y-6 items-center">
              <li>
                <NavLink to="/about-us" className="text-white hover:text-blue-700">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="text-white hover:text-blue-700">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/support-team" className="text-white hover:text-blue-700">
                  Meet Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-white hover:text-blue-700">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 text-white shadow-lg p-6 transition-transform duration-700 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <FiX />
        </button>
        <ul className="mt-10 space-y-6">
          <li>
            <NavLink to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="text-white hover:text-gray-300">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="text-white hover:text-gray-300">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="text-white hover:text-gray-300">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;