import React from 'react'
import { Link } from 'react-router-dom';

function Countrycard({name,img,population,capital,region,data,country}) {
  return (
   
    <Link key={data} className="country-card" to={`/${name}`} state={country}>
    <div className='image-container'>
    <img src={img} alt={name} />
    </div>
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
  </Link>
  

  )
}

export default Countrycard