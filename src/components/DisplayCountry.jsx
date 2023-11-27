import React, { useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import CountriesHeader from "./CountriesHeader";
import Countries from "./Countries";

export default function DisplayCountry({ setSelectedCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    function fetchCountries() {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCountries(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchCountries();
  }, []);

  return (
    <>
      <CountriesHeader />
      <div className="flex gap-6 h-[90%]">
        <FilterCountry />
        <Countries data={countries} setSelectedCountry={setSelectedCountry} />
      </div>
    </>
  );
}
