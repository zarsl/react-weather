import React, { useState } from "react";

export default function HourConversion() {
  const [clock, setClock] = useState("12hr");
  function showMilitaryHour(event) {
    event.preventDefault();
    setClock("24hr");
  }

  function showHour(event) {
    event.preventDefault();
    setClock("12hr");
  }

  if (clock === "12hr") {
    return (
      <span className="HourConversion">
        {" "}
        12hr |{" "}
        <a href="/" onClick={showMilitaryHour}>
          {" "}
          24hr
        </a>
      </span>
    );
  } else {
    return (
      <span className="HourConversion">
        <a href="/" onClick={showHour}>
          12hr
        </a>{" "}
        | 24hr
      </span>
    );
  }
}
