// src/components/DynamicTable.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Row component
function Row({ row, columns }) {
  return (
    <React.Fragment>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} align={column.align}>
            {row[column.id]}
          </TableCell>
        ))}
        <TableCell align="center">
          <Button variant="contained" > Editar </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
};

// Main table component
export default function DynamicTable({ columns, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align}>
                {column.label}
              </TableCell>
            ))}
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} columns={columns} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DynamicTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};
