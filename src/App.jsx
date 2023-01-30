import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AboutUs from "./components/AboutUs";
import OurPartners from "./components/OurPartners";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/navbar1/NavBar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <NavBar />
        <div className="pages">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/coffeewallet" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/partners" element={<OurPartners />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LocalizationProvider>
    </Router>
  );
}

export default App;
