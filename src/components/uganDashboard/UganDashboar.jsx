import React, { useState } from 'react';
import { FaInbox, FaUserFriends, FaSignInAlt, FaUserPlus, FaTachometerAlt, FaEnvelope, FaCog, FaBars, FaBell, FaSearch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

const UganDashboard = () => {
  // State for toggling dropdowns
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar and Top Bar Combined */}
      <aside className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col fixed top-0 left-0 bottom-0">
        {/* Logo and Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <span className="mr-2">&#x25A0;&#x25A0;</span> UGAN
          </h2>
          <FaBars className="text-gray-400 cursor-pointer" />
        </div>

        <ul>
          <li className="p-2 hover:bg-gray-700 rounded flex items-center mt-3 mb-4">
            <FaTachometerAlt className="mr-2" /> Dashboard
          </li>
          
          {/* MailBox Section */}
          <li
            className="p-2 hover:bg-gray-700 rounded flex items-center cursor-pointer mb-4"
            onClick={() => setIsMailOpen(!isMailOpen)}
          >
            <FaInbox className="mr-2" /> MailBox
            <MdArrowDropDown
              className={`ml-auto transform transition-transform duration-300 ${isMailOpen ? 'rotate-180' : ''}`}
            />
          </li>
          {isMailOpen && (
            <ul className="ml-4 p-2 bg-gray-800 rounded">
              <li className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaEnvelope className="mr-2" /> All Mail
              </li>
              <li className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaEnvelope className="mr-2" /> New Mail
              </li>
              <li className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaCog className="mr-2" /> Settings
              </li>
            </ul>
          )}
          
          {/* Users Section */}
          <li
            className="p-2 hover:bg-gray-700 rounded flex items-center cursor-pointer mb-4"
            onClick={() => setIsUserOpen(!isUserOpen)}
          >
            <FaUserFriends className="mr-2" /> Users
            <MdArrowDropDown
              className={`ml-auto transform transition-transform duration-300 ${isUserOpen ? 'rotate-180' : ''}`}
            />
          </li>
          {isUserOpen && (
            <ul className="ml-4 p-2 bg-gray-800 rounded">
              <li className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaUserFriends className="mr-2" /> All Users
              </li>
              <li className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaUserPlus className="mr-2" /> Add User
              </li>
              <li className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaCog className="mr-2" /> Settings
              </li>
            </ul>
          )}
          
          {/* Sign-In & Sign-Up */}
          <li className="p-2 hover:bg-gray-700 rounded flex items-center mb-4">
            <FaSignInAlt className="mr-2" /> Sign-In
          </li>
          <li className="p-2 hover:bg-gray-700 rounded flex items-center">
            <FaUserPlus className="mr-2" /> Sign-Up
          </li>
        </ul>
        
        <footer className="mt-auto text-center text-sm">
          © 2025 All Rights Reserved @UGAN
        </footer>
      </aside>
      
      {/* Main Content with Attached Top Bar */}
      <div className="flex-1 ml-64">
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Inbox</h1>
          <div className="flex space-x-4">
            <FaSearch className="text-gray-400 cursor-pointer" />
            <FaBell className="text-gray-400 cursor-pointer" />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default UganDashboard;
