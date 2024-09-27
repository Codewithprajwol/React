import React from 'react';
import '/style.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import {ThemeProvider } from './contexts/ThemeContext';

function App() {
    
  return (
      <ThemeProvider>
    <Navbar />
    <Outlet />
    </ThemeProvider>
  )
}

export default App