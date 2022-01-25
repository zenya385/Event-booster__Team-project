import countries from '../countries.json';
const selectCountry = document.querySelector('#selectCountries');

const data = countries
  .map(countries => {
    console.log(countries.countryCode);
    `<option class="input__option" value="${countries.countryCode[0]}">${countries.country}</option>`;
    return `<option class="input__option" value="${countries.countryCode}">${countries.country}</option>`;
    // console.log(country)
  })
  .join('');
selectCountry.insertAdjacentHTML('beforeend', data);
