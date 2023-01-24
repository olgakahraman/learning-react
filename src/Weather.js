import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature:19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
    feelsLike: 20,
  };

  return (
    <div className="Weather">
      <form>
        <div className="row text-end">
       <div className="col input">   <input type="text" placeholder="New City" autoComplete="off" /></div>

         <div className="col input"> <input type="submit" value="Search" /> </div>
      <div className="col" >   <button className="location-button">Current location</button></div>
        </div>
      </form>
      <div className="city-info">
        <ul>
          <li className="city">
            <h1>{weatherData.city}</h1>
          </li>
          <li className="date">{weatherData.date}</li>
          <li className="descrioption">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6 main-temp">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
          <strong className="temperature">{weatherData.temperature}</strong>
          <span className="units">
            <a href="/">℃</a>|<a href="/">℉</a>
          </span>{" "}
        </div>

        <div className="col-6 indicators">
          <ul>
            <li>Feels like: {weatherData.feelsLike}℃</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
