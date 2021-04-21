const FormController = function () {
  let data;
  let phone, target, action, submit, fields, required, buttonDefault;

  const ValidateExpression = {
    phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/,
    name: /^[a-zA-Zа-яА-Я ]+$/,
    message: /^\w{6,}/
  }

  return {
    Init: (instance) => {
      form = instance;

      phone = form.querySelector('input[type=tel]');
      target = form.getAttribute('data-target');
      action = form.getAttribute('action');
      submit = form.querySelector('button[type=submit');
      fields = form.querySelectorAll('.input__field');
      required = form.querySelectorAll('[data-required]');

      buttonDefault = submit.innerHTML;

      FormController.Mask();
      FormController.Listener();
    },

    Mask: () => {
      // Маска для номера телефона
      IMask(phone, {
        mask: '+{7} (000) 000-00-00',
        prepare: (appended, masked) => ((appended === '8' && masked.value === '') ? '' : appended),
      });
    },

    Listener: () => {
      // Удалить стандартное поведение формы
      form.onsubmit = (e) => {
        e.preventDefault();

        if (FormController.CheckRequired() && FormController.InputValidate()) {
          submit.innerHTML = submit.getAttribute('data-sending');
          submit.setAttribute('disabled', 'disabled');
          submit.parentNode.classList.add('form__action--sending');

          FormController.Send();
        }
      };

      // Убрать ошибку при клике
      fields.forEach(input => {
        input.addEventListener('click', FormController.RemoveError(input));
      });
    },

    CheckRequired: () => {
      let isValid = true;

      required.forEach(field => {
        if (field.value === '') {
          field.parentNode.classList.add('input--error');
          isValid = false;
        }
      });

      return isValid;
    },

    InputValidate: () => {
      let isValid = true;

      const input_phone = form.querySelectorAll('input[type=tel]');
      const input_name = form.querySelectorAll('input[name=user_name]')
      const input_message = form.querySelectorAll('textarea[name=user_message]')

      input_phone.forEach(input => {
        Validate(input, 'phone')
      });

      input_name.forEach(input => {
        Validate(input, 'name')
      });

      input_message.forEach(input => {
        if (input.value !== '')
          Validate(input, 'message')
      });

      function Validate(field, type) {
        if (!field.value.match(ValidateExpression[type])) {
          FormController.AddError(field)
          isValid = false;
        }
      }

      return isValid;
    },

    // Функция: убрать ошибку при клике
    RemoveError: (field) => {
      return () => field.parentNode.classList.remove('input--error');
    },

    // Функция: Добавить ошибку
    AddError: (field) => {
      field.parentNode.classList.add('input--error');
    },

    // Функция: Отправляем письмо
    Send: async () => {
      data = new FormData(form);
      data.append('target', target);

      try {
        let response = await fetch(action, {
          method: 'POST',
          body: data,
        });

        let result = await response.json();
        console.log(result);

        FormController.Clear();
      }

      // Логируем ошибку, если возникла
      catch (error) {
        console.error('Ошибка: ' + error);
      }

      // В любом случае убрать стили "отправки"
      finally {
        submit.removeAttribute('disabled');
        submit.parentNode.classList.remove('form__action--sending');
        submit.innerHTML = buttonDefault;
      }
    },

    // Функция: Очистка формы
    Clear: () => {
      fields.forEach(field => field.value = '');
    }
  }
}();
