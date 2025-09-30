import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Statistic from './components/Statistic'
import Posts from './components/Posts'
import Button from './components/Button'

function App() {

  return (
    <>
      <Header />
      <Button />
      <Statistic />
      <Posts />
      <Button />
      {/* 
      <div className="popup" id="popup1">
        <div className="popup__body">
          <div className="popup__content">
            <div className="popup__close"></div>
            <div className="popup__title">Регистрация</div>
            <div className="error_message" id="error_message"></div>
            <div>
              <input className="email" id="email" placeholder="электронная почта" type="text" name="username" value="" />
            </div>
            <div>
              <input className="password" id="password" placeholder="пароль" type="password" name="userpass" value="" />
            </div>
            <div>
              <input className="password_2" id="password_2" placeholder="подтверждение пароля" type="password" name="userpass2" value="" />
            </div>
            <button className="reg_button3" id="reg_button3"> Зарегестрироваться</button>
          </div>
        </div>
      </div>
      <div className="popup" id="popup2">
        <div className="popup__body">
          <div className="popup__content">
            <div className="popup__close"></div>
            <div className="popup__title">Авторизация</div>
            <div>
              <input className="email" placeholder="электронная почта" type="text" name="username" value="" />
            </div>
            <div>
              <input className="password" placeholder="пароль" type="password" name="userpass" value="" />
            </div>
            <button className="reg_button3"> Войти</button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App
