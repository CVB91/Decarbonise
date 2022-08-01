import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Co2Icon from '@mui/icons-material/Co2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: "white"
});

const NavBar = () => {

  

  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Typography variant='h4'>CARBON COST</Typography>
        <Co2Icon />
        <AttachMoneyIcon />
        <ConnectingAirportsIcon/>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
