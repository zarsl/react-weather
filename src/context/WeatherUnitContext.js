import React, { useState, useContext } from "react";

const WeatherUnitContext = React.createContext();
const WeatherUnitUpdateContext = React.createContext();

export function useWeatherUnit() {
  return useContext(WeatherUnitContext);
}

export function useWeatherUnitUpdate() {
  return useContext(WeatherUnitUpdateContext);
}

export default function WeatherUnitProvider({ children }) {
  const [metric, setMetric] = useState(true);

  function toggleUnit() {
    setMetric((prevMetric) => !prevMetric);
  }

  return (
    <WeatherUnitContext.Provider value={metric}>
      <WeatherUnitUpdateContext.Provider value={toggleUnit}>
        {children}
      </WeatherUnitUpdateContext.Provider>
    </WeatherUnitContext.Provider>
  );
}
