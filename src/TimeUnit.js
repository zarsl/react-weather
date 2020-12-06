import { useTimeUnit, useTimeUnitUpdate } from "./context/TimeUnitContext";

export default function TimeUnit() {
  const twelveHr = useTimeUnit();
  const toggleTimeUnit = useTimeUnitUpdate();
  function toggleTime(event) {
    event.preventDefault();
    toggleTimeUnit();
  }
  if (twelveHr) {
    return (
      <div>
        <span>12hr |</span>
        <a href="/" onClick={toggleTime}>
          {" "}
          24hr
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <a href="/" onClick={toggleTime}>
          12hr{" "}
        </a>
        <span>| 24hr</span>
      </div>
    );
  }
}

//               <span>
//                 <strong>12hr</strong>
//               </span>
//               <Toggle defaultChecked={false} onClick={toggleTimeUnit} icons={false} />
//               <span>24Hr</span>
// <span>12hr</span>
// <Toggle defaultChecked={true} onClick={toggleTimeUnit} icons={false} />
// <span>
//   <strong>24Hr</strong>
// </span>
