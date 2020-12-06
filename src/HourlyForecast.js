import React, { useState } from "react";
import axios from "axios";
import HourlyPreview from "./HourlyPreview";
import "./styles/HourlyForecast.css";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="HourlyForecast row">
        {forecast.list.slice(0, 6).map(function (forecastItem) {
          return <HourlyPreview data={forecastItem} />;
        })}
      </div>
    );
  } else {
    const apiKey = "4fb8f394cc5f2d439df6249cf258d6a4";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
