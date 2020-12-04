import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormatTime from "./FormatTime";

import "./HourlyPreview.css";

export default function HourlyPreview(props) {
  const date = new Date(props.data.dt * 1000);

  return (
    <div className="HourlyPreview">
      <FormatTime date={date} />
      <div>
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <WeatherTemperature celsius={props.data.main.temp} />
    </div>
  );
}
