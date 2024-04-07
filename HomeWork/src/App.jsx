import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './scss/_index.scss'
import Todoapp from './component/Todoapp/Todoapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='back-ground'>
        <Todoapp></Todoapp>
      </div>
    </>
  )
}

export default App
