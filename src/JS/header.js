import axios from 'axios';
import { debounce } from 'debounce';
import fetchImages from './input';
import fetchModalInfo from './main';
import {paginationMarkup} from './pagination';

const refs = {
  headerForm: document.querySelector('.header__form'),
  searchingInput: document.querySelector('.header__form--input'),
  countryInput: document.querySelector('.header__form--input1'),
  gallery: document.querySelector('.gallery'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  modal: document.querySelector('[data-modal]'),
  selectCountry: document.querySelectorAll('#selectCountries'),
  pageCount: document.querySelector('.pagination'),
};


refs.headerForm.addEventListener('input', debounce(onInput, 500));
function onInput(event) {
  event.preventDefault();
  const searchingInput = refs.searchingInput.value;
  const countryInput = refs.countryInput.value;
  let page =0;
  fetchImages(searchingInput, countryInput,page)
    .then(({_embedded,page}) => {
      const optionPagination = {
        showStart : false,
        showEnd:false,
        baseTag:'a',
        link:'https://app.ticketmaster.com/discovery/v2//events.json?apikey=bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4&page=',
        baseClass : 'pageCount',
        query: `countryCode=${countryInput}&keyword=${searchingInput}`
      }
 const renderPageMarkup = paginationMarkup(page.totalPages,page.number+1,optionPagination);
 refs.pageCount.innerHTML = renderPageMarkup;
      // console.log(page);
      function renderMarkupCards(events) {
        const markup = events
          .map(event => {
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
          })
          .join('');
        refs.gallery.innerHTML = markup;
      }
      
      renderMarkupCards(_embedded.events);
      refs.pageCount.addEventListener('click',(e)=>{
        if (e.target.nodeName !== 'A') return;
       
      const data = e.target.href;
      console.log(data);
      fetch(data).then(response=>response.json()).then(({_embedded})=>{
        e.preventDefault();
        renderMarkupCards(_embedded.events);
      });
       })
    })
    .catch(console.log);
    
}
document.addEventListener('click', getData);

function getData(e) {
  e.preventDefault();
  if (e.target.dataset.div === 'event') {
    const dataId = e.target.getAttribute('data-id');
    fetchModalInfo(dataId)
      .then(name => {
        console.log(name);
        const renderMarkup = `
    <div class="is-hidden modal-js">
    <button data-modal-close class="">X</button>
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
    <button>MORE FROM THIS AUTHOR</button></div>`;
        refs.gallery.insertAdjacentHTML('beforebegin', renderMarkup);
        const modalJs = document.querySelector('.modal-js');
        console.log(modalJs);
        if (modalJs) {
          modalJs.classList.remove('is-hidden');
          const closeModalBtn = document.querySelector('[data-modal-close]');
          closeModalBtn.addEventListener('click', () => {
            modalJs.remove();
          });
        }
      })
      .catch(console.log('erorr'));
  }
}

