import { useState } from "react";
import down from "../assets/Expand_down.svg";

export default function DropDown() {
  const [options, setOptions] = useState(["Name", "Population", "Area"]);
  const [category, setCategory] = useState("Name");
  const [expand, setExpand] = useState(false);

  const toggleDropdown = () => {
    setExpand(!expand);
  };

  const handleSelectFilter = (item) => {
    setCategory(item);
    setExpand(false);
  };

  return (
    <div
      className={`relative inline-block text-left w-full cursor-pointer px-3 py-2 rounded-lg border border-slate-700`}
    >
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-between items-center w-full  border-none bg-transparent"
        >
          <span>{category}</span>
          <img src={down} alt="expand icon" />
        </button>
      </div>
      {expand && (
        <div className="scrollbar absolute mt-3 bg-slate-800 right-0 w-full  overflow-y-auto rounded-md shadow-lg z-10">
          <div className="rounded-md shadow-xs overflow-hidden">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((item) => (
                <p
                  key={item}
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                  role="menuitem"
                  onClick={() => handleSelectFilter(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
