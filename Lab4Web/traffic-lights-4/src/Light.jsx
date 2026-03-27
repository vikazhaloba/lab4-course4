import PropTypes from "prop-types";

function Light({ tlColor, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: tlColor,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: 5,
        cursor: "pointer"
      }}
    ></div>
  );
}

Light.propTypes = {
  tlColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Light;