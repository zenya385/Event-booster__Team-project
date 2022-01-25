const openModalLink = document.querySelector('#toggle-modal');
const closeBtn = document.querySelector('.icon-close');

const lightBox = document.querySelector('.js-lightbox');

openModalLink.addEventListener('click', openModal);

function openModal() {
  lightBox.classList.add('is-open');
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
  lightBox.classList.remove('is-open');
}
