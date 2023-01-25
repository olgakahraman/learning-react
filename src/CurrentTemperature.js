import React from "react";
export default function CurrentTemperature(props) {
  function showCurrentTemperature(event) {
    event.preventDefault();
    alert("Coming soon...");
  }
  return (
    <button href="/" onClick={showCurrentTemperature}>
      Current Temperature
    </button>
  );
}
