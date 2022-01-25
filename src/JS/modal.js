import fetchModalInfo from './main';

import renderModalInfo from './renderModalInfo';

const refs = {
  gallery: document.querySelector('.gallery'),
  // backdrop: document.querySelector('.backdrop')
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
          modalJs.classList.remove('is-hidden');
          // refs.backdrop.classList.remove('is-hidden');
          const closeModalBtn = document.querySelector('[data-modal-close]');
          closeModalBtn.addEventListener('click', () => {
            modalJs.remove();
            // console.log(backdrop);
            // refs.backdrop.remove();
          });
        }
      })
      .catch(console.log);
  }
}
