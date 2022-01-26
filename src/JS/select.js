import countries from '../countries.json';
import item from '../newCountry.json';

import Choices from 'choices.js';
console.log(countries);
console.log(item);
const element = document.querySelector('#selectCountries');
console.log(element);

const choices = new Choices(element, {
  choices: item,
  items: item,
});

//

// const data = countries
//   .map(countries => {
//     console.log(countries.countryCode);
//     `<option class="input__option" value="${countries.countryCode[0]}">${countries.country}</option>`;
//     return `<option class="input__option" value="${countries.countryCode}">${countries.country}</option>`;
//     // console.log(country)
//   })
//   .join('');

// element.insertAdjacentHTML('beforeend', data);
