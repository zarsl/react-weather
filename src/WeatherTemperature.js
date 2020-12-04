import { useWeatherUnit } from "./context/WeatherUnitContext";

export default function WeatherTemperature(props) {
  const metric = useWeatherUnit();

  const celsius = Math.round(props.celsius);
  const fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

  if (metric) {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{celsius}</span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{fahrenheit}</span>
      </span>
    );
  }
}
