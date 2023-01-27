import React from "react";
export default function Cities() {
  let cities = ["Paris", "Oslo", "London"];
  return (
    <div className="Cities">
      <ul>
        {cities.map(function (city, index) {
          return <li key={index}>{city}</li>;
        })}
      </ul>
    </div>
  );
}
