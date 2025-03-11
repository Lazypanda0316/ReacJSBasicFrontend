import React from "react";
import SpareHeader from "../../components/header/SpareHeader";
import { FiClipboard } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";
import { MdPayment } from "react-icons/md";

const SpreCheckout = () => {
  return (
    <>
      <div>
        <SpareHeader />
        {/* Banner Image */}
        <img
          src="/images/sparepart10.png"
          className="w-full"
          alt="Checkout Process"
        />
        
        {/* Heading */}
        <div className="mt-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            CheckOut <span className="text-red-500">PROCESS</span>
          </h1>
        </div>
        
        {/* Progress Steps */}
        <div className="container mx-auto px-4 mt-8 mb-16">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            {/* Step 1 - Delivery Details */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10 relative">
                <FiClipboard size={24} />
              </div>
              <span className="mt-2 text-sm font-medium text-center">Delivery Details</span>
            </div>
            
            {/* Dashed line between 1 and 2 */}
            <div className="flex-1 mx-6 border-dashed border-t-2 border-gray-400"></div>
            
            {/* Step 2 - Payment Details */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg z-10 relative">
                <MdPayment size={24} />
              </div>
              <span className="mt-2 text-sm font-medium text-center">Payment Details</span>
            </div>
            
            {/* Dashed line between 2 and 3 */}
            <div className="flex-1 mx-6 border-dashed border-t-2 border-gray-400"></div>
            
            {/* Step 3 - Confirm Details */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg z-10 relative">
                <CiCircleCheck size={24} />
              </div>
              <span className="mt-2 text-sm font-medium text-center">Confirm Details</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SpreCheckout;