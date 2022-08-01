import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { List } from 'react-virtualized';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Stack } from '@mui/material';

let iataCodes = [];
let airportNames = [];

const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, role, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;
  const itemSize = 36;

  return (
    <div ref={ref}>
      <div {...other}>
        <List
          height={250}
          width={300}
          rowHeight={itemSize}
          overscanCount={5}
          rowCount={itemCount}
          rowRenderer={(props) => {
            return React.cloneElement(children[props.index], {
              style: props.style,
            });
          }}
          role={role}
        />
      </div>
    </div>
  );
});
async function getData() {
  try {
    let res = await axios.get(
      'https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json'
    );

    let data = res.data.filter((el) => el.name != null);

    data = data.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

const SideBar = ({ handleClick, sendBodyData, onShowModal  }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  let [queryIataCode, setQueryIataCode] = React.useState([]);
  let [queryDepartureAirport, setQueryDepartureAirport] = React.useState([]);
  let [queryDestinationAirport, setQueryDestinationAirport] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      let data = await getData();

      if (active) {
        setOptions([...data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const getIataCode = (e, value) => {
    const iataCode = value.iata;
    const airportName = value.name;
    iataCodes.push(iataCode);
    airportNames.push(airportName);

    if (iataCodes.length > 2 && airportNames.length > 2) {
      iataCodes = [];
      airportNames = [];
      iataCodes.push(value.iata);
      airportNames.push(value.name);
    }
    if (iataCodes[0] === iataCodes[1] && airportNames[0] === airportNames[1]) {
      window.alert('destination and departure must be different');
      iataCodes = [];
      airportNames = [];
      iataCodes.push(value.iata);
      airportNames.push(value.name);
    }

    setQueryIataCode(iataCodes);
    console.log('getiatacodes', iataCodes);
  };

  const buildQuery = () => {

    airportNames[0] ? setQueryDepartureAirport(airportNames[0]) : '';
    airportNames[1] ? setQueryDestinationAirport(airportNames[1]) : '';
    
    
  
}

  let bodyData = {
    type: 'flight',
    passengers: 1,
    legs: [
      {
        departure_airport: queryIataCode[0],
        destination_airport: queryIataCode[1],
      },
      {
        departure_airport: queryIataCode[1],
        destination_airport: queryIataCode[0],
      },
    ],
  };


  const deleteAirports = () => {
    setQueryDepartureAirport([]);
    setQueryDestinationAirport([]);
  
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
        flex={1}
        p={2}
      >
        <Autocomplete
          id='Airport Search'
          sx={{ width: 300 }}
          ListboxComponent={ListboxComponent}
          open={open}
          onChange={getIataCode}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => `${option.name}: ${option.iata}`}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Select Airport'
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        <Box mt={2}>
          <Button
            variant='contained'
            color='success'
            startIcon={<AddIcon />}
            onClick={() => {
              buildQuery()
            }}
          >
            Add Airport
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            variant='contained'
            color='error'
            startIcon={<DeleteIcon />}
            onClick={() => {
              deleteAirports();
            }}
          >
            Delete Aiport
          </Button>
        </Box>

        <Typography variant='h5' mt={6}>
          Departure Airport{' '}
          <Typography variant='h6' mt={2}>
            {queryDepartureAirport.length > 0 ? queryDepartureAirport : ''}
          </Typography>
        </Typography>
        <Typography variant='h5' mt={6}>
          Destination Airport
          <Typography variant='h6' mt={2}>
            {queryDestinationAirport.length > 0 ? queryDestinationAirport : ''}
          </Typography>
        </Typography>
        <Button
          onClick={() => {
            handleClick(queryIataCode)
            sendBodyData(bodyData)
            onShowModal()
          }}
         
          sx={{ mt: 5 }}
          variant='contained'
          startIcon={<CalculateIcon />}
        >
          Calculate
        </Button>
      </Box>
    </>
  );
};

export default SideBar;
