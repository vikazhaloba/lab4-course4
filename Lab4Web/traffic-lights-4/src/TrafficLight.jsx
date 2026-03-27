import Light from "./Light";

const TrafficLights = ({
  direction = "vertical",
  onLightClick
}) => {

  const style = {
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    backgroundColor: "#333",
    padding: 10,
    width: "fit-content"
  };

  return (
    <div style={style}>
      <Light tlColor="red" onClick={() => onLightClick("red")} />
      <Light tlColor="yellow" onClick={() => onLightClick("yellow")} />
      <Light tlColor="green" onClick={() => onLightClick("green")} />
    </div>
  );
};

export default TrafficLights;