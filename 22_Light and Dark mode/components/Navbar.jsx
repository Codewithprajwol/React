import React, { useState } from 'react'

function Navbar({theme}) {
  const [isDark,setIsDark]=theme;
  
  if(isDark){
    document.body.classList.add('dark');
  }
  else{
    document.body.classList.remove('dark');
  }
  return (
    <header className={`header-section ${isDark ? 'dark':''}`}>
    <div className="header-content">
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>
      <h3 className="mode" onClick={()=>{
        setIsDark(!isDark);
        localStorage.setItem('isDarkMode', !isDark);
      }}>
        <i className={isDark ?'fa-regular fa-sun':'fa-regular  fa-moon' }/>
        <span id="mode-word">{isDark ? 'Light':'Dark'}</span>Mode
      </h3>
    </div>
  </header>
  )
}

export default Navbar