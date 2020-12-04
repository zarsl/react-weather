import { useTimeUnit } from "./context/TimeUnitContext";

export default function FormatTime(props) {
  const twelveHr = useTimeUnit();

  let hours = props.date.getHours();
  let militaryHours = props.date.getHours();
  if (militaryHours < 10) {
    militaryHours = `0${militaryHours}`;
  }

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
  let militaryTime = `${militaryHours}:${minutes}`;

  if (twelveHr) {
    return formattedTime;
  } else {
    return militaryTime;
  }
}
