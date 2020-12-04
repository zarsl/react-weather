import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./HourlyPreview.css";

export default function HourlyPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  // function temperature() {
  //   let temperature = Math.round(props.data.main.temp);
  //   return `${temperature}°C`;
  // }

  return (
    <div className="HourlyPreview">
      {hours()}
      <div>
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <WeatherTemperature celsius={props.data.main.temp} />
    </div>
  );
}
