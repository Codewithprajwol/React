import React, { useContext, useEffect, useState } from "react";
import Countrycard from "./Countrycard";
import Searchfunctionlity from "./Searchfunctionlity";
import CountiresListShimmer from "./CountiresListShimmer";

import { useTheme } from "../hooks/useTheme";

function Countrycontainer() {
  // console.log(ThemeContext)
  const [isDark] = useTheme();
  const [Countrydata, setCountrydata] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountrydata(data);
      });
  }, []);
  // const windowSize=useWindowSize();
  // console.log(windowSize);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  // useEffect(()=>{
  //   console.log('hello');
  // },[count])
  // useEffect(()=>{ // if we want to show this details in another page or component we will have to copy and paste the whole code .....so to avoid that we create our own Custom Hooks
  //   window.addEventListener('resize',()=>{
  //    setWidth(window.innerWidth);
  //    setHeight(window.innerHeight);
  //   })
  // },[])

  const [query, setquery] = useState("");
  // console.log(query);

  return Countrydata === null ? (
    <CountiresListShimmer />
  ) : (
    <main className={isDark ? "dark" : ""}>
      {/* <h1 style={{textAlign:'center'}}>{`${windowSize.width} x ${windowSize.height}`}</h1> */}
      <Searchfunctionlity setQuery={setquery} />
      <div className="countries-container">
        {Countrydata.filter((country) => {
          return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
        }).map((country, index) => {
          return (
            <Countrycard
              country={country}
              name={country.name.common}
              img={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
              data={index}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Countrycontainer;
