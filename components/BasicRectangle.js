import React, { useState, useEffect } from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradient from "./subcomponents/SharedGradient";
import LabelDisplay from "./subcomponents/LabelDisplay";
export const BasicRectangle = (props) => {
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
  } = props;

  const [randomId, setRandomId] = useState("");

  useEffect(() => {
    setRandomId((Math.random() + 1).toString(36).substring(8));
  }, []);

  return (
    <div
      className={helper.getCardSize(gaugeSize)}
      style={helper.getCardColor(cardColor)}
    >
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
        <defs>
          <linearGradient id={randomId} x1="0" y1="1" x2="0" y2="0">
            <SharedGradient
              data={data}
              animate={animate}
              fillColor={fillColor}
              highFillColor={highFillColor}
              highFillThreshold={highFillThreshold}
              backFillColor={backFillColor}
              topEndDataLimit={topEndDataLimit}
            />
          </linearGradient>
        </defs>

        {helper.getNeonBorder(neon) ? (
          <path
            id="test"
            fill={"url(#" + randomId + ")"}
            d="M23.93,2H8.07a2.8,2.8,0,0,0-2.8,2.8V27.2A2.8,2.8,0,0,0,8.07,30H23.93a2.8,2.8,0,0,0,2.8-2.8V4.8A2.8,2.8,0,0,0,23.93,2Zm.94"
          />
        ) : (
          <React.Fragment />
        )}

        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            xmlns="http://www.w3.org/2000/svg"
            id="temperature--low_1_"
            d="M23.93,2H8.07a2.8,2.8,0,0,0-2.8,2.8V27.2A2.8,2.8,0,0,0,8.07,30H23.93a2.8,2.8,0,0,0,2.8-2.8V4.8A2.8,2.8,0,0,0,23.93,2Zm.94,25.2a.94.94,0,0,1-.94.93H8.07a.94.94,0,0,1-.94-.93V4.8a.94.94,0,0,1,.94-.93H23.93a.94.94,0,0,1,.94.93Z"
          />
        ) : (
          <React.Fragment />
        )}

        <text
          x="28"
          y="28"
          fill={valueColor}
          style={{
            "font-size": "20%",
            "font-weight": "bold",
            opacity: "0.8",
          }}
        >
          {data}
        </text>
      </svg>
      <div class="tagContainer">
        <LabelDisplay labelColor={labelColor} labelText={labelText} />
      </div>
    </div>
  );
};

export default BasicRectangle;
