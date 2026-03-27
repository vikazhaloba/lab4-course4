import { useState } from "react";
import TrafficLights from "./TrafficLight";
import StatsBar from "./StatsBar";

function App() {
  const [counts, setCounts] = useState({ red: 0, yellow: 0, green: 0 });
  const [direction, setDirection] = useState("vertical");

  const handleLightClick = (color) => {
    setCounts(prev => ({ ...prev, [color]: prev[color] + 1 }));
  };

  const toggleDirection = () => {
    setDirection(prev => (prev === "vertical" ? "horizontal" : "vertical"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Світлофор</h1>

      <TrafficLights
        direction={direction}
        onLightClick={handleLightClick}
      />

      <StatsBar
        counts={counts}
        direction={direction}
        onToggleDirection={toggleDirection}
      />
    </div>
  );
}

export default App;