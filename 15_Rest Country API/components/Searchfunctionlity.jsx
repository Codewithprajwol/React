import React from 'react'

function Searchfunctionlity() {
  return (
    <div className="search-functionality-wrapper">
  <div className="search-container">
    <label htmlFor="inpt">
      <i className="fa-solid fa-magnifying-glass" />
    </label>
    <input id="inpt" type="text" placeholder="Search for a country..." />
  </div>
  <select name="selected" id="select">
    <option selected hidden>
      Filter by Region
    </option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</div>


  )
}

export default Searchfunctionlity