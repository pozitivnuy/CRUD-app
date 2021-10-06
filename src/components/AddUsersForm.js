import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function AddUsersForm(props) {
  const tamplate = { id: null, name: "", lastName: "" };
  const [user, setUser] = useState(tamplate);

  const hendlerInput = (event) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };
  const submitHendler = (event) => {
    event.preventDefault();
    if (!user.name || !user.lastName) return;

    props.addUser(user);
    setUser(tamplate);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHendler}
      >
        <TextField
          id="standard-basic"
          label="Name: "
          variant="standard"
          size="small"
          type="text"
          name="name"
          value={user.name}
          onChange={hendlerInput}
        />

        <TextField
          id="standard-basic"
          label="Last Name: "
          variant="standard"
          size="small"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={hendlerInput}
        />
        <Button type="submit" size="small" variant="text">
          Add new user
        </Button>
      </Box>
    </div>
  );
}

export default AddUsersForm;
