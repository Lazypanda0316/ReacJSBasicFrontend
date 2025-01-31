import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import AboutUs from "./pages/aboutUs/AboutUs"
import HowWeWork from "./pages/howWeWork/HowWeWork"


function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-we-work" element={<HowWeWork />}/>

      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App
