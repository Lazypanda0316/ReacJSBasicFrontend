import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SpareHeader = () => {
  return (
    <div className=' relative top-0 left-0 w-full z-40 px-15'>
      <div className='flex justify-between items-center p-6'>
        {/* Logo Section */}
        <NavLink to="/">
          <img src="/images/sparelogo.png" alt="Spare Logo" className="h-[60px] w-[200px]" />
        </NavLink>
        
        {/* Navigation Links */}
        <div className='flex gap-10 font-semibold'>
          <NavLink
            to="/home"
            className="text-black text-xl hover:text-red-500 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-black text-xl hover:text-red-500 transition duration-300"
          >
            Shop Parts
          </NavLink>
          <NavLink
            to="/about"
            className="text-black text-xl hover:text-red-500 transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="text-black text-xl hover:text-red-500 transition duration-300"
          >
            Contact Us
          </NavLink>
        </div>

        <div className="flex items-center gap-6">
        <button className="rounded-xl  bg-gray-100 flex items-center px-4 py-2 hover:bg-gray-500 transition duration-300">
  My Cart
  <AiOutlineShoppingCart className="text-black text-2xl ml-2 cursor-pointer hover:text-red-500 transition duration-300" />
</button>
          <FaUser className="text-black text-2xl cursor-pointer hover:text-red-500 transition duration-300" />
        </div>
      </div>
    </div>
  )
}

export default SpareHeader
