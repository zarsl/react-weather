import React, { useState } from "react";
import axios from "axios";
import WeeklyPreview from "./WeeklyPreview";
import "./styles/WeeklyForecast.css";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city_name) {
    return (
      <div className="WeeklyForecast">
        <p>Weekly Forecast</p>
        <div className=" row">
          {forecast.data.slice(0, 7).map(function (forecastItem) {
            return <WeeklyPreview data={forecastItem} />;
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "e7fcc27adc98427b8d2d01e1ce75ad7e";
    let units = "metric";
    let apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${props.city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
