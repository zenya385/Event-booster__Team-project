import countries from '../countries.json';
const selectCountry = document.querySelector('#selectCountries');

const data = countries
  .map(countries => {
    return `<option value="${countries.countryCode}">${countries.country}</option>`;
    // console.log(country)
  })
  .join('');
selectCountry.insertAdjacentHTML('beforeend', data);
