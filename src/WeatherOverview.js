import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import HourlyForecast from "./HourlyForecast";

export default function WeatherOverview(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <span className="LocalTime">Local Time: </span>{" "}
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row ">
        <div className="col-7">
          <WeatherIcon
            icon={props.data.icon}
            description={props.data.description}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
      <HourlyForecast city={props.data.city} />
      <footer className="LastUpdate">
        Last Updated: <FormatDate date={props.data.date} />
      </footer>
    </div>
  );
}
