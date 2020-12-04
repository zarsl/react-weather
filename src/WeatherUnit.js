import { useWeatherUnitUpdate } from "./context/WeatherUnitContext";

export default function WeatherUnit() {
  const toggleUnit = useWeatherUnitUpdate();
  return (
    <div>
      <button onClick={toggleUnit}> Change Units </button>
    </div>
  );
}
