export default function WeatherIcon(props) {
  let imgUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return <img src={imgUrl} alt={props.description} />;
}
