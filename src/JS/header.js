import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import fetchModalInfo from './main';
import modal from './modal';
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
        <div class='photo-card' data-div='event' data-id='${event.id}'>
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
      console.log(_embedded.events);
      refs.gallery.innerHTML = markup;
    }
    arrr(_embedded.events);
  })
}
document.addEventListener('click', getData)
function getData (e){
e.preventDefault();
if(e.target.dataset.div === 'event'){
  const dataId = e.target.getAttribute('data-id')
  modal();
  console.log(dataId)
  
  fetchModalInfo(dataId).then(name=>{
   console.log(name);
  function renderMarkup(name){
    return `<div class="modal-content modal-content-js" >
    <h2>INFO</h2>
    <p>${name.info}</p>
    <h2>WHEN</h2>
    <p>${name.dates.start.localDate}<br>${name.dates.start.localTime}</p>
    <h2>WHERE</h2>
     <p>${name._embedded.venues[0].city.name}, ${name._embedded.venues[0].country.name}<br>${name._embedded.venues[0].name}</p>
    <h2>WHO</h2>
    <p>${name.name}</p>
    <h2>PRICES</h2>
    <p><span>|||||</span> STANDART ${name.priceRanges[0].min} - ${name.priceRanges[0].max} ${name.priceRanges[0].currency}</p>
    <button>BUY TICKET</button>
    <p></p>
    <button>BUY TICKET</button>
    <button>MORE FROM THIS AUTHOR</button>
  </div>`
  }
  })
  
}

}