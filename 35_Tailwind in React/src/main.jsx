import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/contact',
      element:<Contact />
    },
    
  ]
}])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

