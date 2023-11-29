import React, { useEffect, useState, useCallback } from "react";
import FilterCountry from "./FilterCountry";
import CountriesHeader from "./CountriesHeader";
import Countries from "./Countries";
import debounce from "lodash.debounce";

export default function DisplayCountry({ setSelectedCountry }) {
  const [countries, setCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState([]);
  const [regions, setRegions] = useState([]);
  const [category, setCategory] = useState("Name");

  const handleFindCountry = (input) => {
    const lowercaseSearchValue = input.toLowerCase();

    const data = countries.filter((obj) => {
      const objectName = obj.name.common.toLowerCase();
      return objectName.includes(lowercaseSearchValue);
    });
    console.log(data);
    if (data.length === 0) {
      setFilteredData(null);
    }
    setFilteredData(data);
  };

  const handleSortCountry = (options) => {
    console.log(options);
    let data = [...countries];

    // Sorting
    switch (options.sort) {
      case "Name":
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        break;
      case "Population":
        data.sort((a, b) => a.population - b.population);
        break;
      case "Area":
        data.sort((a, b) => a.area - b.area);
        break;
      default:
        return data;
    }

    console.log(data);

    // Region filtering
    if (options.regions && options.regions.length > 0) {
      data = filteredData.filter((obj) => options.regions.includes(obj.region));
    }

    console.log(data);

    // Status filtering
    if (options.status && options.status.length > 0) {
      data = filteredData.filter((obj) => {
        if (
          (options.status.includes("Independent") && obj.independent) ||
          (options.status.includes("Members of the United Nations") &&
            obj.unMember)
        ) {
          return true;
        }
        return false;
      });
    }
    setFilteredData(data);
  };

  const delayedSearch = useCallback(
    debounce((value) => handleFindCountry(value), 500),
    []
  );

  useEffect(() => {
    const filters = {
      sort: category, // Default sorting
      regions: regions, // Example checkbox options
      status: status, // Example radio option
    };
    handleSortCountry(filters);
  }, [category, status, regions]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    // Search will only be called when user stops typing
    delayedSearch(event.target.value);
  };

  useEffect(() => {
    function fetchCountries() {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchCountries();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <CountriesHeader
        data={countries}
        searchValue={searchValue}
        handleChange={handleChange}
      />
      <div className="flex flex-col sm:flex-row  gap-6 h-[90%]">
        <FilterCountry
          status={status}
          setStatus={setStatus}
          category={category}
          setCategory={setCategory}
          regions={regions}
          setRegions={setRegions}
        />
        <Countries
          data={filteredData ? filteredData : countries}
          setSelectedCountry={setSelectedCountry}
        />
      </div>
    </>
  );
}
