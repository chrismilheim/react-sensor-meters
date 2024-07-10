import React from "react";
import "../styles/gauge.css";
import * as helper from "./helperFunctions.js";
//let testArr = [2, 3, 4, 5, 6];

export const SharedGradient = (props) => {
  const {
    data,
    animate,
    fillColor,
    highFillColor,
    highFillThreshold,
    backFillColor,
    topEndDataLimit,
  } = props;

  return (
    <React.Fragment>
      <stop
        id="stop1"
        offset={helper.changeTempToPercent(data, topEndDataLimit)}
        stop-color={helper.getFillColor(
          highFillThreshold,
          data,
          fillColor,
          highFillColor
        )}
      >
        {animate === true ? (
          <animate
            dur="2s"
            attributeName="offset"
            fill="freeze"
            from="0"
            to={helper.changeTempToPercent(data, topEndDataLimit)}
          />
        ) : (
          <React.Fragment />
        )}
      </stop>
      <stop
        id="stop2"
        offset="0"
        stop-color={backFillColor === undefined ? "lightgrey" : backFillColor}
      >
        <animate
          dur="2s"
          attributeName="offset"
          fill="freeze"
          from="0"
          to=".10"
        />
      </stop>
    </React.Fragment>
  );
};

export default SharedGradient;
