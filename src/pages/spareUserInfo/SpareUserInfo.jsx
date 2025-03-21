import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actionSlice/authAction/authAction';
import { setClearError, setLogout } from '../../redux/features/authSlice/authSlice';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import { devAPIURL } from '../../redux/api/api';


const SpareUserInfo = () => {
  let imageURl = devAPIURL.replace("/api","")

    const {user,error} = useSelector((state)=>state.auth)
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    role: '',

  });

    const [avatar,setAvatar] = useState(null)
    const [avatarPreview,setAvatarPreview] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['day', 'month', 'year'].includes(name)) {
      setFormData({
        ...formData,
        dob: { ...formData.dob, [name]: value }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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

  useEffect(()=>{
    if(user){
      setFormData({
        fullName:user.fullName || "",
        email:user.email || "",
        mobile:user.mobile || "",
        role:user?.role || ""
      })

      setAvatarPreview(`${imageURl}/gallery/${user.avatar || null}`)

    }
  },[user])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info Submitted:', formData);
  };

  const handleLogout = ()=>{
    dispatch(setLogout())
    toast.success("Logoout successFully!")
    navigate("/login")
  }

 useEffect(() => {
    if (error) {
      dispatch(setClearError());
    }
  }, [error, dispatch]);
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch])
  return (
    <>
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
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

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Submit</button>
      </form>
    </div>
    <button className='px-4 py-3 cursor-pointer ' onClick={handleLogout}>Logout</button>
    </>
  );
};

export default SpareUserInfo;
