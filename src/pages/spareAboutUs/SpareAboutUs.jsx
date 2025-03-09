import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const SpareAboutUs = () => {
  return (
    <>
      {/* Logo Image */}
      <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="h-[54px] w-auto"
        />
      </div>

      {/* Section Title */}
      <div className="flex items-center my-7 px-6 sm:px-20">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl sm:text-4xl text-red-500 font-bold">About Us</span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      {/* Subtitle */}
      <div className="text-center mt-10 text-4xl sm:text-5xl font-bold">
        <p>Your Trusted Auto Parts Marketplace!</p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center p-6 mb-10">
        {/* Image Section */}
        <div className="sm:order-1">
          <img src="/images/sparepart8.png" alt="Spare Part" className="w-full h-auto" />
        </div>

        {/* Text Content */}
        <div className="space-y-4 mb-10 sm:order-2">
          <p className="text-gray-700 text-lg sm:text-xl">
            At Eze Garage, we make it easy to find and order authentic car parts online. Our intuitive platform ensures a seamless experience, while our fast delivery service gets your parts to you quickly. Count on us for high-quality parts and the assurance of a smooth transaction.
          </p>

          {/* Features List */}
          <div className="space-y-2">
            <p className="flex items-center space-x-2 text-lg sm:text-xl">
              <FaCheckCircle className="text-red-500 text-lg" />
              <span>We connect buyers with verified suppliers for reliability.</span>
            </p>
            <p className="flex items-center space-x-2 text-lg sm:text-xl">
              <FaCheckCircle className="text-red-500 text-lg" />
              <span>Wide Range of Parts – From engine components to brake pads, we cover all your needs.</span>
            </p>
            <p className="flex items-center space-x-2 text-lg sm:text-xl">
              <FaCheckCircle className="text-red-500 text-lg" />
              <span>Customer-Centric Approach – Easy returns, secure payments, and 24/7 support for a hassle-free experience.</span>
            </p>
          </div>

          <button className='border border-black bg-black text-white px-9 py-5 mt-5'>
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default SpareAboutUs;
