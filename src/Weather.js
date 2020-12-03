import React, { useState } from "react";
import axios from "axios";
import WeatherOverview from "./WeatherOverview";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "4fb8f394cc5f2d439df6249cf258d6a4";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search({ city });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (forecast.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
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
        <WeatherOverview data={forecast} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
