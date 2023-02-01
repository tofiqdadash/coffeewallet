import React from "react";
import { Button } from "@mui/material";
import profilepic from "../coffeephotos/profilepic.webp";

const UserProfile = () => {
  return (
    <div className="userprofile">
      <nav>
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
        <Button variant="outlined">My Cash Back Balance</Button>
        <Button variant="outlined">Order Coffee</Button>
        <Button variant="outlined">Transaction History</Button>
        <Button variant="outlined">My Notifications</Button>
      </div>
    </div>
  );
};

export default UserProfile;
