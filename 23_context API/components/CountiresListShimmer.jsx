import React from 'react'
import './CountryListShimmer.css'
import Searchfunctionlity from './Searchfunctionlity'

function CountiresListShimmer() {
//    new Array(10).fill(undefined)

  return ( 
   <main>
    <Searchfunctionlity />
     <div className='countries-container'>
      { Array.from({length:10}).map((el,i)=>{
    return <div key={i} className="country-card shimer-card"></div>
   })}
    </div>
   </main>
  )
}

export default CountiresListShimmer