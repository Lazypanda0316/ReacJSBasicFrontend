import React, { useState } from "react";
import SpareHeader from "../../components/header/SpareHeader";
import SpareCategory from "../spareCategory/SpareCategory";
import SpareFeatures from "../spareFeatures/SpareFeatures";
import SpareHowItWorks from "../spareHowItWorks/SpareHowItWorks";
import SpareServices from "../spareServices/SpareServices";
import SpareFooter from "../../components/footer/SpareFooter";
import SpareAboutUs from "../spareAboutUs/SpareAboutUs";

const SpareParts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <SpareHeader />
      <div
        className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 bg-gray-100 text-black relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/spare2.jpg')" }}
      >
        <div className="px-4 md:px-8 text-center md:text-left">
          <p className="tracking-wide text-4xl sm:text-5xl md:text-7xl font-semibold font-family-archivo">
            Find the <span className="text-red-500">Perfect Spare</span> in <br className="hidden md:block" /> Seconds!
          </p>

          <h2 className="text-lg sm:text-xl mt-2 md:mt-4 text-gray-500">
            Search by part number or name – fast, easy, reliable.
          </h2>

          <div className="mt-6 md:mt-10 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <select className="p-4 md:p-6 border border-gray-300 rounded-md bg-white text-gray-600 w-full md:w-auto">
                <option>Select Your Location</option>
                <option>Kathmandu</option>
                <option>Lalitpur</option>
                <option>Bhaktapur</option>
              </select>

              <select className="p-4 md:p-6 border border-gray-300 rounded-md bg-white text-gray-600 w-full md:w-auto">
                <option>Select Car Model</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>BMW</option>
              </select>
            </div>

            <select className="p-4 md:p-6 border border-gray-300 rounded-md bg-white text-gray-600 w-full">
              <option>Select Your Spare</option>
              <option>Brake Pads</option>
              <option>Oil Filter</option>
              <option>Battery</option>
            </select>
          </div>

          <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-red-500 text-white shadow-lg hover:opacity-80 transition mt-6 md:mt-10 w-full md:w-auto">
            Find My Spare
          </button>
        </div>

        <div className="hidden md:block">
          <img
            src="/images/spare1.png"
            className="rounded-bl-[100px] md:rounded-bl-[200px] h-auto max-h-[80vh] w-auto max-w-lg md:max-w-xl lg:max-w-2xl absolute top-1 right-0"
            alt="Mechanic Working on Car"
          />
        </div>
      </div>
      <SpareCategory />
      <SpareFeatures />
      <SpareHowItWorks />
      <SpareServices />
      <SpareAboutUs />
      <SpareFooter />
    </>
  );
};

export default SpareParts;