import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      {/* Header Text Section */}
      <div className="flex flex-col items-center justify-center space-y-4 ">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="text-2xl text-black">Page Not Found</p>
      </div>

      <div className="flex justify-center items-center w-full h-screen -mt-40">
  <img
    src="/images/pagenotfound.jpg"
    alt="Page Not Found"
    className="w-auto h-150 max-w-4xl object-cover opacity-90"
  />
</div>

<div className="flex justify-center items-center -mt-40">
  <NavLink 
    to="/" 
    className="w-40 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg text-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-blue-600 transition duration-300 ease-in-out"
  >
    Home
  </NavLink>
</div>

    </>
  );
};

export default PageNotFound;
