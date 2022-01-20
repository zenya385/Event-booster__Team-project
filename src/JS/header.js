import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import templates from '../templates/markup.hbs';

const refs = {
  headerForm: document.querySelector('.header__form'),
  searchingInput: document.querySelector('.header__form--input'),
  countryInput: document.querySelector('.header__form--input1'),
  gallery: document.querySelector('.gallery'),
  btn: document.querySelector('.abc'),
};

console.log(refs.btn);

refs.headerForm.addEventListener('input', debounce(asd, 500));

function asd(event) {
  event.preventDefault();
  const searchingInput = refs.searchingInput.value;
  console.log();
  const countryInput = refs.countryInput.value;
  fetchImages(searchingInput, countryInput).then(({ _embedded }) => {
    const markUp = templates(_embedded.events);
    refs.gallery.insertAdjacentHTML('beforebegin', markUp);
    console.log(_embedded.events);

    return markUp;
  });
}
