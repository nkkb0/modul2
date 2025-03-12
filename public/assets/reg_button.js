/* eslint-env browser */
import validateEmail from './validateEmail.js';

document.addEventListener('DOMContentLoaded', function () {
  const regButton3 = document.getElementById('reg_button3');
  regButton3.addEventListener('click', (e) => {
    e.preventDefault();
    const errorMessage = document.getElementById('error_message');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password_2');
    let includeError = false;
    if (email.value === '') {
      email.classList.add('error');
      includeError = true;
    }
    if (password.value === '') {
      password.classList.add('error');
      includeError = true;
    }
    if (password2.value === '') {
      password2.classList.add('error');
      includeError = true;
    }
    if (includeError) {
      errorMessage.textContent = 'Все поля должны быть заполнены';
      errorMessage.style.display = 'block';
      return;
    }
    if (!validateEmail(email.value)) {
      email.classList.add('error');
      errorMessage.textContent = 'адрес не валиден';
      errorMessage.style.display = 'block';
    }
    if (password.value !== password2.value) {
      password.classList.add('error');
      password2.classList.add('error');
      errorMessage.textContent = 'Пароли не совпадают';
      errorMessage.style.display = 'block';
      return;
    }
    if (includeError === false) {
      // eslint-disable-next-line no-console
      console.log(email.value, password.value, password2.value);
    }
  });
});
