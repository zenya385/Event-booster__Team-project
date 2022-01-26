import fetchModalInfo from './main';
import renderModalInfo from './renderModalInfo';

const refs = {
  gallery: document.querySelector('.gallery'),
};
document.addEventListener('click', getData);

function getData(e) {
  if (e.target.dataset.div === 'event') {
    const dataId = e.target.getAttribute('data-id');
    fetchModalInfo(dataId)
      .then(name => {
        refs.gallery.insertAdjacentHTML('beforebegin', renderModalInfo(name));
        const modalJs = document.querySelector('.modal-js');
        console.log(modalJs);
        if (modalJs) {
          modalJs.classList.add('is-open');
          const closeModalBtn = document.querySelector('[data-modal-close]');
          const backdrop = document.querySelector('.backdrop');
            console.log(backdrop);
          closeModalBtn.addEventListener('click', () => {
            modalJs.remove();
            backdrop.remove();
          });
        }
      })
      .catch(console.log);
  }
}