import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function Weather(props) {
  let [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (forecast.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{forecast.city}</h1>
        <ul>
          <li>
            <FormatDate date={forecast.date} />
          </li>
          <li className="text-capitalize">{forecast.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={forecast.iconUrl} alt={forecast.description} />
            <span className="temperature">
              {Math.round(forecast.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {forecast.humidity}%</li>
              <li>Wind: {forecast.wind} km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4fb8f394cc5f2d439df6249cf258d6a4";
    let units = "metric";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
