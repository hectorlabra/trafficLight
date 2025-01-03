import React from "react";
import ReactDOM from "react-dom/client";
import TrafficLight from "./components/TrafficLight";
import "../styles/index.css";

const App = () => (
  <div>
    <TrafficLight />
    <div className="footer">
      <p>Desarrollado por Héctor Labra</p>
      <p>
        <a
          href="https://github.com/hectorlabra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
