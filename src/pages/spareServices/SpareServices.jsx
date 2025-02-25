import React from "react";
import { FaMedal } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const SpareServices = () => {
  return (
    <>
    <div className="bg-gray-100">
      <div className="flex justify-center mt-40">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="h-[54px] w-auto"
        />
      </div>

      {/* Section Title */}
      <div className="flex items-center my-7 px-60">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl text-red-500 font-bold">Services</span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      <div className="text-center mt-10 text-4xl font-bold">
        <p>Services we Provide</p>
      </div>
      <div className="text-center mt-10 text-xl text-gray-700 ">
        <p className="tracking-wider">
          Our Service Helps You Keep Your Car in Top Shape.Find high-quality,<br/>
          genuine auto parts with ease – because your car deserves the best!
        </p>
      </div>

      <div className="flex items-center justify-center gap-40 p-4 mt-15">
        <div className="grid grid-cols-2 gap-2 ">
          <div className="w-90 h-90 bg-white shadow-lg  overflow-hidden flex flex-col items-center justify-center p-4 text-center rounded-tl-[70px]">
            <FaMedal className="text-7xl text-red-500" />
            <h1 className="text-xl font-semibold mt-3">Genuine Spare Part</h1>
            <p className="text-lg text-gray-600 mt-3">
              Premium, trusted parts from top brands.
            </p>
          </div>

          <div className="w-90 h-90 bg-white shadow-lg  overflow-hidden flex flex-col items-center justify-center p-4 text-center rounded-tr-[70px]">
            <BiSearchAlt className="text-7xl text-red-500" />
            <h1 className="text-xl font-semibold mt-3">Smart Search</h1>
            <p className="text-lg text-gray-600 mt-3">
              Quickly locate parts by name or number.
            </p>
          </div>
          <div className="w-90 h-90 bg-white shadow-lg  overflow-hidden flex flex-col items-center justify-center p-4 text-center rounded-bl-[70px]">
            <FaCheckCircle className="text-7xl text-red-500" />
            <h1 className="text-lg font-semibold mt-3">
              Vehicle Compatibility Check
            </h1>
            <p className="text-sm text-gray-600 mt-3">
              Ensure a perfect fit for your vehicle.
            </p>
          </div>
          <div className="w-90 h-90 bg-white shadow-lg  overflow-hidden flex flex-col items-center justify-center p-4 text-center rounded-br-[70px]">
            <TbTruckDelivery className="text-7xl text-red-500" />
            <h1 className="text-xl font-semibold mt-3">
              Fast & Reliable Delivery
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              Quick, secure delivery to your door.
            </p>
          </div>
        </div>

        <div>
          <img
            src="/images/sparepart7.png"
            className="w-200 h-200 object-contain"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default SpareServices;
