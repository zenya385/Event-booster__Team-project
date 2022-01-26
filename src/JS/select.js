import countryCode from './fetchCountryCodes';
import countries from '../countries.json';
import item from '../newCountry.json';
import renderMarkupCards from './renderMarkupCards';

const refs = {
  headerForm: document.querySelector('.header__form'),
  searchingInput: document.querySelector('.header__form--input'),
  countryInput: document.querySelector('.header__form--input1'),
  gallery: document.querySelector('.gallery'),
  selectCountry: document.querySelectorAll('#selectCountries'),
  pageCount: document.querySelector('.pagination'),
};

import Choices from 'choices.js';
const element = document.querySelector('#selectCountries');
console.log(element.value);
countryCode(element.value).then(response => {
  refs.gallery.innerHTML = renderMarkupCards(response._embedded.events);
});
const choices = new Choices(element, {
  choices: countries,
  items: countries,
});

//
// countryCode
// country
// const data = countries
//   .map(countries => {
//     console.log(countries);
//     `<option class="input__option" value="${countries.countryCode[0]}">${countries.country}</option>`;
//     return `<option class="input__option" value="${countries.countryCode}">${countries.country}</option>`;
//     // console.log(country)
//   })
//   .join('');

// element.insertAdjacentHTML('beforeend', data);
