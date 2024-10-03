import React, { useContext, useEffect, useState } from "react";
import Countrycard from "./Countrycard";
import Searchfunctionlity from "./Searchfunctionlity";
import CountiresListShimmer from "./CountiresListShimmer";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Countrycontainer() {
  // console.log(ThemeContext)
  const [isDark]=useContext(ThemeContext)
  const [Countrydata, setCountrydata] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountrydata(data);
      });
  }, []);

  // useEffect(()=>{
  //   console.log('hello');
  // },[count])

  const [query, setquery] = useState("");
  // console.log(query);

  return Countrydata === null ? (
    <CountiresListShimmer />
  ) : (
    <main className={isDark ? "dark" :""} >
      <Searchfunctionlity setQuery={setquery} />
      <div className="countries-container">
        {Countrydata.filter((country) => {
          return country.name.common.toLowerCase().includes(query);
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