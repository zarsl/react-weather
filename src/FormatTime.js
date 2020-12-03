export default function FormatTime(props) {
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

  let formattedTime = `${hours}:${minutes} ${period}`;

  return formattedTime;
}
