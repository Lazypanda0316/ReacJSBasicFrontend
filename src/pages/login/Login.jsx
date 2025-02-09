import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import ExtraHeader from "../../components/header/ExtraHeader";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginValue;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted successFully!");
    alert("Login Form Submitted successFully!");
  };
  return (
    <div className="relative min-h-screen">
      <ExtraHeader />
      <div className="flex justify-center items-center h-full px-4">
        <div className="hidden lg:block lg:w-1/2 h-full">
          <img
            src="images/login.jpg"
            className="h-full w-full object-cover rounded-lg"
            alt="Login Background"
          />
        </div>

        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl text-gray-700 text-center mb-6">
            Welcome!
          </h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <button className="text-xs text-gray-700 hover:text-blue-500">
                Forgot Password?
              </button>
            </div>
            <button className="w-full bg-gradient-to-r from-fuchsia-500 to-blue-800 text-white p-3 rounded-lg transition duration-300 hover:bg-blue-700">
              Login
            </button>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <NavLink to="/sign-up" className="text-blue-500 hover:underline">
                Sign Up
              </NavLink>
            </p>
            <p className="text-center mt-4">Or, Log in with</p>
            <div className="flex justify-center space-x-4 mt-4">
              <FcGoogle className="text-3xl" />
              <FaFacebook className="text-3xl" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;