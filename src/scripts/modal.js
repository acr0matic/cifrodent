MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
  disableScroll: true,
});

const modal = document.getElementById('modal-callback');
const modalTarget = modal.querySelector('form');

const targetModalButton = document.querySelectorAll('[data-modal-target]');

targetModalButton.forEach(button => {
  const target = button.getAttribute('data-modal-target');

  button.addEventListener('click', () => {
    modalTarget.setAttribute('data-target', target);
  });
});