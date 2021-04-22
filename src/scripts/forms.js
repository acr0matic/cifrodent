const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  // FormController.Init(form)
  new Form(form);
});

