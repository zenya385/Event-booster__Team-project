import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import templates from '../templates/markup.hbs';
import modalMarkup from '../templates/modal.hbs';
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
    function arrr(a) {
      const y = a.map(names => {
        console.log(names.images[0].url);
        // console.log(names);
        return `
        <div class='photo-card' data-id='{{id}}'>
        <img
          class='img'
          src='${names.images[0].url}'
          alt=''
          loading='lazy'
        />
        <div class='info'>
          <p class='info-item-name'>
            <b><span>${names.name}</span></b>
          </p>
          <p class='info-item-lokal'>
            <span>${names.dates.start.localDate}</span>
          </p>
          <p class='info-item-address'>
            <b><span></span></b>
          </p>
        </div>
      </div>
        `;

        // arr.push(names.name);
        // arr.push(names.url);
        // arr.push(names.dates.start.localDate);
        // return arr;
      });
      refs.gallery.insertAdjacentHTML('beforebegin', y);
    }
    // for (let i = 0; i < names.length; i++) {
    //   let prop = names[i].url
    //   console.log(prop.url,"at:",prop.x,prop.y);
    arrr(_embedded.events);
    // console.log(arr);
    // const markUp = templates(arr);
  });
}
