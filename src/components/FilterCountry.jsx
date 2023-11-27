import React, { useState } from "react";
import DropDown from "./DropDown";
import tick from "../assets/Done_round.svg";

export default function FilterCountry() {
  const regionOptions = ["America", "Antartica", "Asia", "Africa", "Europe"];
  const [status, setStatus] = useState("Members of the United Nations");
  const [regions, setRegions] = useState([]);

  const handleSelectRegions = (region) => {
    if (regions.includes(region)) {
      setRegions(regions.filter((selected) => selected !== region));
    } else {
      setRegions([...regions, region]);
    }
  };

  const handleSelectStatus = (item) => {
    setStatus(item);
  };

  return (
    <div className="flex-[0.25] space-y-6">
      <div className="space-y-2 text-[#6C727F]">
        <label className="text-xs font-semibold">Sort by</label>
        <DropDown />
      </div>
      <div className="space-y-2">
        <label className="text-[#6C727F] text-xs font-semibold">Region</label>
        <div className="flex flex-wrap gap-2 items-center">
          {regionOptions.map((region, index) => (
            <p
              key={index}
              className={`text-[#6C727F] text-sm px-2 rounded-md ${
                regions.includes(region) ? "bg-[#6C727F] text-[#D2D5DA]" : ""
              }`}
              onClick={() => handleSelectRegions(region)}
            >
              {region}
            </p>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-[#6C727F] text-xs font-semibold">Status</label>
        <div className="text-[#D2D5DA] text-sm space-y-3 ">
          {["Members of the United Nations", "Independant"].map(
            (item, index) => (
              <div
                key={index}
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => handleSelectStatus(item)}
              >
                <div
                  className={`h-6 w-6 rounded-md border border-[#6C727F] flex items-center justify-center ${
                    item === status ? "bg-[#4E80EE]" : ""
                  } `}
                >
                  {item === status && <img src={tick} alt="tick" />}
                </div>
                <p>{item}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
