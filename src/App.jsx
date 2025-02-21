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
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import Projects from "./pages/project/Projects";
import AllMail from "./components/admin/allMail/AllMail";
import AddProduct from "./components/admin/addproduct/AddProduct";
import ScrollTop from "./pages/scrollTop/ScrollTop";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

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
          <Route
            path="/product-view/:id"
            element={<ProductView items={items} />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/admin-dashboard" element={<SideBar />}>
            <Route index element={<AdminDashboard />} />
            <Route path="all-mail" element={<AllMail />} /> 

            <Route path="add-product" element={<AddProduct />} />
          </Route>

          <Route path="/project" element={<Projects />} />
          <Route path="user" element={<UserLayout />}>
            <Route index element={<ProfileInformation />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="order-history" element={<UserOrderHistory />} />
            <Route path="tranaction-history" element={<TranactionHistory />} />

          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
        {/* <Footer /> */}
        <ScrollTop/ >
      </Router>
    </>
  );
}

export default App;
