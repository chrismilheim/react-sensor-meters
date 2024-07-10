import React from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import LabelDisplay from "./subcomponents/LabelDisplay";
import DataDisplay from "./subcomponents/DataDisplay";
export const BasicNumber = (props) => {
  const {
    data,
    animate,
    neon,
    fillColor,
    highFillColor,
    highFillThreshold,
    backFillColor,
    dotColor,
    gaugeSize,
    valueColor,
    labelColor,
    cardColor,
    hover,
    labelText,
    topEndDataLimit,
    borderColor,
    date,
    randomColor,
    rawSensorData,
    name,
  } = props;

  // Function to determine font size and x position based on data length
  const getFontSizeAndPosition = (dataLength) => {
    switch (dataLength) {
      case 1:
        return { fontSize: "80%", x: "10" };
      case 2:
        return { fontSize: "80%", x: "6" };
      case 3:
        return { fontSize: "70%", x: "2" };
      case 4:
        return { fontSize: "60%", x: "0" };
      default:
        return { fontSize: "50%", x: "0" };
    }
  };

  const dataString = String(data);
  const { fontSize, x } = getFontSizeAndPosition(dataString.length);

  return (
    <div
      className={helper.getCardSize(gaugeSize)}
      style={helper.getCardColor(cardColor, randomColor)}
    >
      <div className="tagContainer">
        <LabelDisplay
          labelColor={labelColor}
          labelText={labelText}
          gaugeSize={gaugeSize}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 10 30 38"
        style={{ enableBackground: "new 0 0 32 32" }}
        width={helper.getSvgSizeWidth(gaugeSize)}
        height={helper.getSvgSizeHeight(gaugeSize)}
        className={helper.getHover(hover)}
      >
        <text
          x={x}
          y="30"
          fill={randomColor}
          style={{
            fontSize: fontSize,
            fontWeight: "bold",
            opacity: 0.8,
            fontFamily: "Rajdhani, sans-serif",
          }}
        >
          {data}
        </text>
      </svg>{" "}
      <DataDisplay
        labelColor={labelColor}
        labelText={date}
        gaugeSize={gaugeSize}
        top={-1}
        dataType={"date"}
      />
    </div>
  );
};

export default BasicNumber;
