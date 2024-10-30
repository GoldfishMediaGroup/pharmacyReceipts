import './forms';
import { formFieldsInit, formSubmit } from './forms';
import 'inputmask';
const form = () => {
  // form fields
  formFieldsInit({ viewPass: true });
  // submit form
  formSubmit();
  nameValidate();
  phoneMask();
  telValidate();
  mailValidate();
  inputFile();
  function nameValidate() {
    const name = document.querySelectorAll('.input--name');
    name.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) || inputValue == '') {
          span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
      item.addEventListener('blur', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) || inputValue == '') {
          span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
  function phoneMask() {
    const mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask($('.phone-mask'));
  }
  function telValidate() {
    const tel = document.querySelectorAll('.input--tel');

    tel.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(inputValue) && inputValue != '') {
          // span.classList.add('active');
          parent.classList.add('_form-error');
        } else if (inputValue.length < 16) {
          parent.classList.add('_form-error');
        } else {
          // span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
  function mailValidate() {
    const mail = document.querySelectorAll('.input--mail');

    mail.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue != '') {
          // span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          // span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
};

export default form;
