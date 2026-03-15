import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      <h2>Visited Countries: </h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.name} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
