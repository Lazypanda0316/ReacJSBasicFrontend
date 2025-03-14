import { useNavigate } from "react-router-dom";
import React from "react";

const SpareFeatures = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <>
      <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="w-[50px] sm:w-[250px] md:w-[80px] h-auto"
        />
      </div>

      <div>
        <div className="flex items-center mb-6 px-6 sm:px-20 mt-7">
          <hr className="flex-grow border-t-3 border-red-500" />
          <span className="mx-4 text-4xl sm:text-5xl md:text-7xl text-red-500 font-bold">
            Featured Product
          </span>
          <hr className="flex-grow border-t-3 border-red-500" />
        </div>
      </div>

      <div>
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center items-center mb-6 px-6 sm:px-20 mt-10">
          <p>Top Picks for Your Car – Trusted by Thousands!</p>
        </div>

        {/* Product List */}
        <div className="flex justify-between gap-4 flex-wrap px-4 sm:px-10 md:px-20 mt-3">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="px-8 w-full sm:w-[45%] md:w-[30%] h-120 bg-white shadow-lg rounded-lg overflow-hidden mb-6 sm:mb-0">
              {/* Image Section */}
              <div className="relative w-full h-52 mt-7 overflow-hidden">
                <img
                  src={`/images/sparepart${4 + index}.png`}
                  alt="Spare Part"
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="p-4">
                <p className="text-gray-600 text-lg mt-4">
                  Bosch Premium FILTECH Oil Filter – Model 3323 | High-Performance Engine Protection
                </p>
                <p className="text-3xl text-red-500 font-semibold mt-3">Rs 3000/-</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center items-center mt-6">
          <button
            className="bg-black text-white p-4 px-10 rounded-lg mt-4 text-lg sm:text-xl"
            onClick={() => navigate("/spare-products")} // Correct navigation
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default SpareFeatures;
