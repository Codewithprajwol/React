import React, { useEffect, useState } from "react";
// import Countrydata from '../allCountriesData'
import Countrycard from "./Countrycard";
import Searchfunctionlity from "./Searchfunctionlity";

function Countrycontainer() {
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
    "loading...."
  ) : (
    <main>
      <Searchfunctionlity setQuery={setquery} />
      <div className="countries-container">
        {Countrydata.filter((country) => {
          return country.name.common.toLowerCase().includes(query);
        }).map((country, index) => {
          return (
            <Countrycard
              name={country.name.common}
              img={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
              data={country.name.common}
            />
          );
        })}
        .
      </div>
    </main>
  );
}

export default Countrycontainer;
