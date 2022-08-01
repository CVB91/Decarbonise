import React, {useState, Fragment} from 'react';
import { Route, Routes } from 'react-router-dom';

import DisplayCarbonData from './Components/DisplayCarbonData';

import { Box, Container, Stack } from '@mui/material';
import './App.css';
import NavBar from './Components/NavBar';

import SideBar from './Components/SideBar';
import { Home } from './screens/Home';


export default function App() {
  const [iataCode, setIataCode] = useState([]);
  const [bodyData, setBodyData] = useState();
  const [queryCarbon, setQueryCarbon] = useState(false);
  const [modalIsShown, setModalIsShown] = useState(false);

  const handleClick = (iataCodes) => {
    setIataCode(iataCodes);
  };

  const displayModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModal = () => {
    setModalIsShown(false);
  };

  const sendBodyData = (bodyData) => {
    bodyData = bodyData;
    setBodyData(bodyData);
    console.log(bodyData);
    //need to improve this architecuture
    if (!queryCarbon) {
      setQueryCarbon(true);
    }
  };

  return (
    <Fragment>
      <Box>
        <NavBar />
        <main>
          <Stack direction='row' spacing={2}>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route
                path='flight-calculator'
                element={
                  <SideBar
                    handleClick={handleClick}
                    sendBodyData={sendBodyData}
                    onShowModal={displayModalHandler}
                  />
                }
              />

              <Route
                path='carbon-data'
                element={
                  modalIsShown && (
                    <DisplayCarbonData
                      bodyData={bodyData}
                      queryCarbon={queryCarbon}
                      onClose={hideModal}
                    />
                  )
                }
              />
            </Routes>
            {/* <DisplayCarbonData
            bodyData={bodyData}
            queryCarbon={queryCarbon}
            onClose={hideModal}
          /> */}
          </Stack>
        </main>
      </Box>
    </Fragment>
  );
}
