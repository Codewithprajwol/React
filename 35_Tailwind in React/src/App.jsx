import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main className=' px-5 py-2  md:px-8'>
    <Outlet />
    </main>
   
    </>
  )
}

export default App
