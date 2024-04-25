import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './scss/_index.scss'
import Todoapp from './component/Todoapp/Todoapp'
import Login from './pages/Login/Login'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const login = localStorage.getItem('login');
  console.log(login)
  const isactiveClassName = ({ isActive }) => {
    return isActive ? 'active' : '';
  };

  return (
    <>
      {/* <h1>{login ? "chua login" : "da login"}</h1>
      <div className='back-ground'>

        <Login></Login>
      </div> */}
      <nav>
        <ul>
          <li><NavLink to="/" className={isactiveClassName}>Home</NavLink></li>
          <li><NavLink to="/about-us" className={isactiveClassName}>About us</NavLink></li>
          <li><NavLink to="/contact" className={isactiveClassName}>Contact</NavLink></li>
        </ul>
        <br /><br />

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </>
  )
}

export default App
