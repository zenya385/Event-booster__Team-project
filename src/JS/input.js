import axios from 'axios';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const API_KEY = 'bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4';
export default async function fetchImages(event, country) {
  try {
    const fetch = await axios.get(
      `${BASE_URL}/events.json?apikey=${API_KEY}&keyword=${event}&countryCode=${country}`,
    );
    const data = fetch.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
// fetchImages(BASE_URL);
// page
// size
