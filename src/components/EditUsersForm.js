import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function EditUsersForm(props) {
  const [user, setUser] = useState(props.currentUserEditing);

  useEffect(() => {
    setUser(props.currentUserEditing);
  }, [props]);

  const handleEditUserInput = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user.name || !user.lastName) return;
    props.updateUser(user.id, user);
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
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name: "
          variant="standard"
          size="small"
          type="text"
          name="name"
          value={user.name}
          onChange={handleEditUserInput}
        />

        <TextField
          id="standard-basic"
          label="Last Name: "
          variant="standard"
          size="small"
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleEditUserInput}
        />

        <Button size="small" variant="text" type="submit">
          Edit user:
        </Button>
        <Button
          size="small"
          variant="text"
          onClick={() => props.setUserEdit(false)}
        >
          Cancel
        </Button>
      </Box>
    </div>
  );
}

export default EditUsersForm;
