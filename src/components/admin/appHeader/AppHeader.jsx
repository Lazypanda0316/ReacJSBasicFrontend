import React from "react";
import { TiThMenu } from "react-icons/ti";

const AppHeader = () => {
  return (
    <div className="w-full flex items-center justify-between bg-gray-900 text-white px-64 py-6 shadow-md">
      {/* Menu Icon (Left Side) */}
      <button className="text-2xl cursor-pointer hover:text-gray-400 transition">
        <TiThMenu />
      </button>

      {/* Title (Right Side) */}
      <h1 className="text-xl font-bold">App Name</h1>
    </div>
  );
};

export default AppHeader;
