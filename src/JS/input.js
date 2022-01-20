import axios from 'axios';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const API_KEY = 'mwPGNQc6oAGCcUN76qKb1vw6XCSZXdwt';
export default async function fetchImages(event,country) {
  try {
    const fetch = await axios.get(
      `${BASE_URL}/events.json?keyword=${event}&apikey=${API_KEY}&countryCode=${country}&page=${page}&size=20`
    );
    const data = fetch.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
