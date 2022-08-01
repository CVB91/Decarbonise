import axios from 'axios';

export async function getData() {
  try {
    let res = await axios.get(
      'https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json'
    );

    let data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
