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
import Home from './page/Home/Home'
import Products from './page/product/Product'
import DetailProducts from './page/DetailProducts/DetailProducts'
import SignIn from './page/SignIn/SignIn'
import HomeD9 from './page/HomeD9/HomeD9'
import Profile from './page/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Product'>Product</NavLink></li>

        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Products />} >
          <Route path=':id' element={<DetailProducts />} />
        </Route>

      </Routes> */}

      <Routes>
        <Route path='/' element={<HomeD9 />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

    </>
  )
}

export default App
