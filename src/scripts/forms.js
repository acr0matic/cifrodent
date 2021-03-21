/* global IMask */

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const phone = form.querySelector('input[type=tel]');

  IMask(phone, {
    mask: '+{7} (000) 000-00-00',
    prepare: (appended, masked) => ((appended === '8' && masked.value === '') ? '' : appended),
  });
});
