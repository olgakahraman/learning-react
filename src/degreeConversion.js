import React, { useState } from "react";

export default function degreeConversion(props) {

  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");


  function showFahrenheit(event) {
    event.prevenDefault();
    setUnit("Imperial");
    setTemperature(Math.round((props.temperature * 9)/5 + 32));
  }

function showCelsius(event) {
  event.prevenDefault();
  setUnit("Metric");
  setTemperature(props.temperature);
}

  return (
    <p>
      Weather in {props.city} is {temperature} ({unit}){" "}
      <a href="/" onClick={showCelsius}>
        ℃
        </a>{" "}
        | {" "}
        <a href="/" onClick={showFahrenheit}>
          ℉
        </a>
        </p>
  );
}
