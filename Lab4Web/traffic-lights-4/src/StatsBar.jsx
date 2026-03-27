import React from "react";
import PropTypes from "prop-types";

const StatsBar = ({ counts, direction, onToggleDirection }) => {
  return (
    <div style={{
      marginTop: 20,
      padding: 10,
      border: "1px solid #ccc",
      borderRadius: 8,
      backgroundColor: "#f9f9f9",
      maxWidth: 300
    }}>
      <button onClick={onToggleDirection} style={{ marginBottom: 10, padding: "5px 10px" }}>
        Змінити напрямок світлофора ({direction})
      </button>
      <div>
        <strong>Статистика кліків:</strong>
        <p>Червоний - {counts.red}</p>
        <p>Жовтий - {counts.yellow}</p>
        <p>Зелений - {counts.green}</p>
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  counts: PropTypes.shape({
    red: PropTypes.number,
    yellow: PropTypes.number,
    green: PropTypes.number
  }).isRequired,
  direction: PropTypes.string.isRequired,
  onToggleDirection: PropTypes.func.isRequired
};

export default StatsBar;