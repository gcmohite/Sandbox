'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal-btn');

const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModal.forEach((mdl) => {
  mdl.addEventListener('click', displayModal);
});

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
