// import About from "./components/About"
// import Appointment from "./components/Appointment"
// import Contact from "./components/Contact"
// import Doctors from "./components/Doctors"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar"
import Home from "./components/Home";
import About from "./components/About"
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import Woundcare from "./components/service/woundcare";
import BabySpa from "./components/service/babyspa";
import Login from "./components/login";
import Signup from "./components/SignUp";

function App() {
  return (
    <Router>
      <div id="root">
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/layanan-luka" element={<Woundcare />} />
            <Route path="/baby-spa" element={<BabySpa />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  )
}

export default App