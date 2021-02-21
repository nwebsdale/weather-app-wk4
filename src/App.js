import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Variables from "./Variables";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <Variables />
        <Forecast />
        <div className="footer">
          <a
            className="open-source"
            href="https://github.com/nwebsdale/she-codes-plus-weather-app"
            target="_blank"
            target="_blank"
          >
            Open-source code
          </a>
          <p> by Natasha Websdale</p>
        </div>
      </div>
    </div>
  );
}

export default App;
