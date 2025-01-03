import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const cycleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="traffic-light">
      {colors.map((lightColor) => (
        <div
          key={lightColor}
          className={`light ${lightColor} ${
            color === lightColor ? "glow" : ""
          }`}
          onClick={() => setColor(lightColor)}
        />
      ))}
      <button onClick={cycleColor}>Cambiar Color</button>
      <button onClick={addPurple}>Añadir Púrpura</button>
    </div>
  );
};

export default TrafficLight;
