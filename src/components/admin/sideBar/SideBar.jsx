import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { TbNotes, TbMailbox } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuQrCode } from "react-icons/lu";
import { PiSignInBold, PiNotePencil } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { Outlet } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";

const SideBar = () => {
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isMailBoxDropdownOpen, setIsMailBoxDropdownOpen] = useState(false);
  const [isContentDropdownOpen, setIsContentDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "users") {
      setIsUsersDropdownOpen(!isUsersDropdownOpen);
    } else if (dropdown === "mailbox") {
      setIsMailBoxDropdownOpen(!isMailBoxDropdownOpen);
    } else if (dropdown === "content") {
      setIsContentDropdownOpen(!isContentDropdownOpen);
    }
  };

  return (
    <>
      <AppHeader />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
          <h1 className="font-bold text-3xl mb-4">
            <p className="flex items-center gap-2 text-lg">
              <LuQrCode size={40} /> Codesc Nepal
            </p>
          </h1>

          {/* Dashboard Button */}
          <button className="flex items-center w-full p-2 text-gray-900 dark:text-white hover:bg-gray-700">
            <BiSolidDashboard className="w-5 h-5 text-gray-500" />
            <span className="ms-3">Dashboard</span>
          </button>

          {/* Mailbox Dropdown */}
          <div className="relative w-full">
            <button
              onClick={() => toggleDropdown("mailbox")}
              className="flex items-center w-full p-2 text-gray-900 dark:text-white hover:bg-gray-700 cursor-pointer"
            >
              <TbMailbox className="w-5 h-5 text-gray-500" />
              <span className="flex-1 ms-3">MailBox</span>
              <MdArrowDropDown
                className={`transition-transform duration-300 ${
                  isMailBoxDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isMailBoxDropdownOpen && (
              <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  All Mail
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  New Mail
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  Settings
                </a>
              </div>
            )}
          </div>

          {/* Users Dropdown */}
          <div className="relative w-full">
            <button
              onClick={() => toggleDropdown("users")}
              className="flex items-center w-full p-2 text-gray-900 dark:text-white hover:bg-gray-700 cursor-pointer"
            >
              <HiOutlineUsers className="w-5 h-5 text-gray-500" />
              <span className="flex-1 ms-3">Users</span>
              <MdArrowDropDown
                className={`transition-transform duration-300 ${
                  isUsersDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isUsersDropdownOpen && (
              <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  All Users
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  Add User
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  Settings
                </a>
              </div>
            )}
          </div>

          {/* Content Dropdown */}
          <div className="relative w-full">
            <button
              onClick={() => toggleDropdown("content")}
              className="flex items-center w-full p-2 text-gray-900 dark:text-white hover:bg-gray-700 cursor-pointer"
            >
              <TbNotes className="w-5 h-5 text-gray-500" />
              <span className="flex-1 ms-3">Content</span>
              <MdArrowDropDown
                className={`transition-transform duration-300 ${
                  isContentDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {isContentDropdownOpen && (
              <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  All Content
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  Add Content
                </a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-700">
                  Settings
                </a>
              </div>
            )}
          </div>

          {/* Other Sections */}
          <button className="flex items-center w-full p-2 text-gray-900 dark:text-white hover:bg-gray-700">
            <PiSignInBold className="w-5 h-5 text-gray-500" />
            <span className="ms-3">Sign-In</span>
          </button>
          <button className="flex items-center w-full p-2 text-gray-900 dark:text-white hover:bg-gray-700">
            <PiNotePencil className="w-5 h-5 text-gray-500" />
            <span className="ms-3">Sign-Up</span>
          </button>

          <div className="mt-auto text-xs text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full">
            <p>© {new Date().getFullYear()} All Rights Reserved © Codesc Nepal</p>
          </div>
        </div>

        {/* Main Content Area (Where Nested Routes will be Rendered) */}
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideBar;
