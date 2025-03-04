import React, { useState } from 'react';
import SideBar from '../../components/admin/sideBar/SideBar';
import { MdCancel } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const AdvanceHS = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex">
      <button
        className="absolute top-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdCancel size={24} /> : <TiThMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'}`}
      >
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">AdvanceHS Page</h1>
        <p className="text-lg text-gray-700">
          This is your dashboard. Feel free to navigate through the sidebar to access various features.
        </p>
      </div>
    </div>
  );
};

export default AdvanceHS;
