import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import profilepic from "../coffeephotos/profilepic.webp";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ text }) => {
  const [src, setSrc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    QRCode.toDataURL(text).then(setSrc);
  }, [text]);

  return (
    <div className="userprofile">
      <nav className="userprofile-nav">
        <ul>
          <li>My dashboard</li>
          <li>FAQ</li>
          <li>Profile Info</li>
        </ul>
      </nav>

      <div className="user">
        <h4>Welcome User</h4>
        <img src={profilepic} alt="profile" />
      </div>

      <div className="profile-nav">
        <Button variant="outlined" onClick={() => navigate("/cashbackbalance")}>
          My Cash Back Balance
        </Button>
        <Button variant="outlined" onClick={() => navigate("/ordercoffee")}>
          Order Coffee
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/transactionhistory")}
        >
          Transaction History
        </Button>
        <Button variant="outlined" onClick={() => navigate("/mynotifications")}>
          My Notifications
        </Button>
      </div>

      <img src={src} className="qrcode" alt="qr code" />
    </div>
  );
};

export default UserProfile;
