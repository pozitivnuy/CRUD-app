import React, { useState } from "react";
import { Box, Button, TextField, Container, Grid } from "@mui/material/";

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (
      userData.username === "admin" &&
      userData.password === "12345678"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };

  return (
    <Container maxWidth="xs">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <h1>Sign In User</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <div>
            <TextField
              id="standard-basic "
              label="Username: "
              variant="standard"
              size="small"
              className="form-control"
              type="text"
              name="username"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="Password: "
              variant="standard"
              size="small"
              className="form-control"
              type="password"
              name="password"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <Button
            size="small"
            variant="text"
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>

          {errorMessage.value && (
            <p className="text-danger"> {errorMessage.value} </p>
          )}
        </Box>
      </Grid>
    </Container>
  );
}

export default Signin;
