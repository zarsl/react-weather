import React, { useState } from "react";
import axios from "axios";
import WeatherOverview from "./WeatherOverview";
import { useTheme, useThemeUpdate } from "./context/ThemeContext";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./styles/Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState({ ready: false });
  const apiKey = "4fb8f394cc5f2d439df6249cf258d6a4";
  let apiUrl = null;
  let units = "metric";
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
  };
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
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation(position) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
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
      <div className="Weather" style={themeStyles}>
        <form onSubmit={handleSubmit}>
          <div className="row SearchBar">
            <div className="col-7 w-100">
              <span className="InputSearch">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                  onChange={updateCity}
                />
              </span>
            </div>
            <div className="col-2">
              <span className="SearchButton">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </span>
            </div>
            <div className="col-2">
              <span className="LocationButton">
                <input
                  type="button"
                  value="📌"
                  className="form-control btn btn-outline-secondary CurrentLocation"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Search by current location"
                  onClick={handleCurrentLocation}
                ></input>
              </span>
            </div>
            <div className="col-1">
              <span className="ThemeButton">
                <Toggle
                  checked={darkTheme}
                  icons={{ checked: "☀️", unchecked: "🌙" }}
                  onChange={toggleTheme}
                />
              </span>
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

//todo:
//add current location search capability
