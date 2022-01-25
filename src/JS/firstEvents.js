import fetchImages from './input';
import renderMarkupCards from './renderMarkupCards';

const refs = {
  gallery: document.querySelector('.gallery'),
};

fetchImages('', 'LU', '0').then(response => {
  refs.gallery.innerHTML = renderMarkupCards(response._embedded.events);
});
//   const date = new Date();
//   const msDays = Date.parse(date);
//   console.log(msDays);
//   const eventDate = Date.parse(response._embedded.events[0].dates.start.dateTime);
//   console.log(eventDate);

//   function filterByDateEvent(msDays, eventDate) {
//     const eventDates = Date.parse(
//       response._embedded.events.map(event => event.dates.start.dateTime),
//     );
//     console.log(eventDates);

//     // if (eventDates - msDays > 0) {
//     // }
//   }
//   filterByDateEvent(msDays, eventDate);

//   console.log(response._embedded.events[0].dates.start.dateTime);
//   console.log(sortedByDateEvents);
