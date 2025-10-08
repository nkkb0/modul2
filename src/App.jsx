import { useState } from 'react'
import './App.css'
import './styles/Header.css'
import Header from './components/Header'
import './styles/Statistic.css'
import Statistic from './components/Statistic'
import './styles/Posts.css'
import Posts from './components/Posts'
import './styles/Button.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <Header />
      <Button />
      <Statistic />
      <Posts />
      <div className='button_group'>
      <Button />
      </div>
    </>
  )
}

export default App
