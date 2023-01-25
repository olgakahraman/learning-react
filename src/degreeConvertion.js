import React from "react";
export default function degreeConvertion(props) {
  function convertToFahrenheit() {
    let fahrenheit = props.temperature * (9 / 5) + 32;
    let roundedFahrenheit = Math.round(fahrenheit);
    return roundedFahrenheit;
  }
  return (
    <div className="degreeConvertion">
      The temperature in {props.city} is {props.temperature}℃ and{" "}
      {convertToFahrenheit()}℉
    </div>
  );
}
