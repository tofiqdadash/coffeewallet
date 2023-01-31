import React from "react";
import "./ourpartners.css";
import Marquee from "react-fast-marquee";
import blackespresso from "../logos/blackespresso.png";
import cafelix from "../logos/cafelix.jpg";
import clover from "../logos/clover.jpg";
import colorado from "../logos/colorado.jpg";
import langano from "../logos/langano.jpg";
import seattles from "../logos/seattles.jpg";
import spotcoffee from "../logos/spotcoffee.jpg";
import starbucks from "../logos/starbucks.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const OurPartners = () => {
  const navigate = useNavigate();

  return (
    <div className="our-partners">
      <h2>Our Partners</h2>

      <div className="react-fast-marquee">
        <Marquee pauseOnHover speed={30} direction="right" gradient={false}>
          <div className="image_wrapper">
            <img src={blackespresso} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={cafelix} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={clover} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={colorado} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={langano} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={seattles} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={spotcoffee} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={starbucks} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={blackespresso} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={cafelix} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={clover} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={colorado} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={langano} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={seattles} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={spotcoffee} alt="logo" />
          </div>

          <div className="image_wrapper">
            <img src={starbucks} alt="logo" />
          </div>
        </Marquee>
      </div>

      <Button
        variant="contained"
        className="apply-partnership"
        onClick={() => navigate("/signupforcompany")}
      >
        Apply for partnership
      </Button>
    </div>
  );
};

export default OurPartners;
