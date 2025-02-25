import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const SpareAboutUs = () => {
  return (
    <>
    <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="h-[54px] w-auto"
        />
      </div>
      <div className="flex items-center my-7 px-60">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl text-red-500 font-bold">About Us</span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      <div className="text-center mt-10 text-4xl font-bold">
        <p>Your Trusted Auto Parts Marketplace!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 mb-10">
  {/* Image Section */}
  <div>
    <img src="/images/sparepart8.png" alt="Spare Part" className="w-full h-auto" />
  </div>

  {/* Text Content */}
  <div className="space-y-4 mb-10">
    <p className="text-gray-700 text-[24px]">
      At Eze Garage, we make it easy to find and order authentic car parts online. Our intuitive platform ensures a seamless experience, while our fast delivery service gets your parts to you quickly. Count on us for high-quality parts and the assurance of a smooth transaction.
    </p>

    {/* Features List */}
    <div className="space-y-2">
      <p className="flex items-center space-x-2 text-[24px]">
        <FaCheckCircle className="text-red-500 text-lg" />
        <span>We connect buyers with verified suppliers for reliability.</span>
      </p>
      <p className="flex items-center space-x-2 text-[24px]">
        <FaCheckCircle className="text-red-500 text-lg" />
        <span>Wide Range of Parts – From engine components to brake pads, we cover all your needs.</span>
      </p>
      <p className="flex items-center space-x-2 text-[24px]">
        <FaCheckCircle className="text-red-500 text-lg" />
        <span>Customer-Centric Approach – Easy returns, secure payments, and 24/7 support for a hassle-free experience.</span>
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default SpareAboutUs
