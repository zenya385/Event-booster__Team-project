export default function renderMarkupCards(events) {
  // console.log(events.map(event => event.images.filter(filter => (filter.ratio = 3.4))));
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
  return markup;
}
