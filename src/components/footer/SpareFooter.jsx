import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SpareFooter = () => {
  return (
    <div className="bg-black text-white py-10 px-20 ">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/sparelogo2.png" alt="EZE Garage" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Eze Garage simplifies ordering authentic car parts online with an
            intuitive platform and fast delivery. Trust us for quality parts
            and smooth transactions.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-gray-400 hover:text-white text-xl cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white text-xl cursor-pointer" />
            <FaXTwitter className="text-gray-400 hover:text-white text-xl cursor-pointer" />
          </div>
        </div>

        {/* Middle Section - Company Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">Sign Up</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-3">Contact Information</h3>
          <p className="text-gray-400 text-sm">Ratopul, Kathmandu</p>
          <p className="text-gray-400 text-sm">9811111111, 9811222222</p>
          <p className="text-gray-400 text-sm">ezegarage@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SpareFooter;
