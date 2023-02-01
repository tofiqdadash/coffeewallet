import React from "react";
import product_mobile from "../coffeephotos/product_mobile.png";
import Carousel from "./carousel/Carousel";
import OurPartners from "./OurPartners";
import appstore from "../coffeephotos/appstore.jpeg";
import playstore from "../coffeephotos/playstore.jpeg";
import NavBar from './navbar1/NavBar';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Carousel />
      <OurPartners />
      <div className="our-app">
        <div className="product">
        <img src={product_mobile} alt="download app" className="app-version" />
        <h3>
          Userfriendly app with innovative solutions and creative ideas.
          CoffeeWallet app inspires an appetite for living live to the maximum
          and joy
        </h3>
        </div>
        <div className="download-app">
          <img src={playstore} alt="playstore logo" />
          <img src={appstore} alt="appstore logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
