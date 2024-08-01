import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Blog from './components/Blog'
import './App.css'

function App() {


  return (
    <>
      <Blog lastname={'Doe'} firstname={'Jane'} age={45} haircolor={'Black'} button={'Birthday Button for Jane Doe'}/>
      <Blog lastname={'Smith'} firstname={'John'} age={88} haircolor={'Brown'} button={'Birthday Button for John Smith'}/>
    </>
  )
}

export default App
