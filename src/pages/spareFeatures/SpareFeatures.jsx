import React from "react";

const SpareFeatures = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <img
          src="/images/sparehand.png"
          alt="Spare Hand"
          className="w-[] h-[54px]" // Adjust these values for desired image size
        />
      </div>
      <div>
        <div className="flex items-center mb-6 px-60 mt-7">
          <hr className="flex-grow border-t-3 border-red-500" />
          <span className="mx-4 text-7xl text-red-500 font-bold">
            Featured Product
          </span>
          <hr className="flex-grow border-t-3 border-red-500" />
        </div>
      </div>

      <div>
        <div className="font-bold text-3xl flex justify-center items-center mb-6 px-60 mt-10">
          <p>Top Picks for Your Car – Trusted by Thousands!</p>
        </div>
        <div className="flex justify-between gap-4 flex-wrap px-50">
          <div className="px-8 w-100 h-120 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-50 mt-7 overflow-hidden">
              <img
                src="/images/sparepart6.png"
                alt="Spare Part"
                className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="p-4">
              <p className="text-gray-600 text-lg mt-4 ">
                Bosch Premium FILTECH Oil Filter – Model 3323 | High-Performance
                Engine Protection
              </p>
              <p className="text-red-500 font-semibold mt-3">Rs 3000/-</p>
            </div>
          </div>

          <div className="px-8 w-100 h-120 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-52 mt-7 overflow-hidden">
              <img
                src="/images/sparepart5.png"
                alt="Spare Part"
                className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="p-4">
              <p className="text-gray-600 text-lg mt-4 ">
                Bosch Premium FILTECH Oil Filter – Model 3323 | High-Performance
                Engine Protection
              </p>
              <p className="text-red-500 font-semibold mt-3">Rs 3000/-</p>
            </div>
          </div>

          <div className="px-8 w-100 h-120 bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-52 mt-7 overflow-hidden">
              <img
                src="/images/sparepart4.png"
                alt="Spare Part"
                className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="p-4">
              <p className="text-gray-600 text-lg mt-4 ">
                Bosch Premium FILTECH Oil Filter – Model 3323 | High-Performance
                Engine Protection
              </p>
              <p className="text-red-500 font-semibold mt-3">Rs 3000/-</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-black text-white flex justify-center items-center p-7 px-15 rounded-lg mb-15 mt-15">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default SpareFeatures;
