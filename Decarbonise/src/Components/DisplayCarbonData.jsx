import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import Modal from './Modal';
import BasicTable from './TableDisplay';
import ClearIcon from '@mui/icons-material/Clear';

const DisplayCarbonData = ({ bodyData, queryCarbon, onClose }) => {
  let [carbon, setCarbon] = useState('');
  let [distance, setDistance] = useState('');

  const token = '1591YSuo7To0aMHiNq3bg';
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getCarbon() {
    try {
      let res = await axios.post(
        'https://www.carboninterface.com/api/v1/estimates',
        bodyData,
        config
      );

      let data = res.data;
      console.log('Carbon', data.data.attributes.carbon_kg);
      console.log('Carbon', data);
      carbon = data.data.attributes.carbon_kg;
      setCarbon(carbon);
      distance = data.data.attributes.distance_value;
      setDistance(distance);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   if (bodyData && queryCarbon) {
  //     getCarbon();
  //   }
  // }, [queryCarbon]);

  return (
    <Modal onClose={onClose}>
      <IconButton
        onClick={onClose}
        size='small'
        sx={{ alignSelf: 'flex-end', marginBottom: '1rem' }}
      >
        <ClearIcon />
      </IconButton>
      <Box
        sx={{
          backgroundColor: 'skyblue',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        flex={6}
        p={2}
      >
        <IconButton
          onClick={onClose}
          size='small'
          sx={{ alignSelf: 'flex-end', marginBottom: '1rem' }}
        >
          <ClearIcon />
        </IconButton>
        {/* <InfoDisplay carbon={carbon} distance={distance} /> */}
        <BasicTable
          flightCarbon={carbon}
          distance={distance}
          bodyData={bodyData}
          onClose={onClose}
        />
      </Box>
    </Modal>
  );
};

export default DisplayCarbonData;
