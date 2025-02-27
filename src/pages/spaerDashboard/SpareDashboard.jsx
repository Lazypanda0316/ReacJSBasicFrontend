import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Outlet } from "react-router-dom";

const SpareDashboard = () => {
  const [showVehicle, setShowVehicle] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-4 mt-12">
      {/* FILTER SIDEBAR */}
      <div className="col-span-1 sm:col-span-3 lg:col-span-3 bg-white p-6 px-4 shadow-md rounded-lg sticky top-20 z-10 max-h-screen overflow-y-auto">
        {/* FILTER HEADER */}
        <div className="flex items-center space-x-3 mb-5">
          <VscSettings className="text-xl text-gray-700" />
          <h2 className="text-lg font-semibold">FILTER</h2>
        </div>

        {/* VEHICLE COMPATIBILITY SECTION */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowVehicle(!showVehicle)}
          >
            <h3 className="text-md font-semibold">Vehicle Compatibility</h3>
            {showVehicle ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </div>
          {showVehicle && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Type your car brand name"
                className="w-full p-2 border rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Type your car model"
                className="w-full p-2 border rounded-lg text-sm"
              />
              <input
                type="text"
                placeholder="Type your spare part name or number"
                className="w-full p-2 border rounded-lg text-sm"
              />
            </div>
          )}
        </div>

        <hr className="my-5" />

        {/* CATEGORY SECTION */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowCategory(!showCategory)}
          >
            <h3 className="text-md font-semibold">Category</h3>
            {showCategory ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </div>
          {showCategory && (
            <div className="space-y-2">
              {[
                "Engine Part",
                "Brakes and Suspension",
                "Battery & Electricals",
                "Body and Exterior",
                "Oil and Fluids",
              ].map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input type="checkbox" id={category} className="cursor-pointer text-xl" />
                  <label htmlFor={category} className="text-sm">{category}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <hr className="my-5" />

        {/* PRICE RANGE SECTION */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => setShowPrice(!showPrice)}
          >
            <h3 className="text-md font-semibold">Price Range</h3>
            {showPrice ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </div>
          {showPrice && (
            <div>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between mt-3">
                <input
                  type="text"
                  className="border p-2 w-[45%] text-center text-sm"
                  value={priceRange[0]}
                  readOnly
                />
                <input
                  type="text"
                  className="border p-2 w-[45%] text-center text-sm"
                  value={priceRange[1]}
                  readOnly
                />
              </div>
            </div>
          )}
        </div>

        <hr className="my-5" />

        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition text-sm">
          Search
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-9 p-6">
        {/* Render dynamic route components here */}
        <Outlet />
      </div>
    </div>
  );
};

export default SpareDashboard;
