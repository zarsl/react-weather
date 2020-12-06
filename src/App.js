import Weather from "./Weather";
import WeatherUnitProvider from "./context/WeatherUnitContext";
import TimeUnitProvider from "./context/TimeUnitContext";
import "./styles/App.css";
import ThemeProvider from "./context/ThemeContext";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <ThemeProvider>
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
        </ThemeProvider>
      </div>
    </div>
  );
}
