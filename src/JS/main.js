export default function fetchModalInfo(id) {
    const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
    const API_KEY = 'bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4';
    const url = `${BASE_URL}/events/${id}.json?apikey=${API_KEY}`;
    return fetch(url).then(response =>response.json());
  }