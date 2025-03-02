import React from "react";
import { FaMedal } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const SpareServices = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center mt-40">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="h-[54px] w-auto"
        />
      </div>

      {/* Section Title */}
      <div className="flex items-center my-7 px-6 sm:px-20">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl sm:text-4xl text-red-500 font-bold">
          Services
        </span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      <div className="text-center mt-10 text-4xl sm:text-5xl font-bold">
        <p>Services We Provide</p>
      </div>
      <div className="text-center mt-10 text-xl sm:text-2xl text-gray-700">
        <p className="tracking-wider">
          Our service helps you keep your car in top shape. Find high-quality,
          <br />
          genuine auto parts with ease – because your car deserves the best!
        </p>
      </div>

      {/* Grid Layout for Services and Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 mt-10 items-center">
        {/* Left Column - Service Cards in 2x2 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Service 1 */}
          <div className="w-full h-96 bg-white shadow-lg flex flex-col items-center justify-center p-6 text-center rounded-tl-[70px]">
            <FaMedal className="text-8xl text-red-500" />
            <h1 className="text-2xl font-semibold mt-4">Genuine Spare Parts</h1>
            <p className="text-lg text-gray-600 mt-3">
              Premium, trusted parts from top brands.
            </p>
          </div>

          {/* Service 2 */}
          <div className="w-full h-96 bg-white shadow-lg flex flex-col items-center justify-center p-6 text-center rounded-tr-[70px]">
            <BiSearchAlt className="text-8xl text-red-500" />
            <h1 className="text-2xl font-semibold mt-4">Smart Search</h1>
            <p className="text-lg text-gray-600 mt-3">
              Quickly locate parts by name or number.
            </p>
          </div>

          {/* Service 3 */}
          <div className="w-full h-96 bg-white shadow-lg flex flex-col items-center justify-center p-6 text-center rounded-bl-[70px]">
            <FaCheckCircle className="text-8xl text-red-500" />
            <h1 className="text-2xl font-semibold mt-4">
              Vehicle Compatibility Check
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              Ensure a perfect fit for your vehicle.
            </p>
          </div>

          {/* Service 4 */}
          <div className="w-full h-96 bg-white shadow-lg flex flex-col items-center justify-center p-6 text-center rounded-br-[70px]">
            <TbTruckDelivery className="text-8xl text-red-500" />
            <h1 className="text-2xl font-semibold mt-4">
              Fast & Reliable Delivery
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              Quick, secure delivery to your door.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center">
          <img
            src="/images/sparepart7.png"
            className="w-[400px] sm:w-[600px] md:w-[700px] h-auto object-contain"
            alt="Spare Part"
          />
        </div>
      </div>
    </div>
  );
};

export default SpareServices;
