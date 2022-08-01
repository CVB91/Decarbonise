import React, { useState, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import DisplayCarbonData from './Components/DisplayCarbonData';

import { Box, Container, Stack } from '@mui/material';
import './App.css';
import NavBar from './Components/NavBar';
import { Home } from './screens/Home';
import FlightScreen from './screens/FlightScreen';

export default function App() {
  return (
    <Fragment>
      <Box>
        <NavBar />
        <main>
          <Stack direction='row' spacing={2}>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='Flights' element={<FlightScreen />} />
            </Routes>
          </Stack>
        </main>
      </Box>
    </Fragment>
  );
}
