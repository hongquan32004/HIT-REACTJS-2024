import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './scss/_index.scss'
import Todoapp from './component/Todoapp/Todoapp'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import StartBootstrap from './page/StartBootstrap/StartBootstrap'
import AboutUs from './page/AboutUs/AboutUs'
import Login from './page/Login/Login'
import SignUp from './page/SignUp/SignUp'
import Contact from './page/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<StartBootstrap />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
