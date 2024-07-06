import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';

const AddEmployeeModal = ({ open, handleClose, createEmployee }) => {
  const [EmployeeData, setEmployeeData] = useState({
    identification: "",
    name: "",
    phone: "",
    job: "",
    salary: "",
    horary: ""
  });

  const handleChange = (event) => {
    setEmployeeData({ ...EmployeeData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createEmployee(EmployeeData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <h2 id="modal-title">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={EmployeeData.name}
            onChange={handleChange}
            required
          />
          <TextField
            id="identification"
            name="identification"
            label="identification Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type='number'
            value={EmployeeData.identification}
            onChange={handleChange}
            required
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type='number'
            value={EmployeeData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            id="job"
            name="job"
            label="job or position"
            variant="outlined"
            fullWidth
            margin="normal"
            value={EmployeeData.job}
            onChange={handleChange}
            required
          />
          <TextField
            id="salary"
            name="salary"
            label="salary"
            variant="outlined"
            fullWidth
            margin="normal"
            value={EmployeeData.salary}
            type='number'
            onChange={handleChange}
            required
          />
          <TextField
            id="horary"
            name="horary"
            label="Horary"
            variant="outlined"
            fullWidth
            margin="normal"
            type='text'
            value={EmployeeData.horary}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
            Close
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddEmployeeModal;
