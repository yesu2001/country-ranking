import React from "react";

export default function Country({ country, goBack }) {
  console.log(country);
  console.log(Object.values(country?.currencies));
  const currencies = Object.values(country?.currencies);
  const languages = Object.values(country?.languages);
  return (
    <div className="relative top-[-70px] space-y-6">
      <div className="relative flex justify-center">
        <img
          src={country?.flags?.png}
          alt="fleg pic"
          className="w-64 h-46 rounded-md"
        />
      </div>
      <div
        className="absolute top-[50px] cursor-pointer"
        onClick={() => goBack(null)}
      >
        <LeftArrowIcon />
      </div>
      <div className="text-[#D2D5DA] text-center space-y-1">
        <p className="font-bold text-3xl">{country?.name?.common}</p>
        <p>{country?.name?.official}</p>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <div className="bg-[#282B30] text-[#D2D5DA] font-semibold px-4 py-2 rounded-md flex items-center">
          <p className="border-r border-[#D2D5DA] pr-3 text-sm">Population</p>
          <p className="pl-3">{country?.population}</p>
        </div>
        <div className="bg-[#282B30] text-[#D2D5DA] font-semibold px-4 py-2 rounded-md flex items-center">
          <p className="border-r border-[#D2D5DA] pr-3 text-sm">Area (km²)</p>
          <p className="pl-3">{country?.area}</p>
        </div>
      </div>
      <div className="space-y-4">
        <hr className="border border-slate-800/90" />
        <div className="flex items-center justify-between font-bold">
          <p className="text-[#6C727F] text-sm">Capital</p>
          <p className="text-[#D2D5DA]">{country?.capital?.[0]}</p>
        </div>
        <hr className="border border-slate-800/90" />
        <div className="flex items-center justify-between font-bold">
          <p className="text-[#6C727F] text-sm">Subregion</p>
          <p className="text-[#D2D5DA]">{country?.capital?.[0]}</p>
        </div>
        <hr className="border border-slate-800/90" />
        <div className="flex items-center justify-between font-bold">
          <p className="text-[#6C727F] text-sm">Language</p>
          <div className="flex gap-2 items-center">
            {languages?.map((item) => (
              <p className="text-[#D2D5DA]">{item}</p>
            ))}
          </div>
        </div>
        <hr className="border border-slate-800/90" />
        <div className="flex items-center justify-between font-bold">
          <p className="text-[#6C727F] text-sm">Currencies</p>
          <div className="flex gap-2 items-center">
            {currencies?.map((item) => (
              <p className="text-[#D2D5DA]">{item.name}</p>
            ))}
          </div>
        </div>
        <hr className="border border-slate-800/90" />
        <div className="flex items-center justify-between font-bold">
          <p className="text-[#6C727F] text-sm">Continents</p>
          <p className="text-[#D2D5DA]">{country?.continents?.[0]}</p>
        </div>
        <hr className="border border-slate-800/90" />
      </div>
      {/* <div>
        <p>Neighbouring Countries</p>
        <div>
          <div>
            <img src="" alt="flag" />
            <p>Name</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

const LeftArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H6M12 5l-7 7 7 7" />
    </svg>
  );
};
