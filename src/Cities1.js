import React from "react";
export default function Cities1() {
  let cities = [
    {
      name: "Istanbul",
      temp: 12,
    },
    {
      name: "Kharkiv",
      temp: 15,
    },
  ];
  return (
    <div className="Cities1">
      <div>
        {cities.map(function (city, index) {
          return (
            <li key={index}>
              It is {city.temp} degrees in {city.name}
            </li>
          );
        })}
      </div>
    </div>
  );
}
