import React from "react";
import appstore from '../coffeephotos/appstore.jpeg';
import playstore from '../coffeephotos/playstore.jpeg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>CoffeeWallet &copy; 2023</p>
      <button>Contact Us</button>
      <div className="download-app">
        <img src={playstore} alt="playstore logo" />
        <img src={appstore} alt="appstore logo" />
      </div>
    </footer>
  );
};

export default Footer;
