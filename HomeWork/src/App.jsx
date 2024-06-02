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
import { store } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, divisionCounter, factorialCounter, incremantCounter, multiplicationCounter } from './store/CounterSlice'
import Soqe from './page/Soqe/Soqe'
import QuarticEquations from './page/QuarticEquations/QuarticEquations.jsx'


function App() {

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(incremantCounter())}>Tăng</button>
      <button onClick={() => dispatch(decrementCounter())}>Giảm</button>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(multiplicationCounter(input))}>Nhân</button>
      <button onClick={() => dispatch(divisionCounter(input))}>Chia</button>
      <button onClick={() => dispatch(factorialCounter())}>Giai thừa</button> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='card' element={<HomeD11 />} />
          <Route path='soqe' element={<Soqe />} />
          <Route path='qe' element={<QuarticEquations />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
