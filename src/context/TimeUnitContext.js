import React, { useState, useContext } from "react";

const TimeUnitContext = React.createContext();
const TimeUnitUpdateContext = React.createContext();

export function useTimeUnit() {
  return useContext(TimeUnitContext);
}

export function useTimeUnitUpdate() {
  return useContext(TimeUnitUpdateContext);
}

export default function TimeUnitProvider({ children }) {
  const [twelveHr, setTwelveHr] = useState(true);

  function toggleTimeUnit() {
    setTwelveHr((prevtwelveHr) => !prevtwelveHr);
  }

  return (
    <TimeUnitContext.Provider value={twelveHr}>
      <TimeUnitUpdateContext.Provider value={toggleTimeUnit}>
        {children}
      </TimeUnitUpdateContext.Provider>
    </TimeUnitContext.Provider>
  );
}
