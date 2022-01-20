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
  fetchImages(searchingInput, countryInput);

  const markUp = templates();
  console.log(markUp);
  // .then(({ embedded: { events } }) => {
  //   console.log(events);
  // });
  // createMarkUp(events);
  console.log(event);
  // for(event in)
  refs.gallery.insertAdjacentHTML('beforebegin', markUp);
}

// function createMarkUp(embedded) {
//   console.log(Object.entries(embedded));
//   return Object.entries(embedded)
//     .map(event => {
//       ` <div class='photo-card'>
//     <img
//       class='img'
//       src='${event.images.url}'
//       alt='${event.images.attribution}'
//       loading='lazy'
//     />
//     <div class='info'>
//       <p class='info-item'>
//         <b><span>${event.name}</span></b>
//       </p>
//       <p class='info-item'>
//         <b><span>${event.dates.start.localDate}</span></b>
//       </p>
//       <p class='info-item'>
//         <b><span>${event.seatmap.staticUrl}</span></b>
//       </p>
//     </div>
//   </div>`;
//     })
//     .join('');
// }
