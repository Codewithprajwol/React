import React, { useEffect, useState } from 'react'
// import Countrydata from '../allCountriesData'
import Countrycard from './Countrycard';
import Searchfunctionlity from './Searchfunctionlity';


function Countrycontainer() {
  const [Countrydata,setCountrydata]=useState([]);
  const [count, setCount]=useState(0)
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response)=>response.json())
    .then((data)=>{
       setCountrydata(data); 
    });
    const intervalId=setInterval(() => {
      console.log('running countries container component');
    }, 1000);
  
    return ()=>{
      clearInterval(intervalId);
    }
  },[])
 
  // useEffect(()=>{
  //   console.log('hello');
  // },[count])

  const [query,setquery]=useState('');
  // console.log(query);

  return (
    
    <main>
      
    <Searchfunctionlity setQuery={setquery} />
    <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
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