import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="app-navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            CoffeeWallet
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={handleClick}>
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/signupforcompany"
                className="nav-links"
                onClick={handleClick}
              >
                Apply for Partnership / Sign in
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/signupforuser" className="nav-links" onClick={handleClick}>
                User sign up / login 
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
