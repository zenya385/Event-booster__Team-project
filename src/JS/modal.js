// export default function modal() {
//   const refs = {
//     openModalBtn: document.querySelector('.gallery'),
//     closeModalBtn: document.querySelector('.modal-close-js'),
//     modal: document.querySelector('.modal-js'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// }

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

// console.log(refs.closeModalBtn);

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', closeModal);

//   function toggleModal() {
//     refs.modal.classList.remove('is-hidden');
//     console.log('ok');
//   }

//   function closeModal() {
//     refs.modal.classList.add('is-hidden');

//     console.log('xxx');
//   };
