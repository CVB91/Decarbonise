import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';


// // let flightCarbon = 189.66;
// // let distance = 2630.01;
// let departure = "London Gatwick"
// let destination = "Madrid Barajas"
// let flightEquivalent;

// const beef = 99.48;
// const avgGlobalCit1850 = 165;
// const avgGlobalCit1950 = 2520;
// const avgGlobalCit2019 = 4701;
// const coffee = 0.4;
// const milk = 0.8;
// const bitcoin = 401;
// const treadmill = 1;
// const visa = 0.04;
// const washerDryer = 2.4;

// function createData(catergory, co2ValueKG, flightEquivalent) {
//   // flightEquivalent = (flightCarbon  / co2ValueKG);
//   return { catergory, co2ValueKG, flightEquivalent };
// }

// const rows = [
//     createData('1 KG Beef', `${ beef }`, `${(flightCarbon/beef).toFixed(2)}`),
//   createData('Average Global Citizen in 1850', `${avgGlobalCit1850}`, `${(flightCarbon/avgGlobalCit1850).toFixed(2)}`),
//   createData('Average Global Citizen  in 1950', `${avgGlobalCit1950}`, `${(flightCarbon/avgGlobalCit1950).toFixed(2)}`),
//   createData('Average Global Citizen 2019', `${avgGlobalCit2019}`, `${(flightCarbon/avgGlobalCit2019).toFixed(2)}`),
//   createData('Cup of Coffee (15 grams)', `${coffee}`,`${(flightCarbon/coffee.toFixed(2))}`),
//   createData('Glass of Milk (250ML)', `${milk}`, `${(flightCarbon/milk).toFixed(2)}`),
//   createData('Bitcoin Transaction', `${bitcoin}`, `${(flightCarbon/bitcoin).toFixed(2)}`),
//   createData('Treadmill 45 mins', `${treadmill}`, `${(flightCarbon/treadmill).toFixed(2)}`,),
//   createData('Visa Transaction', `${visa}`, `${(flightCarbon/visa).toFixed(2)}`),
//   createData('1 cycle Washer/Dryer ', `${washerDryer}`, `${(flightCarbon/washerDryer).toFixed(2)}`),
// ];

export default function BasicTable({ flightCarbon, distance, bodyData, onClose }) {
  //   let flightCarbon = carbon;
  //   let flightDistance = 2630.01;
    let departure = bodyData.legs[0].departure_airport;
    let destination = bodyData.legs[0].destination_airport;
  // let departure = 'LGW';
  // let destination = 'TXL';
  let flightEquivalent;

  const beef = 99.48;
  const avgGlobalCit1850 = 165;
  const avgGlobalCit1950 = 2520;
  const avgGlobalCit2019 = 4701;
  const coffee = 0.4;
  const milk = 0.8;
  const bitcoin = 401;
  const treadmill = 1;
  const visa = 0.04;
  const washerDryer = 2.4;

  function createData(catergory, co2ValueKG, flightEquivalent) {
    // flightEquivalent = (flightCarbon  / co2ValueKG);
    return { catergory, co2ValueKG, flightEquivalent };
  }

  const rows = [
    createData('1 KG Beef', `${beef}`, `${(flightCarbon / beef).toFixed(2)}`),
    createData(
      'Average Global Citizen in 1850',
      `${avgGlobalCit1850}`,
      `${(flightCarbon / avgGlobalCit1850).toFixed(2)}`
    ),
    createData(
      'Average Global Citizen  in 1950',
      `${avgGlobalCit1950}`,
      `${(flightCarbon / avgGlobalCit1950).toFixed(2)}`
    ),
    createData(
      'Average Global Citizen 2019',
      `${avgGlobalCit2019}`,
      `${(flightCarbon / avgGlobalCit2019).toFixed(2)}`
    ),
    createData(
      'Cup of Coffee (15 grams)',
      `${coffee}`,
      `${(flightCarbon / coffee).toFixed(2)}`
    ),
    createData(
      'Glass of Milk (250ML)',
      `${milk}`,
      `${(flightCarbon / milk).toFixed(2)}`
    ),
    createData(
      'Bitcoin Transaction',
      `${bitcoin}`,
      `${(flightCarbon / bitcoin).toFixed(2)}`
    ),
    createData(
      'Treadmill 45 mins',
      `${treadmill}`,
      `${(flightCarbon / treadmill).toFixed(2)}`
    ),
    createData(
      'Visa Transaction',
      `${visa}`,
      `${(flightCarbon / visa).toFixed(2)}`
    ),
    createData(
      '1 cycle Washer/Dryer ',
      `${washerDryer}`,
      `${(flightCarbon / washerDryer).toFixed(2)}`
    ),
  ];
  return (
    <>
      <Box sx={{ width: '100%' , display:"flex", flexDirection:"column"}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '2rem',
           
            width: '100%',
          }}
        >
          <Typography variant='subtitle2'>
            {departure} to {destination}
          </Typography>
          <Typography variant='subtitle2'>
            Flight Carbon (kg): {flightCarbon}
          </Typography>
          <Typography variant='subtitle2'>Distance (km): {distance}</Typography>
        </Box>
        <TableContainer component={Paper} sx={{ marginBottom: '1rem' }}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Catergory</TableCell>
                <TableCell align='right'>CO2 (kg)</TableCell>
                <TableCell align='right'>
                  Flight Equivalent to&nbsp;(kg)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, key) => (
                <TableRow
                  key={row.catergory}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.catergory}
                  </TableCell>
                  <TableCell align='right'>{row.co2ValueKG}</TableCell>
                  <TableCell align='right'>{row.flightEquivalent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
