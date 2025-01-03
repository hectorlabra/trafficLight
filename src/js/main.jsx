import React from "react";
import ReactDOM from "react-dom/client";
import TrafficLight from "./components/TrafficLight";
import "../styles/index.css";

const App = () => (
  <div className="container">
    <h1 className="title">Traffic Light</h1>
    <TrafficLight />
    <div className="footer">
      <p>
        Desarrollado por{" "}
        <a
          href="https://github.com/hectorlabra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Héctor Labra
        </a>
        <a
          href="https://github.com/hectorlabra/"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </p>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
