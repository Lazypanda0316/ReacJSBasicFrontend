import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbHandClick } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";

const SpareHowItWorks = () => {
  return (
    <>
      {/* Logo Image */}
      <div className="flex justify-center mt-20">
        <img src="/images/sparehand.png" alt="Spare Hand" className="h-[54px] w-auto" />
      </div>

      {/* Section Title */}
      <div className="flex items-center my-7 px-60">
        <hr className="flex-grow border-t-3 border-red-500" />
        <span className="mx-4 text-3xl text-red-500 font-bold">How It Works</span>
        <hr className="flex-grow border-t-3 border-red-500" />
      </div>

      {/* Subtitle */}
      <div className="text-center mt-10 text-4xl font-bold">
        <p>Order in 3 Simple Steps!</p>
      </div>

      {/* Steps Section */}
<div className="flex justify-evenly w-full mt-10 mb-15">
  {/* Step 1 */}
  <div className="flex flex-col items-center text-center w-1/3">
    <BiSearchAlt size={150} className="text-orange-400" />
    <h1 className="text-2xl font-semibold mt-4">Search</h1>
    <p className="text-gray-400 tracking-wide text-lg mt-2 w-4/5">
      Enter the spare part name or number in the search bar.
    </p>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center text-center w-1/3">
    <TbHandClick size={150} className="text-orange-400" />
    <h1 className="text-2xl font-semibold mt-4">Select</h1>
    <p className="text-gray-400 tracking-wide text-lg mt-2 w-4/5">
      Choose the best option from verified listings.
    </p>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center text-center w-1/3">
    <CiDeliveryTruck size={150} className="text-orange-400" />
    <h1 className="text-2xl font-semibold mt-4">Get it Delivered</h1>
    <p className="text-gray-400 tracking-wide text-lg mt-2 w-4/5">
      Fast and secure delivery to your location.
    </p>
  </div>
</div>

    </>
  );
};

export default SpareHowItWorks;
