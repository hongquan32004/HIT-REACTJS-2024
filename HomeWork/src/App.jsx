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

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  return (
    <>
      <div>
        <button style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => navigate("/count")}>COUNT</button>
        <button style={{ cursor: 'pointer' }} onClick={() => navigate("/todoapp")}>TODO-APP</button >
      </div>
      <Routes>
        <Route path='/count' element={<CountUseReducer />} />
        <Route path='/todoapp' element={<TodoApp />} />
      </Routes>
    </>
  )
}

export default App
