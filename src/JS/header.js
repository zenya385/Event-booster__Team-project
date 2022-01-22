import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import templates from '../templates/markup.hbs';
import modalMarkup from '../templates/modal.hbs';
import modalOpen from './modal';
const arr = [];
const refs = {
  headerForm: document.querySelector('.header__form'),
  searchingInput: document.querySelector('.header__form--input'),
  countryInput: document.querySelector('.header__form--input1'),
  gallery: document.querySelector('.gallery'),
};

refs.headerForm.addEventListener('input', debounce(asd, 500));

function asd(event) {
  event.preventDefault();
  const searchingInput = refs.searchingInput.value;
  const countryInput = refs.countryInput.value;
  fetchImages(searchingInput, countryInput).then(({ _embedded }) => {
    function arrr(events) {
      const markup = events.map(event => {
        return `
        <div class='photo-card' data-id='{{id}}'>
        <img
          class='img'
          src='${event.images[0].url}'
          alt=''
          loading='lazy'
        />
        <div class='info'>
          <p class='info-item-name'>
            <b><span>${event.name}</span></b>
          </p>
          <p class='info-item-lokal'>
            <span>${event.dates.start.localDate}</span>
          </p>
          <p class='info-item-address'>
            <b><span>${event._embedded.venues[0].name}</span></b>
          </p>
        </div>
      </div>
        `;
      }).join('');
      refs.gallery.insertAdjacentHTML('beforebegin', markup);
     
    }
    arrr(_embedded.events);
  
  });
}
