import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            •F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            •C
          </a>{" "}
          | •F
        </span>
      </div>
    );
  }
}
