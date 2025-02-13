import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdArrowDropDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRFill } from "react-icons/ri";

const AppHeader = () => {
  const [isAppNameDropdownOpen, setIsAppNameDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsAppNameDropdownOpen(!isAppNameDropdownOpen);
  };

  return (
    <div className="w-full flex items-center justify-between bg-gray-900 text-white px-64 py-6 shadow-md relative">
      {/* Menu Icon (Left Side) */}
      <button className="text-2xl cursor-pointer hover:text-gray-400 transition">
        <TiThMenu />
      </button>

      {/* Title with Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center p-2 text-base text-white transition duration-75 rounded-lg hover:bg-gray-700 dark:text-white dark:hover:bg-gray-600 cursor-pointer"
        >
          <span className="flex-1 text-left whitespace-nowrap">App Name</span>
          <MdArrowDropDown
            className={`w-5 h-5 ml-2 text-gray-400 transition-transform duration-300 ${
              isAppNameDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isAppNameDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
            <ul className="py-2">
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <CgProfile className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Profile</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <RiLogoutBoxRFill className="w-5 h-5 text-gray-500" />
                <span className="ml-3">Log Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
