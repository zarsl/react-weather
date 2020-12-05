import {
  useWeatherUnit,
  useWeatherUnitUpdate,
} from "./context/WeatherUnitContext";

export default function WeatherUnit() {
  const metric = useWeatherUnit();
  const toggleWeatherUnit = useWeatherUnitUpdate();

  function toggleWeather(event) {
    event.preventDefault();
    toggleWeatherUnit();
  }

  if (metric) {
    return (
      <span>
        <span>
          <strong>°C</strong> |
        </span>
        <a href="/" onClick={toggleWeather}>
          {"  "}
          °F
        </a>
      </span>
    );
  } else {
    return (
      <span>
        <a href="/" onClick={toggleWeather}>
          °C{"  "}
        </a>
        <span>
          | <strong>°F</strong>
        </span>
      </span>
    );
  }
}
