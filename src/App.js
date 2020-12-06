import Weather from "./Weather";
import WeatherUnitProvider from "./context/WeatherUnitContext";
import TimeUnitProvider from "./context/TimeUnitContext";
import "./styles/App.css";
import { useTheme, useThemeUpdate } from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeContext";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function App() {
  const lightTheme = useTheme();
  const toggleTheme = useThemeUpdate();

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
              <Toggle
                checked={lightTheme}
                icons={false}
                onChange={toggleTheme}
              />
            </TimeUnitProvider>
          </WeatherUnitProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
