import React, { useState } from 'react';
import '/style.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    <>
    <Navbar theme={[isDark,setIsDark]} />
    <Outlet context={[isDark,setIsDark]} />
  </>
  )
}

export default App