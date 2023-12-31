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
      {data.length === 0 && (
        <p className="text-center text-[#D2D5DA] font-bold mt-8">
          No Country Found
        </p>
      )}
      {data.length > 0 && (
        <div className="xs:h-300 sm:h-full overflow-y-scroll scrollbar mb-3">
          {data?.map((item) => (
            <div
              key={item?.flag}
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
      )}
      {data.length > 0 && (
        <p className="text-center text-[#D2D5DA] font-bold mt-8">
          Fetching Countries...
        </p>
      )}
    </div>
  );
}
