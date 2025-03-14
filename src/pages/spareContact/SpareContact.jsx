import React from "react";
import SpareHeader from "../../components/header/SpareHeader";
import { ImLocation2 } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SpareContact = () => {
  return (
    <>
      {/* Header & Banner */}
      <div>
        <SpareHeader />
        <img
          src="/images/sparepart11.png"
          className="w-full"
          alt="broom broom"
        />
      </div>

      {/* Contact Heading */}
      <div className="flex justify-center text-4xl font-semibold mt-5">
        <p>
          CONTACT<span className="text-red-500"> US</span>
        </p>
      </div>

      {/* Contact Information and Form Layout */}
      <div className="mt-5 p-5 flex flex-col lg:flex-row gap-8 px-24">
        {/* Left Side: Contact Details */}
        <div className="w-full lg:w-1/2 p-8 rounded-lg shadow-md bg-gray-100">
          <h1 className="text-2xl font-medium mb-4">Get in Touch with Us</h1>
          <p className="text-xl font-light mb-6">
            Need help? Contact us for orders, product inquiries, or
            support—we’re here for you!
          </p>

          {/* Contact Details Container */}
          <div className="mt-5 p-8 ">
            {/* Location */}
            <div className="flex items-center gap-6 text-xl font-medium mb-13">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <ImLocation2 size={28} />
              </div>
              <div className="flex flex-col">
                <span>Location</span>
                <span className="font-light">Ratopul, Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 text-xl font-medium mb-13">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <CiMail size={28} />
              </div>
              <div className="flex flex-col">
                <span>Email</span>
                <span className="font-light">Ezegarage@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6 text-xl font-medium mb-13">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FaPhone size={28} />
              </div>
              <div className="flex flex-col">
                <span>Phone</span>
                <span className="font-light">+977-12345678910</span>
              </div>
            </div>

            <div className="mt-10">
              <hr className="border-t-2 border-gray-500" />
            </div>

            {/* Social Media */}
            <div className="text-3xl font-semibold mt-10 flex justify-center">
              <p>Follow Us on Social Media</p>
            </div>
            <div className="flex gap-8 mt-10 justify-center">
              <FaFacebookSquare className="text-blue-500" size={40} />
              <FaInstagram className="text-pink-600" size={40} />
              <FaSquareXTwitter className="text-red-500" size={40} />
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-medium mb-4">Contact Form</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label className="block text-xl font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-medium mb-2">Mobile Number</label>
              <input
                type="mobilenumber"
                name="mobilenumber"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Dropdown for Inquiry */}
            <div className="mb-4">
              <label className="block text-xl font-medium mb-2">Select Inquiry</label>
              <select
                name="inquire"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                <option value="" disabled selected>
                  Select an Inquiry
                </option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="order-inquiry">Order Inquiry</option>
                <option value="technical-support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-xl font-medium mb-2">Message</label>
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5 px-24 py-2">
        <p className="font-semibold text-2xl mb-5 ">Live map Location:</p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3534017702455!2d85.33569987611371!3d27.706372825533208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19002114198f%3A0x52f208002bfa067!2sCodesc%20Nepal%20Pvt%20LTd!5e0!3m2!1sen!2snp!4v1741940604796!5m2!1sen!2snp"
    width="100%" // Ensure width takes up 100% of the container width
    height="450"
    className="mb-5"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

    </>
  );
};

export default SpareContact;
