import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../css/table.css'

function createData(id, address, expedition_date, products_cantity, total_price) {
  return {
    id,
    address,
    expedition_date,
    products_cantity,
    total_price,
    products: [
      {
        product_name: 'Picada Mata Diabeticos',
        product_cantity: 1,
        product_price: 50.50,
      },
      {
        product_name: 'Papas Fritas Colesterol King',
        product_cantity: 1,
        product_price: 45.50,
      },
      {
        product_name: 'Cheeseburger Explota Arterias',
        product_cantity: 1,
        product_price: 25.00,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment className='table'>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" component="th" scope="row">{row.id}</TableCell>
        <TableCell align="center">{row.address}</TableCell>
        <TableCell align="center">{row.expedition_date}</TableCell>
        <TableCell align="center">{row.products_cantity}</TableCell>
        <TableCell align="center">${row.total_price}</TableCell>
        <TableCell align='center'>
          <IconButton
            aria-label="expand row"
            size="medium"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>


      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" fontWeight={800} >
                Productos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell align='center'>Producto</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Precio Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productsRow) => (
                    <TableRow>
                      <TableCell />
                      <TableCell align='center'>{productsRow.product_name}</TableCell>
                      <TableCell align="center">{productsRow.product_cantity}</TableCell>
                      <TableCell align="center">${productsRow.product_price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(12345, '4 Privet Drive, Little Whinging, Surrey', '12/05/24', 2, 28.27),
  createData(23456, '308 Negra Arroyo Lane, Albuquerque, New Mexico', '13/05/24', 8, 228.15),
  createData(34567, 'Apartment 5A, 2311 North Los Robles Avenue, Pasadena, California', '16/05/24', 12, 345.80),
  createData(45678, '31 Spooner Street, Quahog, Rhode Island', '19/05/24', 10, 228.35),
  createData(56789, '742 Evergreen Terrace, Springfield', '21/05/24', 3, 125.33),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID del Pedido</TableCell>
            <TableCell align="center">Dirección</TableCell>
            <TableCell align="center">Fecha de Expedición</TableCell>
            <TableCell align="center">Número de Productos</TableCell>
            <TableCell align="center">Precio Total</TableCell>
            <TableCell align="center">Mostrar Productos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}