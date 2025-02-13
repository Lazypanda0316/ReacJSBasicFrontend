import React, { useState } from 'react';
import ExtraHeader from '../../components/header/ExtraHeader';
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ContactUs = () => {
    const [contactValue, setContactValue] = useState({
      fullName: "",
      email: "",
      phone:"",
      message:"",
    });
  
    const { fullName, email, phone, message } = contactValue;
  
    const handleChange = (e) => {
      let { name, value } = e.target;
      setContactValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted successfully!");
      alert("Form Submitted successfully!");
    };
  return (
    <div>
    {/* <ExtraHeader/> */}
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <form onSubmit={handleSubmit} className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <h1 className="font-bold text-2xl text-gray-700 text-center mb-4">
              Contact Our Team
            </h1>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="mb-2 mt-2 w-90 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Full Name"
              name="fullName"
                value={fullName}
                onChange={handleChange}
            />
            <label className="block text-gray-700 mt-1">Email</label>
            <input
              type="email"
              className="mb-2 mt-2 w-90 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email"
              name="email"
                value={email}
                onChange={handleChange}
            />
            <label className="block text-gray-700 mt-1">Phone Number</label>
            <input
              type="text"
              className="mb-2 mt-2 w-90 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Phone Number"
              name="phone"
                value={phone}
                onChange={handleChange}
            />
            <label className="block text-gray-700 mt-1">Message</label>
            <textarea
              className="mb-2 mt-2 w-90 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Message"
              name="message"
                value={message}
                onChange={handleChange}
            />
            <button className="w-90 bg-gradient-to-r from-fuchsia-500 to-blue-800 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-700 mt-1">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-15">
          <h1 className="text-5xl font-bold">Let's Connect</h1>
          <p className="text-lg font-light font-archivo mt-4">
            Have a goal or Codesx journey you'd like to explore and need guidance? Reach out to us. We'd love to assist you in achieving your coding journey.
          </p>
          <h2 className='text-2xl font-semibold mt-5'>Contact Us</h2>
            <p className="flex items-center gap-2 text-sm mt-4">
              <IoMail /> info@codescnepal.com
            </p>
          <p className='flex items-center gap-2 text-sm mt-4'>
            <FaPhoneAlt/> +977-9851027610 / +977-9847908764
          </p>
          <h2 className='text-2xl font-semibold mt-5'>Socials</h2>
          <p className="flex items-center gap-4 text-lg mt-5">
           <FaLinkedin  size={30} className="cursor-pointer hover:text-blue-700"/>
           <FaFacebook  size={30} className="cursor-pointer hover:text-blue-700"/>
           <RiInstagramFill  size={30} className="cursor-pointer hover:text-pink-500"/>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;