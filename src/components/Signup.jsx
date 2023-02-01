import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { FormControl, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from './navbar1/NavBar';

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [value, setValue] = useState(null);
  const [insideN, setInsideN] = useState("");
  const navigate = useNavigate();

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
            {isSignUp ? "Sign up" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField type={"text"} variant="outlined" placeholder="Name" />
          )}

          {isSignUp && (
            <TextField type={"text"} variant="outlined" placeholder="Surname" />
          )}

          {isSignUp && (
            <DatePicker
              className="datepicker"
              label="Your birthday"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
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
                placeholder="Number"
              />
            </FormControl>
          )}

          {isSignUp && (
            <TextField
              type={"text"}
              variant="outlined"
              placeholder="Current living address"
            />
          )}

          <TextField
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />

          {/* Login button */}
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="success"
            onClick={() => navigate("/userprofile")
          }
          >
            {isSignUp ? "Sign up as a User" : "Login as a User"}
          </Button>

          {/* Change to sign up button */}
          <Button sx={{ marginTop: 2 }} onClick={() => setIsSignUp(!isSignUp)}>
            Change to {isSignUp ? "Login" : "Sign up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
