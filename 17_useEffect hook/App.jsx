import React, { useState } from 'react';
import '/style.css';
import Navbar from './components/Navbar';
import Searchfunctionlity from './components/Searchfunctionlity';
import Countrycontainer from './components/Countrycontainer';

function App() {
  const[count,setCount]=useState(0);
  return (
    <>
    <button onClick={()=>{
      setCount(count+1);
    }}>{count}</button>
  <Navbar />
{
   count===2? '': <Countrycontainer />
}
  </>
  )
}

export default App