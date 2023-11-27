import React from "react";
import FilterCountry from "./FilterCountry";
import CountriesHeader from "./CountriesHeader";
import Countries from "./Countries";

export default function DisplayCountry() {
  return (
    <div>
      <CountriesHeader />
      <div className="flex">
        <FilterCountry />
        <Countries />
      </div>
    </div>
  );
}
