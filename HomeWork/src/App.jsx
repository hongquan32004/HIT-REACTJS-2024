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
import CountUseReducer from './page/CountUseReducer/CountUseReducer'
import TodoApp from './page/TodoApp/TodoApp'
import { useNavigate } from "react-router-dom";
import HeaderD11 from './common/HeaderD11/HeaderD11'
import Login1 from './component/Login1/Login1'
import Layout from './layouts/Layout'
import HomeD11 from './page/HomeD11/HomeD11'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomeD11 />} />
          <Route path='/start-bootstrap' element={<StartBootstrap />} />
          <Route path='/todo-app' element={<TodoApp />} />
          <Route path='/login1' element={<Login1 />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
