export default function renderModalInfo(name) {
  const renderMarkup = `
  <div class="backdrop">
<div class="is-hidden modal-js">
<button data-modal-close class="btn-modal-close">X</button>
<div class="wrapper-image-small"><img  src="${name.images[3].url}" class="modal-image-small"></div>
<div class="modal-description">
<div class="wrapper-image-big">
<img src="${name.images[4].url}" class="modal-image-big"></div>
<div class="text-wrapper">
<h2 class="title">INFO</h2>
<p class="modal-text">${name.info}</p>
<h2 class="title">WHEN</h2>
<p class="modal-text">${name.dates.start.localDate}</p><p class="modal-text">${name.dates.start.localTime}</p>
<h2 class="title">WHERE</h2>
 <p class="modal-text">${name._embedded.venues[0].city.name}, ${name._embedded.venues[0].country.name}</p><p class="modal-text">${name._embedded.venues[0].name}</p>
<h2 class="title">WHO</h2>
<p class="modal-text">${name.name}</p>
<h2 class="title">PRICES</h2>
<p class="modal-text"><span>|||||</span> STANDART ${name.priceRanges[0].min} - ${name.priceRanges[0].max} ${name.priceRanges[0].currency}</p>
<button class="modal-btn">BUY TICKET</button>
<button class="modal-btn">BUY TICKET</button>
<button class="modal-btn-more">MORE FROM THIS AUTHOR</button></div></div></div></div>
`;
console.log(name);
  return renderMarkup;
}
