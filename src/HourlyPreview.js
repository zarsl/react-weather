import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormatTime from "./FormatTime";

import "./styles/HourlyPreview.css";

export default function HourlyPreview(props) {
  const date = new Date(props.data.dt * 1000);

  return (
    <div className="HourlyPreview">
      <FormatTime date={date} />
      <div className="HourlyIcon">
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <span className="MaxTemp">
        <WeatherTemperature celsius={props.data.main.temp_max} />
        {"°"}
      </span>
      <span className="MinTemp">
        <WeatherTemperature celsius={props.data.main.temp_min} />
        {"°"}
      </span>
    </div>
  );
}
