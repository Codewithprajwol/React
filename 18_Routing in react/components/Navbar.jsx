import React from 'react'

function Navbar() {
  return (
    <header className="header-section">
    <div className="header-content">
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>
      <h3 className="mode">
        <i className="fa-regular fa-sun" />
        <span id="mode-word">Light</span>Mode
      </h3>
    </div>
  </header>
  )
}

export default Navbar