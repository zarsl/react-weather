import WeatherTemperature from "./WeatherTemperature";
import "./styles/WeeklyPreview.css";

export default function WeeklyPreview(props) {
  const date = props.data.datetime;
  let dateArray = date.split("-");
  let month = dateArray[1];
  let monthDate = dateArray[2];
  let formattedWeeklyDate = `${month}/${monthDate}`;

  let imgUrl = `https://www.weatherbit.io/static/img/icons/${props.data.weather.icon}.png`;
  return (
    <div className="WeeklyPreview">
      {formattedWeeklyDate}
      <div>
        <img
          className="icon"
          src={imgUrl}
          alt={props.data.weather.description}
        ></img>
      </div>
      <WeatherTemperature celsius={props.data.max_temp} />
    </div>
  );
}
