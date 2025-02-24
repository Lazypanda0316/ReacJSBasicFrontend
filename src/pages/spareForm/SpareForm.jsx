import React, { useState } from "react";

import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa"; 
import BgImage from "../../assets/images/Bgimage.jpg";
import LoginImage from "../../assets/images/SpareBgImage.png";

const SpareForm = () => {


  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="rounded-sm flex flex-col md:flex-row items-center w-full max-w-6xl px-8 md:px-12">
        {/* Left Side - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <img src={LoginImage} alt="Illustration" className="w-[90%] h-auto" />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 px-6 md:px-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">
            Your trusted partner for quality spare parts is here—let’s keep you moving forward!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={loginValue.email}
                onChange={handleChange}
                className="w-full px-3.5 h-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-600 transition"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password:</label>
              <div className="relative mt-2.5">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={loginValue.password}
                  onChange={handleChange}
                  className="w-full px-3.5 h-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-red-600 transition pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="text-right text-sm text-gray-500 hover:text-red-600 cursor-pointer">
              Forgot Your Password?
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white h-12 rounded-lg shadow-md hover:bg-gray-800"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or Login with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex gap-4">
            <button className="flex items-center justify-center w-full border p-3 h-12 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500 text-xl mr-2" /> Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full border p-3 h-12 rounded-lg hover:bg-gray-100 transition">
              <FaFacebook className="text-blue-600 text-xl mr-2" /> Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpareForm;