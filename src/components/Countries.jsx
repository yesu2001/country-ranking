import React from "react";

export default function Countries({ data, setSelectedCountry }) {
  return (
    <div className="flex-[0.75] w-full ">
      <div className="flex items-center text-[#6C727F] gap-2 text-xs font-bold pb-4 border-b border-[#6C727F]">
        <p className="flex-[0.1]">Flag</p>
        <p className="flex-[0.3]">Name</p>
        <p className="flex-[0.2]">Population</p>
        <p className="flex-[0.2]">Area (Km)</p>
        <p className="flex-[0.2]">Region</p>
      </div>
      <div className="h-full overflow-y-scroll scrollbar mb-3">
        {data?.slice(0, 10).map((item) => (
          <div
            className="flex items-center gap-2 p-2 rounded-md my-4 text-[#D2D5DA] cursor-pointer hover:bg-slate-600"
            onClick={() => setSelectedCountry(item)}
          >
            <img
              src={item?.flags?.png}
              alt="flag icon"
              className="flex-[0.1]  w-10 overflow-hidden rounded-md"
            />
            <p className="flex-[0.3]">{item?.name?.common}</p>
            <p className="flex-[0.2]">{item?.population}</p>
            <p className="flex-[0.2]">{item?.area}</p>
            <p className="flex-[0.2]">{item?.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
