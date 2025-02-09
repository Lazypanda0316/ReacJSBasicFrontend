import React, { useState } from "react";
import ExtraHeader from "../../components/header/ExtraHeader";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [registerValue, setRegisterValue] = useState({
    fullName: "",
    email: "",
    address: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const { fullName, email, address, contact, password, confirmPassword } =
    registerValue;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted successFully!");
    alert("Form Submitted successFully!");
  };

  return (
    <div className="relative min-h-screen">
      <ExtraHeader />
      <div className="flex justify-center items-center h-full px-4">
        <div className="hidden lg:block w-1/2 h-full">
          <img
            src="images/signup.jpg"
            className="h-full w-full object-cover rounded-lg"
            alt="Sign Up Background"
          />
        </div>

        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl text-gray-700 text-center mb-2">
            Create Your Account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="mb-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your First Name"
                name="fullName"
                value={fullName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="mb-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="mb-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Address"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Contact</label>
              <input
                type="text"
                className="mb-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Contact Number"
                name="contact"
                value={contact}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mb-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                vlaue={confirmPassword}
                onChange={handleChange}
              />
            </div>
            <label className="flex items-center space-x-2 mb-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm text-gray-500">
                I agree with the terms and conditions.
              </p>
            </label>

            <button className="mb-2 w-full bg-gradient-to-r from-fuchsia-500 to-blue-800 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-700">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
