import React, { useState } from 'react'
import Countrydata from '../allCountriesData'
import Countrycard from './Countrycard';
import Searchfunctionlity from './Searchfunctionlity';


function Countrycontainer() {
  const [query,setquery]=useState('');

  return (
    
    <main>
      <Searchfunctionlity setQuery={setquery} />
    <div className='countries-container'>
    {Countrydata.filter((country)=>{
    return country.name.common.toLowerCase().includes(query)}).map((country,index)=>  {
  return <Countrycard name={country.name.common} img={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital?.[0]} data={country.name.common} />}
)}.
    </div>
    </main>
  )
}

export default Countrycontainer