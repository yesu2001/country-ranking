import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import DisplayCountry from "./DisplayCountry";
import Country from "./Country";

export default function CountryContainer() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="z-10 w-full">
      <div className="mt-40 mb-20 w-full flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      {selectedCountry ? (
        <div className="flex justify-center">
          <div className="xs:w-[85%] sm:w-[80%] md:w-[50%] md:mx-40 bg-[#1C1D1F] border border-slate-500 rounded-lg py-6 px-8">
            <Country country={selectedCountry} goBack={setSelectedCountry} />
          </div>
        </div>
      ) : (
        <div className="h-[100vh] sm:mx-5 md:mx-20 bg-[#1C1D1F] border border-slate-500 rounded-lg py-6 px-8 overflow-hidden">
          <DisplayCountry setSelectedCountry={setSelectedCountry} />
        </div>
      )}
    </div>
  );
}
