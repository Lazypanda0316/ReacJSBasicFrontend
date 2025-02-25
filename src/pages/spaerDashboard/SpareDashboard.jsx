import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Outlet } from "react-router-dom";

const SpareDashboard = () => {
  // State to toggle sections
  const [showVehicle, setShowVehicle] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="grid grid-cols-12 gap-6 mt-20">
      {/* FILTER SIDEBAR */}
      <div className="col-span-3 bg-white p-8 px-6 shadow-md rounded-lg sticky top-20 z-10 max-h-screen overflow-y-auto">
        {/* FILTER HEADER */}
        <div className="flex items-center space-x-3 mb-6">
          <VscSettings className="text-2xl text-gray-700" />
          <h2 className="text-xl font-semibold">FILTER</h2>
        </div>

        {/* VEHICLE COMPATIBILITY SECTION */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowVehicle(!showVehicle)}
          >
            <h3 className="text-lg font-semibold">Vehicle Compatibility</h3>
            {showVehicle ? <IoIosArrowUp className="text-2xl" /> : <IoIosArrowDown className="text-2xl" />}
          </div>
          {showVehicle && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Type your car brand name"
                className="w-full p-3 border rounded-lg text-lg"
              />
              <input
                type="text"
                placeholder="Type your car model"
                className="w-full p-3 border rounded-lg text-lg"
              />
              <input
                type="text"
                placeholder="Type your spare part name or number"
                className="w-full p-3 border rounded-lg text-lg"
              />
            </div>
          )}
        </div>

        <hr className="my-6" />

        {/* CATEGORY SECTION */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowCategory(!showCategory)}
          >
            <h3 className="text-lg font-semibold">Category</h3>
            {showCategory ? <IoIosArrowUp className="text-2xl" /> : <IoIosArrowDown className="text-2xl" />}
          </div>
          {showCategory && (
            <div className="space-y-3">
              {[
                "Engine Part",
                "Brakes and Suspension",
                "Battery & Electricals",
                "Body and Exterior",
                "Oil and Fluids",
              ].map((category, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input type="checkbox" id={category} className="cursor-pointer text-xl" />
                  <label htmlFor={category} className="text-lg">{category}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <hr className="my-6" />

        {/* PRICE RANGE SECTION */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowPrice(!showPrice)}
          >
            <h3 className="text-lg font-semibold">Price Range</h3>
            {showPrice ? <IoIosArrowUp className="text-2xl" /> : <IoIosArrowDown className="text-2xl" />}
          </div>
          {showPrice && (
            <div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between mt-3">
                <input
                  type="text"
                  className="border p-3 w-[45%] text-center text-lg"
                  value={priceRange[0]}
                  readOnly
                />
                <input
                  type="text"
                  className="border p-3 w-[45%] text-center text-lg"
                  value={priceRange[1]}
                  readOnly
                />
              </div>
            </div>
          )}
        </div>

        <hr className="my-6" />

        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition text-lg">
          Search
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="col-span-9 p-8 ">
        {/* Render dynamic route components here */}
        <Outlet />
      </div>
    </div>
  );
};

export default SpareDashboard;
