import { useState, useEffect, useRef } from 'react';
import validateEmail from '../../public/assets/validateEmail.js';

export default function Button() {

  const [regPopup, setRegPopup] = useState(false);
  const [entPopup, setEntPopup] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [swipeStart, setSwipeStart] = useState(null);
  const handleTouchStart = (e) => setSwipeStart(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (swipeStart && e.changedTouches[0].clientY > swipeStart + 50) {
      setRegPopup(false);
      setEntPopup(false);
      resetFormFields();
    }
    setSwipeStart(null);
  };

  const closePopup = (e) => {
    setRegPopup(false);
    setEntPopup(false);
    resetFormFields();
  }

  const handleReg = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setPassword2Error(false);
    setErrorMessage('');

    let includeError = false;
    if (email === '') {
      setEmailError(true);
      includeError = true;
    }
    if (password === '') {
      setPasswordError(true);
      includeError = true;
    }
    if (password2 === '') {
      setPassword2Error(true);
      includeError = true;
    }

    if (includeError) {
      setErrorMessage('Все поля должны быть заполнены');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      setErrorMessage('Адрес не валиден');
      return;
    }

    if (password !== password2) {
      setPasswordError(true);
      setPassword2Error(true);
      setErrorMessage('Пароли не совпадают');
      return;
    }
    console.log(email, password, password2);
    resetFormFields();
  };

  const resetFormFields = () => {
    setEmail('');
    setPassword('');
    setPassword2('');
    setEmailError(false);
    setPasswordError(false);
    setPassword2Error(false);
    setErrorMessage('');
  };

  
  return (
    <>
    <button className="reg_button1  popup-link_reg" onClick = {() => setRegPopup(true)}> Зарегестрироваться</button> <br/>
    <button className="ent_button1 popup-link_ent" onClick = {() => setEntPopup(true)}> Войти</button>

    {regPopup &&(
      <div className={`popup ${regPopup ? 'open' : ''}`} id="popup1"
       onTouchStart={handleTouchStart}
       onTouchEnd={handleTouchEnd} >
        <div className="popup__body">
          <div className="popup__content">
            <form>
              <div className="popup__close"></div>
              <button onClick={closePopup} className="popup__close_desktop">X</button>
              <div className="popup__title">Регистрация</div>
              <div className="error_message" id="error_message" style={{ display: errorMessage ? 'block' : 'none' }}>{errorMessage}</div>
              <div>
                <input className={`email ${emailError ? 'error' : ''}`}
                 id="email" placeholder="электронная почта" type="text" name="username"
                 value={email} onChange={(e) => setEmail(e.target.value)} autoсomplete="email" />
              </div>
              <div>
                <input className={`password ${passwordError ? 'error' : ''}`}
                 id="password" placeholder="пароль" type="password" name="userpass"
                 value={password} onChange={(e) => setPassword(e.target.value)} autoсomplete="new-password" />
              </div>
              <div>
                <input className={`password_2 ${password2Error ? 'error' : ''}`}
                 id="password_2" placeholder="подтверждение пароля" type="password" name="userpass2"
                 value={password2} onChange={(e) => setPassword2(e.target.value)}  autoсomplete="new-password"/>
              </div>
              <button className="reg_button3" id="reg_button3" onClick={handleReg}> Зарегестрироваться</button>
            </form>
          </div>
        </div>
      </div>
    )}
    {entPopup &&(
      <div className={`popup ${entPopup ? 'open' : ''}`} id="popup2"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
        <div className="popup__body">
          <div className="popup__content">
            <form>
              <div className="popup__close"></div>
              <button onClick={closePopup} className="popup__close_desktop">X</button>
              <div className="popup__title">Авторизация</div>
              <div>
                <input className="email" placeholder="электронная почта" type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} autoсomplete="email" />
              </div>
              <div>
                <input className="password" placeholder="пароль" type="password" name="userpass" value={password} onChange={(e) => setPassword(e.target.value)} autoсomplete="current-password" />
              </div>
              <button className="reg_button3"> Войти</button>
            </form>
          </div>
        </div>
      </div>
    )}
    </>
  )  
}