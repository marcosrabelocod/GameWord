import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Major from './components/Major'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <main className='App'>
        <Major/>
      </main> 
    </div>
  )
}

export default App
