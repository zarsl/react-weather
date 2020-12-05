export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "c01d",
    "01n": "c01n",
    "02d": "c02d",
    "02n": "c02n",
    "03d": "c03d",
    "03n": "c03n",
    "04d": "c04d",
    "04n": "c04n",
    "09d": "r04d",
    "09n": "r04n",
    "10d": "r04d",
    "10n": "r04n",
    "11d": "t04d",
    "11n": "t04n",
    "13d": "s01d",
    "13n": "s01n",
    "50d": "a05d",
    "51n": "a05n",
  };

  let imgUrl = `https://www.weatherbit.io/static/img/icons/${
    codeMapping[props.icon]
  }.png`;

  return (
    <span className="WeatherIcon">
      <img className="icon" src={imgUrl} alt={props.description}></img>
    </span>
  );
}
