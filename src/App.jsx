import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AboutUs from "./components/AboutUs";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignupCompany from "./components/SignupCompany";
import { BrowserRouter as Router } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import MyCashBackBalance from "./components/MyCashBackBalance";
import OrderCoffee from "./components/OrderCoffee";
import TransactionHistory from "./components/TransactionHistory";
import MyNotifications from "./components/MyNotifications";

function App({ text }) {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coffeewallet" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/signupforuser" element={<Signup />} />
              <Route path="/signupforcompany" element={<SignupCompany />} />
              <Route
                path="/userprofile"
                element={<UserProfile text={text} />}
              />
              <Route
                path="/cashbackbalance"
                element={<MyCashBackBalance text={text} />}
              />
              <Route path="/ordercoffee" element={<OrderCoffee />} />
              <Route
                path="/transactionhistory"
                element={<TransactionHistory />}
              />
              <Route path="/mynotifications" element={<MyNotifications />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;
