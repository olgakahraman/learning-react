import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function AnimatedWeather(){
    return (
      <div className="AnimatedWeather">
        <p>
          Import and render this component{" "}
          <a href="https://www.npmjs.com/package/react-animated-weather">
            https://www.npmjs.com/package/react-animated-weather
          </a>
        </p>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#000"y
          size={48}
          animated={true}
        />
        <ReactAnimatedWeather
          icon="WIND"
          color="purple"
          size={48}
          animated={true}
        />
        <ReactAnimatedWeather
          icon="SNOW"
          color="yellow"
          size={48}
          animated={true}
        />
      </div>
    );
}