import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/DynamicTable';
import AddEmployee from '../components/AddEmployee';
import { apiUrls } from './ApiUrls';

function Empleados() {
  const [data, setData] = useState({ columns: [], rows: [] });
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    fetch(apiUrls.employee.all, {
      cache: 'no-cache'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(employeesData => {
        const formattedData = {
          columns: [
            { id: 'id', label: 'ID del Empleado', align: 'center' },
            { id: 'identification', label: 'Identificación', align: 'center' },
            { id: 'name', label: 'Nombre', align: 'center' },
            { id: 'phone', label: 'Teléfono', align: 'center' },
            { id: 'job', label: 'Puesto', align: 'center' },
            { id: 'salary', label: 'Salario', align: 'center' },
            { id: 'horary', label: 'Horario', align: 'center' },
          ],
          rows: employeesData.map(employee => ({
            id: employee.id,
            identification: employee.identification,
            name: employee.name,
            phone: employee.phone,
            job: employee.job,
            salary: `$${employee.salary}`,
            horary: employee.horary,
          })),
        };
        setData(formattedData);
      })
      .catch(error => {
        console.error("There was an error fetching the employees data!", error);
        setError("There was an error fetching the employees data.");
      });
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleAddEmployee = (newEmployee) => {
    fetch(apiUrls.employee.create, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee)
    })
      .then(response => response.json())
      .then(data => {
        console.log('New employee added:', data);
        fetchEmployees(); // Actualizar la lista de empleados después de agregar uno nuevo
      })
      .catch(error => {
        console.error('Error adding new employee:', error);
      });
  };

  return (
    <div className="content-container">
      <div className='content-container-table'>
      <div >
        {error ? (
          <div>{error}</div>
        ) : (
          <DynamicTable columns={data.columns} rows={data.rows} />
        )
        }
        
        <button onClick={toggleModal}>Agregar Empleado</button>

        {showModal && <AddEmployee onSubmit={handleAddEmployee} />}
        </div>
      </div>
    </div>
  );
}

export default Empleados;
