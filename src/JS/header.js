import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import templates from '../templates/markup.hbs';
import modalMarkup from '../templates/modal.hbs'

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
  console.log();
  const countryInput = refs.countryInput.value;
  fetchImages(searchingInput, countryInput).then(({ _embedded }) => {
    const getDetails = _embedded.events
      .flatMap(obj => {
        // console.log(obj.images);
        console.log(obj.id)
        return obj.id;
      })
      .join(',');
    //  console.log(getDetails);
    const markUp = templates(_embedded.events);
    refs.gallery.insertAdjacentHTML('beforebegin', markUp);
    console.log(_embedded.events);
    // console.log({ _embedded,id });
    // console.log(id);
    return getDetails;
  }).then(event =>{
    
    // console.log(event[0].id);
    console.log(event);
  })
}


// // console.log(modal)
// refs.headerForm.addEventListener('input', debounce(asd, 500));

// function asd(event) {
//   event.preventDefault();
//   const searchingInput = refs.searchingInput.value;
//   // console.log();
//   const countryInput = refs.countryInput.value;
//   fetchImages(searchingInput, countryInput).then(({ _embedded,id }) => {
//     const markUp = templates(_embedded.events);
//     refs.gallery.insertAdjacentHTML('beforebegin', markUp);
//     // console.log(_embedded.events);


//     // return markUp;
//     return _embedded.events;
//   }).then(event =>{
//     // console.log(event);
//     const modalM = modalMarkup(event)
//     console.log(modalM)

//   })
// }