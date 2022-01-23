export default function countryCode(countries) {
    const BASE_URL = 'https://app.ticketmaster.com//discovery/v2';
    const API_KEY = 'bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4';
  
    const url = `${BASE_URL}/suggest.json?apikey=${API_KEY}&countryCode=${countries}`
    return fetch(url).then(response => response.json());
  };
  