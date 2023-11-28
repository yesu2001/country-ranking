import React, { useEffect, useState } from "react";
import FilterCountry from "./FilterCountry";
import CountriesHeader from "./CountriesHeader";
import Countries from "./Countries";

export default function DisplayCountry({ setSelectedCountry }) {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortFilter, setSortFilter] = useState("Name");
  const [regionFilter, setRegionFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState("mun");

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
      <CountriesHeader
        data={countries}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="flex gap-6 h-[90%]">
        <FilterCountry />
        <Countries data={countries} setSelectedCountry={setSelectedCountry} />
      </div>
    </>
  );
}
