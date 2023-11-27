import React from "react";

export default function Country({ country }) {
  console.log(country);
  console.log(Object.values(country?.currencies));
  const currencies = Object.values(country?.currencies);
  const languages = Object.values(country?.languages);
  return (
    <div>
      <div>
        <img src={country?.flags?.png} alt="fleg pic" />
      </div>
      <div>
        <p>{country?.name?.common}</p>
        <p>{country?.name?.official}</p>
      </div>
      <div>
        <div>
          <p>Population</p>
          <p>{country?.population}</p>
        </div>
        <div>
          <p>Area (km²)</p>
          <p>{country?.area}</p>
        </div>
      </div>
      <div>
        <div>
          <p>Capital</p>
          <p>{country?.capital?.[0]}</p>
        </div>
        <div>
          <p>Subregion</p>
          <p>{country?.capital?.[0]}</p>
        </div>
        <div>
          <p>Language</p>
          <div>
            {languages?.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p>Currencies</p>
          <div>
            {currencies?.map((item) => (
              <p>{item.name}</p>
            ))}
          </div>
        </div>
        <div>
          <p>Continents</p>
          <p>{country?.continents?.[0]}</p>
        </div>
      </div>
      <div>
        <p>Neighbouring Countries</p>
        <div>
          <div>
            <img src="" alt="flag" />
            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
