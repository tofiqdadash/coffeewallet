import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const ApplyPartnership = ({
  handleClose,
  showApplyModal,
  setShowApplyModal,
}) => {
  const handleClick = () => setShowApplyModal(false);

  return (
    <div className="apply-partnership-modal">
      <form className="ap-content">
        <i onClick={handleClick} className="fas fa-times"></i>
        <h4>Apply for partnership</h4>
        <TextField
          className="outlined-basic"
          label="Coffee shop name"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Number of locations"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Email address"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Contact number"
          variant="outlined"
        />
        <Button>Apply</Button>
      </form>
    </div>
  );
};

export default ApplyPartnership;
