import React, { useState } from "react";
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
import ApplyPartnership from "./ApplyPartnership";

const OurPartners = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleClick = () => setShowApplyModal(true);
  const handleClose = () => setShowApplyModal(false);

  return (
    <div className="our-partners">
      <div className="apply-partnership">
        <button onClick={handleClick}>Apply for partnership</button>
      </div>

      {showApplyModal && (
        <ApplyPartnership
          showApplyModal={showApplyModal}
          setShowApplyModal={setShowApplyModal}
          handleClose={handleClose}
        />
      )}

      <h2>Our Partners</h2>

      <div>
        <Marquee pauseOnHover speed={50} direction="right">
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
    </div>
  );
};

export default OurPartners;
