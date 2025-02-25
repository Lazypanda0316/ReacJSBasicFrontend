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
        className="h-screen w-full flex items-center justify-between px-10 bg-gray-100 text-black relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/spare2.jpg')" }}
      >
        <div className=" px-8 text-left ">
          <p className="tracking-wide text-7xl font-semibold font-family-archivo">
            Find the <span className="text-red-500">Perfect Spare</span> in{" "}
            <br />
            Seconds!
          </p>

          <h2 className="text-xl mt-4 text-gray-500">
            Search by part number or name – fast, easy, reliable.
          </h2>

          <div className="mt-15 space-y-4">
            <div className="flex gap-4">
              <select className=" p-7 px-43 border border-gray-300 rounded-md bg-white text-gray-600">
                <option>Select Your Location</option>
                <option>Kathmandu</option>
                <option>Lalitpur</option>
                <option>Bhaktapur</option>
              </select>

              <select className=" p-7 px-43 border border-gray-300 rounded-md bg-white text-gray-600">
                <option>Select Car Model</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>BMW</option>
              </select>
            </div>

            <select className="p-7 px-45 border border-gray-300 rounded-md bg-white text-gray-600">
              <option>Select Your Spare</option>
              <option>Brake Pads</option>
              <option>Oil Filter</option>
              <option>Battery</option>
            </select>
          </div>

          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-white shadow-lg hover:opacity-80 transition mt-15 w-full">
            Find My Spare
          </button>
        </div>

        <div>
          <img
            src="/images/spare1.png"
            className="rounded-bl-[200px] h-[940px] w-[750px] absolute top-1 right-0"
            alt="Mechanic Working on Car"
          />
        </div>
      </div>
      <SpareCategory />
      <SpareFeatures/>
      <SpareHowItWorks/>
      <SpareServices/>
      <SpareAboutUs/>
      <SpareFooter/>
      
     
    </>
  );
};

export default SpareParts;
