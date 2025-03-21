import React, { useEffect, useState } from "react";
import ExtraHeader from "../../components/header/ExtraHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/actionSlice/authAction/authAction";
import { toast } from "react-toastify";
import { setClearError } from "../../redux/features/authSlice/authSlice";

const Signup = () => {
  const { isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerValue, setRegisterValue] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [avatar,setAvatar] = useState(null)
  const [avatarPreview,setAvatarPreview] = useState(null)

  const { fullName, email, mobile, password, confirmPassword } = registerValue;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    if(file){
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = ()=>{
        setAvatarPreview(reader.result)
        setAvatar(file)

      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password is Incorrect");
    }
    const formData = new FormData()
    formData.append("fullName",fullName)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("avatar",avatar)
    formData.append("mobile",mobile)

    dispatch(userRegister({ formData, toast, navigate }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(setClearError());
    }
  }, [error, dispatch]);

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
              <label className="block text-gray-700">Contact</label>
              <input
                type="text"
                className="mb-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Contact Number"
                name="mobile"
                value={mobile}
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
            <div className="mb-2">
              <input
                type="file"
                accept="image/*"
                name="avatar"
                placeholder="Please upload file"
                className="border rounded-sm px-4 py-2 text-gray-500"
                onChange={handleFileInputChange}
              />
              {avatarPreview && (
                <img src={avatarPreview} alt="avatarPreview"/>
              )}
            </div>
            <label className="flex items-center space-x-2 mb-3">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-sm text-gray-500">
                I agree with the terms and conditions.
              </p>
            </label>

            <button
              className="mb-2 w-full bg-gradient-to-r from-fuchsia-500 to-blue-800 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
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
