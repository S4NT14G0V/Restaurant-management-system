import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/DynamicTable';
import AddEmployee from '../components/AddEmployeeModal';
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
        console.error("No se pudo obtener los datos de los empleados.", error);
        setError("No se pudo obtener los datos de los empleados.");
      });
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };


  const createEmployee = async (employeeData) => {
    try {
      const response = await fetch(apiUrls.employee.create, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchEmployees();

    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="content-container">
      <div className="content-container-action-mesa">
        <button className="content-action-button" onClick={toggleModal}>
          <img src="/images/mas_white.svg" alt="mas" />
          Agregar Empleado
        </button>
      </div>

      {error ? (
        <div>{error}</div>
      ) : (
        <div className='content-container-table'>
          <DynamicTable columns={data.columns} rows={data.rows} />
        </div>
      )}

      <AddEmployee open={showModal} handleClose={toggleModal} createEmployee={createEmployee} />
    </div>
  );
}

export default Empleados;
