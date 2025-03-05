//при нажатии на кнопку проверить значение валью
//если поле не заполнено - накинуть стиль красного и ошибку
//совпадение паролей - сверить значение валью двух полей 
//проверка имейла по функции имейла
//console.log если все окей


//require ('./validateEmail.js');
import validateEmail from './validateEmail.js'


  document.addEventListener('DOMContentLoaded', function () {
    const reg_button3 = document.getElementById('reg_button3');
    reg_button3.addEventListener('click', e => {
      e.preventDefault();
      const error_message = document.getElementById('error_message');
      error_message.textContent = '';
      error_message.style.display = 'none';
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const password_2 = document.getElementById('password_2');
      

      let includeError = false;

      if (email.value === '') {
        email.classList.add('error');
        includeError = true;
      }
      if (password.value === '') {
        password.classList.add('error');
        includeError = true;
      }
      if (password_2.value === '') {
        password_2.classList.add('error');
        includeError = true;
      }
      if (includeError) {
        error_message.textContent = 'Все поля должны быть заполнены';
        error_message.style.display = 'block';
        return;
      }

      
      if (!validateEmail(email.value)) {
        email.classList.add('error');
        error_message.textContent = 'адрес не валиден';
        error_message.style.display = 'block';
      }


      if (password.value !== password_2.value) {
        password.classList.add('error');
        password_2.classList.add('error');
        error_message.textContent = 'Пароли не совпадают';
        error_message.style.display = 'block';
        return;
      }
      if (includeError === false) {
        console.log(email.value, password.value, password_2.value);
      }
    })
  })
