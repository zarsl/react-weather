import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";
import WeatherUnit from "./WeatherUnit";
import TimeUnit from "./TimeUnit";
import { useTheme } from "./context/ThemeContext";

import "./styles/WeatherOverview.css";

export default function WeatherOverview(props) {
  const darkTheme = useTheme();
  const themeStyles = {
    color: darkTheme ? "#333" : "#fcfcfc",
  };

  return (
    <div className="WeatherOverview">
      <div className="SummarySection">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />{" "}
            <FormatTime date={props.data.date} />{" "}
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <span className="MainIcon">
              <WeatherIcon
                icon={props.data.icon}
                description={props.data.description}
              />
            </span>
            <span className="MainTemp" styles={themeStyles}>
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
            <WeatherUnit />
          </div>
          <div className="col-5">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="HourlyForecastSection">
        <HourlyForecast city={props.data.city} />
      </div>
      <div className="WeeklyForecastSection">
        <WeeklyForecast city={props.data.city} />
      </div>
      <div className="row LowerSection">
        <div className="col-6 TimeToggle">
          <TimeUnit />
        </div>
        <div className="LastUpdate col-6">
          Last Updated: <FormatDate date={props.data.date} />{" "}
          <FormatTime date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
