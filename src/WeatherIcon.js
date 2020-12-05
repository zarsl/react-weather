export default function WeatherIcon(props) {
  let imgUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <span className="WeatherIcon">
      <img className="icon" src={imgUrl} alt={props.description} />
    </span>
  );
}
