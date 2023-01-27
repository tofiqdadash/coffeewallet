import React from "react";
import product_mobile from "../coffeephotos/product_mobile.png";
import Carousel from "./carousel/Carousel";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Carousel />

      <div className="our-app">
        <img src={product_mobile} alt="download app" />
        <h3>
          Userfriendly app with innovative solutions and creative ideas.
          CoffeeWallet app inspires an appetite for living live to the maximum
          and joy
        </h3>
      </div>
    </div>
  );
};

export default Home;
