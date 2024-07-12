import React from "react";

const DataDisplay = (props) => {
  const { labelColor, labelText, gaugeSize, top, dataType } = props;

  // Define a variable to hold the fontSize based on gaugeSize
  let fontSize;
  if (dataType === "data") {
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
  } else {
    switch (gaugeSize) {
      case "small":
        fontSize = "8px";
        break;
      case "medium":
        fontSize = "12px";
        break;
      case "large":
        fontSize = "16px";
        break;
      default:
        fontSize = "12px"; // Default size
        break;
    }
  }

  return (
    <h4
      id="dataDisplay"
      style={{
        color: labelColor,
        fontSize: fontSize,
        position: "relative",
        top: top,
        margin: dataType === "date" && "0px",
      }}
    >
      {labelText === undefined ? "" : labelText}
    </h4>
  );
};

export default DataDisplay;
