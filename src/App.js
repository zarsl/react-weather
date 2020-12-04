import Weather from "./Weather";
import "./App.css";
import WeatherUnitProvider from "./context/WeatherUnitContext";
import TimeUnitProvider from "./context/TimeUnitContext";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherUnitProvider>
          <TimeUnitProvider>
            <Weather defaultCity="New York" />
            <footer>
              This project was coded by Zeynep Arslan and is{" "}
              <a
                href="https://github.com/zarsl/react-weather"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                open-sourced on Github
              </a>
            </footer>
          </TimeUnitProvider>
        </WeatherUnitProvider>
      </div>
    </div>
  );
}
