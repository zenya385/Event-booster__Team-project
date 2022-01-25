import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import { paginationMarkup } from './pagination';
import renderMarkupCards from './renderMarkupCards';
import optionPagination from './pagination';

const refs = {
  headerForm: document.querySelector('.header__form'),
  searchingInput: document.querySelector('.header__form--input'),
  countryInput: document.querySelector('.header__form--input1'),
  gallery: document.querySelector('.gallery'),
  selectCountry: document.querySelectorAll('#selectCountries'),
  pageCount: document.querySelector('.pagination'),
};

refs.headerForm.addEventListener('input', debounce(onInput, 500));
function onInput(event) {
  event.preventDefault();
  const searchingInput = refs.searchingInput.value;
  const countryInput = refs.countryInput.value;
  let page = 0;
  fetchImages(searchingInput, countryInput, page)
    .then(({ _embedded, page }) => {
      refs.gallery.innerHTML = renderMarkupCards(_embedded.events);
      const optionPagination = {
        showStart: false,
        showEnd: false,
        baseTag: 'a',
        link: 'https://app.ticketmaster.com/discovery/v2//events.json?apikey=bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4&page=',
        baseClass: 'pageCount',
        query: `countryCode=${countryInput}&keyword=${searchingInput}`,
      };
      const renderPageMarkup = paginationMarkup(page.totalPages, page.number + 1, optionPagination);
      refs.pageCount.innerHTML = renderPageMarkup;

      // refs.gallery.innerHTML = renderMarkupCards(_embedded.events);
      refs.pageCount.addEventListener('click', e => {
        if (e.target.nodeName !== 'A') return;

        const data = e.target.href;
        fetch(data)
          .then(response => response.json())
          .then(({ _embedded }) => {
            e.preventDefault();
            refs.gallery.innerHTML = renderMarkupCards(_embedded.events);
          });
      });
    })
    .catch(console.log);
}
