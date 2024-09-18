import React, { useEffect, useState } from "react";
import "./Countrydetail.css";

function CountryDetails() {
  const countrydata = new URLSearchParams(location.search).get("name");
  const [countrydets, setcountrydets] = useState(null);
  console.log(countrydata);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countrydata}?fullText=true`)
      .then((res) => res.json())
      .then(([country]) => {
        setcountrydets({
          name: country.name.common,
          flag:country.flags.svg,
          nativeName: Object.values(country.name.nativeName)[0].common,
          region: country.region,
          population: country.population.toLocaleString("en-IN"),
          subregion: country.subregion,
          capital: country.capital,
          tld: country.tld.join(", "),
          currencies: Object.values(country.currencies)[0].name,
          languages: Object.keys(country.languages).join(", "),
        });
      });
  }, []);
  console.log(countrydets)
  return (
    countrydets === null ? "loading...." : (
      <main>
        <div className="country-details-container">
          <a href="#" className="back-button" onClick={()=>{
            history.back();
          }}>
            <i className="fa-solid fa-arrow-left" />
            &nbsp;&nbsp;Back
          </a>
          <div className="country-details">
            <img src={countrydets.flag} alt={`${countrydets.name} flags`} />
            <div className="details-text-container">
              <h1>{countrydets.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  {countrydets.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {countrydets.population}
                </p>
                <p>
                  <b>Region: </b>
                  {countrydets.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {countrydets.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {countrydets.capital.join(', ')}
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  {countrydets.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {countrydets.currencies}
                </p>
                <p>
                  <b>Languages: </b>
                  {countrydets.languages}
                </p>
              </div>
              <div className="border-content">
                <p>
                  <b>Border Countries:</b>&nbsp;<a href="#">France</a>
                  <a href="#">Germany</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}

export default CountryDetails;
