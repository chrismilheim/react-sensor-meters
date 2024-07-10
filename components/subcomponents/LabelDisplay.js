import React from "react";

const LabelDisplay = (props) => {
  const { labelColor, labelText, gaugeSize } = props;

  // Define a variable to hold the fontSize based on gaugeSize
  let fontSize;
  switch (gaugeSize) {
    case "small":
      fontSize = "12px";
      break;
    case "medium":
      fontSize = "16px";
      break;
    case "large":
      fontSize = "20px";
      break;
    default:
      fontSize = "16px"; // Default size
      break;
  }

  return (
    <h4
      id="labelDisplay"
      style={{
        color: labelColor,
        fontSize: fontSize,
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      {labelText === undefined ? "" : labelText}
    </h4>
  );
};

export default LabelDisplay;
