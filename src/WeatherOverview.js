import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import HourlyForecast from "./HourlyForecast";
import WeatherUnit from "./WeatherUnit";
import TimeUnit from "./TimeUnit";
import "./styles/WeatherOverview.css";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div clasName="SummarySection">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <span className="LocalTime">
              Local Time: <FormatDate date={props.data.date} />{" "}
              <FormatTime date={props.data.date} />{" "}
            </span>
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
            <span className="MainTemp">
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
      <div className="row LowerSection">
        <div className="col-6">
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
