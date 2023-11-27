import React from "react";
import search from "../assets/Search.svg";

export default function CountriesHeader() {
  return (
    <div className="w-full flex items-center justify-between pb-8">
      <p className="text-[#6C727F] font-semibold text-sm">
        Found 324 countries
      </p>
      <div className="flex w-80 items-center gap-2 bg-[#282B30] py-2 px-4 rounded-xl">
        <img src={search} alt="search icon" />
        <input
          type="text"
          placeholder="Search by name, region, Subregion"
          className="w-full outline-none bg-transparent text-white text-sm"
        />
      </div>
    </div>
  );
}
