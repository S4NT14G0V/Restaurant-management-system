import React, { useState } from 'react';

function AddEmployee({ onSubmit }) {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    identification: '',
    phone: '',
    job: '',
    salary: '',
    horary: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newEmployee); // Llama a la función onSubmit con el nuevo empleado
    setNewEmployee({
      name: '',
      identification: '',
      phone: '',
      job: '',
      salary: '',
      horary: ''
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} required />
          </label>
          <label>
            Identificación:
            <input type="text" name="identification" value={newEmployee.identification} onChange={handleInputChange} required />
          </label>
          <label>
            Teléfono:
            <input type="text" name="phone" value={newEmployee.phone} onChange={handleInputChange} required />
          </label>
          <label>
            Puesto:
            <input type="text" name="job" value={newEmployee.job} onChange={handleInputChange} required />
          </label>
          <label>
            Salario:
            <input type="text" name="salary" value={newEmployee.salary} onChange={handleInputChange} required />
          </label>
          <label>
            Horario:
            <input type="text" name="horary" value={newEmployee.horary} onChange={handleInputChange} required />
          </label>
          <button type="submit">Agregar Empleado</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
