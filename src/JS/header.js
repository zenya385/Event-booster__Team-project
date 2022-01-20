import axios from 'axios';
import { debounce } from "debounce";
import { debounce } from 'debounce';
import fetchImages from './input';

const refs = {
  headerForm: document.querySelector('.header__form'),
  searchingInput: document.querySelector('.header__form--input'),
  countryInput: document.querySelector('.header__form--input1'),
};
refs.headerForm.addEventListener('input', debounce(asd, 500));

function asd(e) {
  e.preventDefault();
  const searchingInput = refs.searchingInput.value;
  const countryInput = refs.countryInput.value;
  fetchImages(searchingInput, countryInput);
}
