import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const InfoDisplay = ({ distance, carbon }) => {
  return (
    <>
      <Box border="dotted" width= "80%">
        <Typography variant='h5'>
          {carbon ? carbon : ''} KG Carbon Emitted
        </Typography>
        <Typography variant='h5'>
          {distance ? distance : ''} KM Travelled
        </Typography>
      </Box>
    </>
  );
};

export default InfoDisplay;
