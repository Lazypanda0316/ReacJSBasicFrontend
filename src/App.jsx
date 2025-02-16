import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import HowWeWork from "./pages/howWeWork/HowWeWork";
import { useEffect, useState } from "react";
import ProductView from "./pages/productView/ProductView";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/SignUp";
import ContactUs from "./pages/contactUs/ContactUs";
import SideBar from "./components/admin/sideBar/SideBar";
import UserLayout from "./components/userLayout/UserLayout";
import ProfileInformation from "./pages/profileInformation/ProfileInformation";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserOrderHistory from "./pages/userOrderHistory/UserOrderHistory";
import TranactionHistory from "./pages/tranactionHistory/TranactionHistory";


function App() {
  const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    const fetchedData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log(`Fetching Error: ${error}`);
      }
    };

    fetchedData();
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
    
      <Router>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-view/:id" element={<ProductView items={items} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/side-bar" element={<SideBar/>}/>

          <Route path="/user" element={<UserLayout />}>
          <Route index element={<ProfileInformation />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="order-history" element={<UserOrderHistory />} />
          <Route path="tranaction-history" element={<TranactionHistory/>}/>


          </Route>
 
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
