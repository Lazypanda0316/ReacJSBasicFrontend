import React from 'react'
import {FaFacebook} from "react-icons/fa"
import {FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const getLatestYEar = new Date().getFullYear()
 
  return (
    <div className="font-archivo bg-sky-800 text-white py-10 my-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div className="flex flex-col items-center md:items-start">
          <img src="images/CodescLogo.png" className="w-70 h-auto mb-4" alt="Codesc Logo" />
          <p className="text-center md:text-left text-xm">
            Provides cutting-edge IT solutions to help businesses grow and succeed in today's digital landscape.
          </p>
          <div className="flex space-x-4 mt-4">
            <NavLink to="/insta"><FaLinkedin size={30} className="cursor-pointer hover:text-blue-700" /></NavLink>
            <FaFacebook size={30} className="cursor-pointer hover:text-blue-700" />
            <FaInstagram size={30} className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        <div>
          <p className="font-bold text-2xl mb-4 text-center md:text-left">Company</p>
          <nav>
            <ul className="space-y-2 text-center md:text-left text-xs">
              <li className="hover:text-blue-700 cursor-pointer"><NavLink to="/home">Home</NavLink></li>
              <li className="hover:text-blue-700 cursor-pointer"><NavLink to="/about-us">About Us</NavLink></li>
              <li className="hover:text-blue-700 cursor-pointer"><NavLink to="/projects">Projects</NavLink></li>
              <li className="hover:text-blue-700 cursor-pointer"><NavLink to="/meet-our-team">Meet Our Team</NavLink></li>
              <li className="hover:text-blue-700 cursor-pointer"><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-2xl mb-4 text-center md:text-left">Contact Info</p>
          <nav>
            <ul className="space-y-2 text-center md:text-left text-xs">
              <li>Ratopul, Battisputali, Kathmandu, Nepal</li>
              <li>9803180211, 9843222188, 9840253132</li>
              <li>info@codescnepal.com</li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className='mt-3' />

      <div className="mt-3 text-xs text-center">
        <p>@ {getLatestYEar} All Rights Reserved @Codesc Nepal</p>
      </div>
    </div>
  );
};

export default Footer;
