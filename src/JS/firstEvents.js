import fetchImages from './input';
import renderMarkupCards from './renderMarkupCards';

const refs = {
  gallery: document.querySelector('.gallery'),
};

fetchImages('Metallica', 'US', '0').then(response => {
  //   function asd(arr) {
  //     arr.filter(todayDate => {
  //       // console.log(events.map(event => event.images.filter(filter => (filter.ratio = 3.4))));
  //       const todayEvents = todayDate.dates.start.localDate <= new Date();
  //       //   console.log(todayDate.dates.start.localDate);
  refs.gallery.innerHTML = renderMarkupCards(response._embedded.events);
});
//   }
asd(response._embedded.events);
// });
