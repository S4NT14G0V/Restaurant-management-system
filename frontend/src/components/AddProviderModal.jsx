import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';

const AddProviderModal = ({ open, handleClose, createProvider }) => {
  const [providerData, setProviderData] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (event) => {
    setProviderData({ ...providerData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProvider(providerData);
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
        <h2 id="modal-title">Add Provider</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={providerData.name}
            onChange={handleChange}
            required
          />
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={providerData.phoneNumber}
            onChange={handleChange}
            required
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={providerData.address}
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

export default AddProviderModal;
