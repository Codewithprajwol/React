import React, {useEffect, useState } from "react";
import "./Countrydetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import CountryDetailShimmer from "./CountryDetailShimmer";

function CountryDetails() {
  const [isDark]=useTheme();
  const params = useParams();
    const countrydata=params.country;
  const [countrydets, setcountrydets] = useState(null);
  const [notFound,setNotFound]=useState(false);
  const {state}=useLocation()
  
  const updateCountryData=(country)=>{
    setcountrydets({
      name: country.name.common || country.name,
      flag:country.flags.svg,
      nativeName: Object.values(country.name.nativeName || {})[0]?.common,
      region: country.region,
      population: country.population.toLocaleString("en-IN"),
      subregion: country.subregion,
      capital: country.capital,
      tld: country.tld.join(", "),
      currencies: Object.values(country.currencies || {}).map((currency)=>currency.name).join(','),
      languages: Object.keys(country.languages || {}).join(", "),
      borders:[],
    });
  }
  
  useEffect(() => {
    if(state){
      updateCountryData(state)
    }
    fetch(`https://restcountries.com/v3.1/name/${countrydata}?fullText=true`)
      .then((res) => res.json())
      .then(([country]) => {
        updateCountryData(country);
    if(!country.borders){
      country.borders=[];
    }
    
    Promise.all( country.borders.map((border)=>{
         return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res)=>res.json())
          .then(([borderData])=>{
            return borderData.name.common;
          });
        })
      ).then((borders)=>{
        setTimeout(() => {
        setcountrydets((prev)=>({...prev, borders}))
          
        },);
      })
          
      }).catch((error)=>{
        console.log(error)
        setNotFound(true)
      })
  }, [countrydata]);
  
  if(notFound){
    return <div>Country Not Found</div>
  }
  return ( 
      <main className={isDark ?'dark': ''}>
        {countrydets === null ? <CountryDetailShimmer /> :
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
                 {countrydets.nativeName || countrydets.name}
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
                 {countrydets.capital?.join(', ')}
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
             {countrydets.border!==null && <div className="border-content">
               <p>
                 <b>Border Countries:</b>&nbsp;
                 {countrydets.borders.map((border,index)=><Link key={index} to={`/${border}`}>{border}</Link>)}
               </p>
             </div>}
           </div>
         </div>
       </div>}
      </main>
    
  );
}

export default CountryDetails;
