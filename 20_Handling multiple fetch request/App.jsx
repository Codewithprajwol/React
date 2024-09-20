import React, { useState } from 'react';
import '/style.css';
import Navbar from './components/Navbar';
import Countrycontainer from './components/Countrycontainer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
  </>
  )
}

export default App