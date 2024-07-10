import React from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";

import LabelDisplay from "./subcomponents/LabelDisplay";

export const BasicList = (props) => {
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

  return (
    <div
      className={helper.getCardSize(gaugeSize)}
      style={helper.getCardColor(cardColor, randomColor)}
    >
      {" "}
      <div class="tagContainer">
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
        viewBox="0 0 32 38"
        style={{ "enable-background": " new 0 0 32 32" }}
        width={helper.getSvgSizeWidth(gaugeSize)}
        height={helper.getSvgSizeHeight(gaugeSize)}
        className={helper.getHover(hover)}
      >
        {data.map((item, index) => (
          <>
            {index < 10 && (
              <>
                <text
                  x={5}
                  y={5 + index * 4}
                  fill={randomColor}
                  style={{
                    "font-size": "20%",
                    "font-weight": "bold",
                    opacity: "0.8",
                    fontFamily: "Rajdhani, sans-serif",
                  }}
                >
                  {item}
                </text>
              </>
            )}
          </>
        ))}
      </svg>
    </div>
  );
};

export default BasicList;
