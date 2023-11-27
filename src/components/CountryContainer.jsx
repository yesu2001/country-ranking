import React from "react";
import logo from "../assets/Logo.svg";
import DisplayCountry from "./DisplayCountry";

export default function CountryContainer() {
  return (
    <div className="z-10 w-full">
      <div className="mt-40 mb-20 w-full flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="h-[100vh] md:mx-40 bg-[#1C1D1F] border border-slate-500 rounded-lg py-6 px-8">
        <DisplayCountry />
      </div>
    </div>
  );
}
