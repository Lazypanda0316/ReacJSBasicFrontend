import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SpareHeader = () => {
  return (
    <div className='relative top-0 left-0 w-full z-40 px-4 md:px-10 lg:px-15 bg-white shadow-md'>
      <div className='flex flex-wrap justify-between items-center p-4 md:p-6'>
        {/* Logo Section */}
        <NavLink to="/">
          <img src="/images/sparelogo.png" alt="Spare Logo" className="h-10 md:h-[60px] w-auto" />
        </NavLink>
        
        {/* Navigation Links */}
        <div className='hidden md:flex gap-6 lg:gap-10 font-semibold'>
          <NavLink to="/home" className="text-black text-base lg:text-xl hover:text-red-500 transition duration-300">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-black text-base lg:text-xl hover:text-red-500 transition duration-300">
            Shop Parts
          </NavLink>
          <NavLink to="/about" className="text-black text-base lg:text-xl hover:text-red-500 transition duration-300">
            About Us
          </NavLink>
          <NavLink to="/contact" className="text-black text-base lg:text-xl hover:text-red-500 transition duration-300">
            Contact Us
          </NavLink>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="rounded-xl bg-gray-100 flex items-center px-3 py-2 md:px-4 md:py-2 hover:bg-gray-500 transition duration-300">
            My Cart
            <AiOutlineShoppingCart className="text-black text-xl md:text-2xl ml-2 cursor-pointer hover:text-red-500 transition duration-300" />
          </button>
          <FaUser className="text-black text-xl md:text-2xl cursor-pointer hover:text-red-500 transition duration-300" />
        </div>
      </div>
    </div>
  )
}

export default SpareHeader