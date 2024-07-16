import React from "react";

const LabelDisplay = (props) => {
  const { labelColor, labelText, gaugeSize } = props;

  // Define a variable to hold the fontSize based on gaugeSize
  let fontSize;
  switch (gaugeSize) {
    case "small":
      fontSize = "8px";
      break;
    case "medium":
      fontSize = "10px";
      break;
    case "large":
      fontSize = "12px";
      break;
    default:
      fontSize = "10px"; // Default size
      break;
  }

  const truncatedLabelText =
    labelText && labelText.length > 34
      ? `${labelText.slice(0, 34)}...`
      : labelText;

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
      {truncatedLabelText === undefined ? "" : truncatedLabelText}
    </h4>
  );
};

export default LabelDisplay;
