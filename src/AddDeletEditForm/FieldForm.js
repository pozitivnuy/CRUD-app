import React from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container';

function FieldForm(props) {
  
  const deleteUsersHendler = (id) => {
    const sure = window.confirm("Are you sure for you want to delete this user ?");
    
    if (sure) {
      props.deleteUser(id);
    }
  };

  return (
    <Container maxWidth="sm">
    <TableContainer component={Paper}  >
      <Table  size="small"  aria-label="simple table">
        
        <TableHead>
          <TableRow>
            <TableCell>Name: </TableCell>
            <TableCell align="right">Last Name: </TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <TableRow key={user.id}  
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row">{user.name}</TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">
                  <Button className="" onClick={() => props.editFlag(user)}>Edit</Button>
                  <Button  
                    className=""
                    onClick={() => deleteUsersHendler(user.id)}
                  >
                    Delete
                  </Button>
            
                </TableCell>
              </TableRow>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}


export default FieldForm;


{/* <div >
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Last Name</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {props.users.length > 0 ? (
      props.users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
          <td>
            <Button className="" onClick={() => props.editFlag(user)}>Edit</Button>
            <Button  
              className=""
              onClick={() => deleteUsersHendler(user.id)}
            >
              Delete
            </Button>
      
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}
  </tbody>
</table>
</div> */}