import React from 'react'

function Countrycard({name,img,population,capital,region}) {
  return (
   
    <a className="country-card" href="country.html?name={{name}}">
    {" "}
    <img src={img} alt={name} />
    <div className="card-text">
      <h3 className="card-title">{name}</h3>
      <p>
        <b>Population: </b>{population}
      </p>
      <p>
        <b>Region: </b>{region}
      </p>
      <p>
        <b>Capital: </b>{capital}
      </p>
    </div>
  </a>
  

  )
}

export default Countrycard