import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SpareFooter = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-start">
          <img src="/images/sparelogo2.png" alt="EZE Garage" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Eze Garage simplifies ordering authentic car parts online with an
            intuitive platform and fast delivery. Trust us for quality parts
            and smooth transactions.
          </p>
          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <FaFacebookF className="text-gray-400 hover:text-white text-lg cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-white text-lg cursor-pointer" />
            <FaXTwitter className="text-gray-400 hover:text-white text-lg cursor-pointer" />
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-start sm:px-10 md:px-4">
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start sm:px-10 md:px-4">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">Sign Up</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start sm:px-10 md:px-4">
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
