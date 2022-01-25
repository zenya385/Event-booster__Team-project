export default function renderModalInfo(name) {
  const renderMarkup = `
<div class="is-hidden modal-js">
<button data-modal-close class="btn-modal-close">X</button>
<div class="modal-description">
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
<button>BUY TICKET</button>
<button>MORE FROM THIS AUTHOR</button></div></div>
`;

  return renderMarkup;
}
