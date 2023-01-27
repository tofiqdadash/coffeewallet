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

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </LocalizationProvider>
  );
}

export default App;
