import React, { useState } from "react";
import "./App.css";
import FieldForm from "./AddDeletEditForm/FieldForm";
import AddUsersForm from "./AddDeletEditForm/AddUsersForm";
import EditUsersForm from "./AddDeletEditForm/EditUsersForm";
import Container from '@mui/material/Container';


function App() {
  const usersData = [
    { id: 1, name: "Vitaliy", lastName: "Kravets" },
    { id: 2, name: "Andray", lastName: "Antonuk" },
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
    setUserEdit(false)
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

  return (
    <Container maxWidth="sm" >
     
      <h1>CII CRUD app</h1>
      <div className="">
        <div className="">
          {edit ? (
            <div>
              <h2>Edit User </h2>
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
    </Container>
  );
}

export default App;
