import React from "react";
export default function Countries(props) {
  return (
    <div className="Countries">
      <div>
        {props.country.map(function (country, index) {
          return (
            <ul>
              <li key={index}>
                The Capital City of {country.name} is {country.capital}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
