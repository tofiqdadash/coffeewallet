import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div className="Signup">
      <form>
        <Box
          className="signup-form-content"
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={10}
          padding={3}
          borderRadius={5}
          // boxShadow={"5px 5px 10px #ccc"}
          // sx={{
          //   ":hover": {
          //     boxShadow: "10px 10px 20px #ccc",
          //   },
          // }}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            {isSignUp ? "Sign up" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}

          {isSignUp && (
            <TextField
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Surname"
            />
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

          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />

          {/* Login button */}
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="success"
          >
            {isSignUp ? "Sign up" : "Login"}
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
