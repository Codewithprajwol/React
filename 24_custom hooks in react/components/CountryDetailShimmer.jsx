import React from 'react'
import './CountryDetailShimmer.css'

function CountryDetailShimmer() {
  return (
    <main id='simmer'>
    <div className='country-details-container '> 
        <div className="country-details shimmer">
      <div className="img"></div>
      <div className="details-text-container test-container">
        <div className='test-shimmer'>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
        </div>
    </div>
    </main>
  )
}

export default CountryDetailShimmer