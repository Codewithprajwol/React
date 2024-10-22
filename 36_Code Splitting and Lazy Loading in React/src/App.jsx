import { Suspense, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <main className=' px-5 py-2  md:px-8'>
      <Suspense fallback={<h1 className='text-xl'>Loading huddai xa hai .... Please wait</h1>}>
    <Outlet />
    </Suspense>
    </main>
   
    </>
  )
}

export default App
