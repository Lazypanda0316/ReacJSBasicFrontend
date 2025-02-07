import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import HowWeWork from "./pages/howWeWork/HowWeWork";
import { useEffect, useState } from "react";
import ProductView from "./pages/productView/ProductView";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/SignUp";

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
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
