import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './scss/_index.scss'
import Todoapp from './component/Todoapp/Todoapp'
import Login from './component/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='back-ground'>
        <Login></Login>
      </div>
    </>
  )
}

export default App
