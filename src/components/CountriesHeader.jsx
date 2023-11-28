import React from "react";
import search from "../assets/Search.svg";

export default function CountriesHeader({ data, searchValue, setSearchValue }) {
  function debounce(fn, delay) {
    let timerId = null;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  }

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const handleInputChange = debounce((e) => handleChange(e.target.value), 500);

  return (
    <div className="w-full flex items-center justify-between pb-8">
      <p className="text-[#6C727F] font-semibold text-sm">
        Found {data?.length} countries
      </p>
      <div className="flex w-80 items-center gap-2 bg-[#282B30] py-2 px-4 rounded-xl">
        <img src={search} alt="search icon" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleInputChange(e)}
          placeholder="Search by name, region, Subregion"
          className="w-full outline-none bg-transparent text-white text-sm"
        />
      </div>
    </div>
  );
}
