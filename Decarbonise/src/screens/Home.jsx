import { Box, Typography } from '@mui/material';
import React from 'react';
import Rectangle2 from '../assets/Rectangle2.gif';
import Frame from '../assets/Frame.svg';
import arrowDown from '../assets/arrowDown.svg';
import Lottie from 'lottie-react';
import turbines from '../assets/turbines.json';
import renewable from '../assets/renewable.json';
import teapot from '../assets/teapot.json';
import flowers from '../assets/flowers.json';
import garden from '../assets/garden.json';
import Typical from 'react-typical';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

export const Home = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '1',
        gridTemplateRows: 'auto',
        // height: '100vh',
        // width: '100vw',
      }}
    >
      <Box
        sx={{
          gridColumnStart: '2',
          gridColumnEnd: 'span 6',
          gridRowStart: '1',
          gridRowEnd: '2',
        }}
      >
        <Typography
          sx={{
            fontSize: '10rem',
            fontWeight: '700',
            color: '#083240',
            lineHeight: '',
            width: '33.44rem',
            marginTop: "5rem"
          }}
        >
          Decarbonise
        </Typography>
        <Typography
          sx={{
            fontSize: '6rem',
            fontWeight: 'regular',
            color: '#79B27F',
            lineHeight: '5rem',
            width: '51.1rem',
            height: '12rem',
            textAlign: 'left',
            marginTop: '4rem',
            paddingLeft: '0.4rem',
          }}
        >
         your {' '}
          <Typical
            steps={['flights', 3000, 'deliveries', 3000, 'transactions', 3000]}
            loop={Infinity}
            wrapper='p'
          />
        </Typography>
      </Box>
      <Box
        sx={{
          gridColumnStart: '8',
          gridColumnEnd: 'span 4',
          gridRowStart: '1',
          marginTop: '6rem',
          gridRowEnd: 'span 3',
          width: '59.8rem',
          height: '51.7rem',
          maringRight: '16.3rem',
        }}
      >
        <Lottie animationData={turbines} loop={true} />
      </Box>
      <Box
        sx={{
          gridColumnStart: '2',
          gridColumnEnd: '2',
          gridRowStart: '3',
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
          gridRowStart: '8',
          gridRowEnd: '6',
          textAlign: 'left',
        }}
      >
        <img src={arrowDown}></img>
      </Box>
      <Box
        sx={{
          gridColumnStart: '3',
          gridColumnEnd: 'span 8',
          gridRowStart: '9',
          gridRowEnd: 'span 3',
          textAlign: 'left',
          display: 'flex',
          marginTop: '22rem',
          marginBottom: '20rem',
          paddingBottom: '10rem',
          justifyContent: 'space-between',
          border: 'dotted',
        }}
      >
        <Box sx={{ width: '238px' }}>
          <Lottie animationData={garden} loop={true} />
          <Typography variant='p' sx={{ fontSize: '2.4rem' }}>
            Use Decarbonise to understand more about your personal impact on
            global emissions.
          </Typography>
        </Box>
        <Box sx={{ width: '238px' }}>
          <Lottie animationData={teapot} loop={true} />
          <Typography variant='p' sx={{ fontSize: '2.4rem' }}>
            Use Decarbonise to understand more about your personal impact on
            global emissions.
          </Typography>
        </Box>
        <Box sx={{ width: '23.8rem', border: 'dotted' }}>
          <Lottie animationData={flowers} loop={true} />
          <Typography variant='p' sx={{ fontSize: '2.4rem' }}>
            Use Decarbonise to understand more about your personal impact on
            global emissions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
