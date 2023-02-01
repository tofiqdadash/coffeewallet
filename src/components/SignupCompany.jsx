import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FormControl, OutlinedInput } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NavBar from './navbar1/NavBar';

const SignupCompany = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [insideN, setInsideN] = useState("");

  const handleChangeN = (event) => setInsideN(event.target.value);

  return (
    <div className="Signup">
      <NavBar />
      <form className="signupuser">
        <Box
          className="signup-form-content"
          display="flex"
          flexDirection={"column"}
          maxWidth={350}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={-5}
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            {isSignUp ? "Apply" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              type={"text"}
              variant="outlined"
              placeholder="Coffee shop name"
            />
          )}

          {isSignUp && (
            <TextField
              type={"text"}
              variant="outlined"
              placeholder="Number of locations"
            />
          )}

          <TextField type={"email"} variant="outlined" placeholder="Email" />

          {isSignUp && (
            <FormControl variant="standard">
              <OutlinedInput
                id="component-helper"
                aria-describedby="component-helper-text"
                variant="outlined"
                value={insideN}
                onChange={handleChangeN}
                placeholder="Contact number"
              />
            </FormControl>
          )}

          {isSignUp && (
            <TextField
              type={"text"}
              variant="outlined"
              placeholder="Enter Voen"
            />
          )}

          {isSignUp && (
            <TextField
              type={"text"}
              variant="outlined"
              placeholder="Contact person"
            />
          )}

          {isSignUp && (
            <FormGroup className="form-group">
              <FormControlLabel
                control={<Checkbox  />}
                label="Read Agree Terms / Conditions"
              />
            </FormGroup>
          )}

          {!isSignUp && (
            <TextField
              type={"password"}
              variant="outlined"
              placeholder="Password"
            />
          )}

          {/* Login button */}
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="success"
          >
            {isSignUp ? "Apply" : "Login"}
          </Button>

          {/* Change to sign up button */}
          <Button sx={{ marginTop: 2 }} onClick={() => setIsSignUp(!isSignUp)}>
            Change to {isSignUp ? "Login" : "Apply"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignupCompany;
