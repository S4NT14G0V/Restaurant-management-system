import React, { useState } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';

const AddTableModal = ({ open, handleClose, createTable }) => {
  const [TableData, setTableData] = useState({
    number: '',
    capacity: '',
  });

  const handleChange = (event) => {
    setTableData({ ...TableData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTable(TableData);
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
        <h2 id="modal-title">Add Table</h2>
        <form onSubmit={handleSubmit}>
          
          <TextField
            id="number"
            name="number"
            label="Table Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={TableData.number}
            onChange={handleChange}
            required
          />
          <TextField
            id="capacity"
            name="capacity"
            label="capacity"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={TableData.capacity}
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

export default AddTableModal;
