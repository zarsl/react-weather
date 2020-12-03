import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherOverview(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                icon={props.data.icon}
                description={props.data.description}
              />
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
