import { useTimeUnitUpdate } from "./context/TimeUnitContext";

export default function TimeUnit() {
  const toggleTimeUnit = useTimeUnitUpdate();
  return (
    <div>
      <button onClick={toggleTimeUnit}> Change Time Units </button>
    </div>
  );
}
