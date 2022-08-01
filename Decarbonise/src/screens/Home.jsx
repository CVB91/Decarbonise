import { Box, Typography } from '@mui/material';
import React from 'react';
import Rectangle2 from '../assets/Rectangle2.gif';
import Frame from '../assets/Frame.svg';
import arrowDown from '../assets/arrowDown.svg';

export const Home = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '1',
        gridTemplateRows: 'repeat(12, 1fr)',
        border: 'dotted',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          gridColumnStart: '2',
          gridColumnEnd: '4',
          gridRowStart: '2',
          gridRowEnd: '2',
        }}
      >
        <Typography
          sx={{
            fontSize: '5rem',
            fontWeight: 800,
            color: '#023240',
            lineHeight: '133px',
            width: "33.44rem",
            height:"9.06rem"
          }}
        >
          Decarbonise
        </Typography>
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: 'regular',
            color: '#023240',
            lineHeight: '50px',
            width: '511px',
            height: '120px',
            textAlign: 'left',
          }}
        >
          Count the carbon <br></br> emissions of your flights
        </Typography>
      </Box>
      <Box
        sx={{
          gridColumnStart: '9',
          gridColumnEnd: '11',
          gridRowStart: '1',
          gridRowEnd: '5',
        
        }}
      >
        <img id="gif1"src={Rectangle2}></img>
      </Box>
      <Box
        sx={{
          gridColumnStart: '2',
          gridColumnEnd: '2',
          gridRowStart: '5',
          gridRowEnd: '5',
          textAlign: 'left',
        }}
      >
        <img src={Frame}></img>
      </Box>
      <Box
        sx={{
          gridColumnStart: '2',
          gridColumnEnd: '2',
          gridRowStart: '6',
          gridRowEnd: '6',
          textAlign: 'left',
        }}
      >
        <img src={arrowDown}></img>
      </Box>
    </Box>
  );
};


