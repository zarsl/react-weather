export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let period = "AM";

  if (hours > 12) {
    hours = hours - 12;
    period = "PM";
  }

  let formattedTime = `${day} ${hours}:${minutes} ${period}`;

  return formattedTime;
}
