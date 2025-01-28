import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import AboutUs from "./pages/aboutUs/AboutUs"


function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

      </Routes>
      <Footer />
    </Router>
    
    </>
  )
}

export default App
