import React from 'react'
import Countrydata from '../allCountriesData'
import Countrycard from './Countrycard';
import Searchfunctionlity from './Searchfunctionlity';


function Countrycontainer() {
  console.log(Countrydata);
  const array=Countrydata.map((country,index)=>  {
    console.log(country);
  return <Countrycard name={country.name.common} img={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital?.[0]}  />}
)

  return (
    <main>
      <Searchfunctionlity />
    <div className='countries-container'>
    {array}
    </div>
    </main>
  )
}

export default Countrycontainer