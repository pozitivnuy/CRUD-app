import React, { useState } from "react";
import FieldForm from "./FieldForm";
import AddUsersForm from "./AddUsersForm";
import EditUsersForm from "./EditUsersForm";
import { Container, Button, Grid } from "@mui/material/";

function Main() {
  const usersData = [
    { id: 1, name: "Vitaliy", lastName: "Kravets" },
    { id: 2, name: "Anna", lastName: "Karenina" },
  ];

  const [users, setUsers] = useState(usersData);
  const [edit, setUserEdit] = useState(false);
  const tamplate = { id: null, name: "", lastName: "" };
  const [currentUserEditing, setCurrenrUserEditing] = useState(tamplate);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUserEdit(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedEditUser) => {
    setUserEdit(false);
    setUsers(users.map((user) => (user.id === id ? updatedEditUser : user)));
  };

  const editFlag = (user) => {
    setUserEdit(true);
    setCurrenrUserEditing({
      id: user.id,
      name: user.name,
      lastName: user.lastName,
    });
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <h1>SSI CRUD App</h1>
        <Button variant="outlined" onClick={handleLogout}>
          Log out
        </Button>
        <div>
          <div>
            {edit ? (
              <div>
                <h3>Edit User: </h3>
                <EditUsersForm
                  edit={edit}
                  setUserEdit={setUserEdit}
                  currentUserEditing={currentUserEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h3>Add User </h3>
                <AddUsersForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="">
            <h3>View our users</h3>
            <FieldForm
              users={users}
              editFlag={editFlag}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default Main;
