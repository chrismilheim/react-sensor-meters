import React, { useState, useEffect } from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradient from "./subcomponents/SharedGradient";
import LabelDisplay from "./subcomponents/LabelDisplay";
import DataDisplay from "./subcomponents/DataDisplay";
export const TempLines = (props) => {
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
  } = props;

  const [randomId, setRandomId] = useState("");

  useEffect(() => {
    setRandomId(helper.getRandomSvgId());
  }, []);

  return (
    <div
      className={helper.getCardSize(gaugeSize)}
      style={helper.getCardColor(cardColor)}
    >
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
        viewBox="0 0 205.898 205.898"
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
            fill={"url(#" + randomId + ")"}
            d="M122.089,119.552V19.136C122.089,8.582,113.507,0,102.949,0S83.813,8.582,83.813,19.136v100.415    c-15.94,7.433-26.158,23.388-26.158,41.06c0,24.973,20.321,45.287,45.294,45.287c24.977,0,45.294-20.317,45.294-45.287    C148.243,142.939,138.026,126.985,122.089,119.552z M143.787,160.608c0,22.518-18.32    "
          />
        ) : (
          <React.Fragment />
        )}

        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            d="M122.089,119.552V19.136C122.089,8.582,113.507,0,102.949,0S83.813,8.582,83.813,19.136v100.415    c-15.94,7.433-26.158,23.388-26.158,41.06c0,24.973,20.321,45.287,45.294,45.287c24.977,0,45.294-20.317,45.294-45.287    C148.243,142.939,138.026,126.985,122.089,119.552z M143.787,160.608c0,22.518-18.32,40.831-40.838,40.831    c-22.515,0-40.838-18.313-40.838-40.831c0-16.373,9.742-31.118,24.809-37.56l1.349-0.583V19.136c0-8.095,6.585-14.68,14.68-14.68    s14.68,6.585,14.68,14.68v103.332l1.356,0.583C134.049,129.49,143.787,144.235,143.787,160.608z"
          />
        ) : (
          <React.Fragment />
        )}
        <path
          fill={dotColor}
          d="M105.179,116.739c0-1.228-0.998-2.226-2.23-2.226c-1.231,0-2.23,0.998-2.23,2.226v18.997    c-12.723,1.127-22.697,11.803-22.697,24.816c0,13.764,11.159,24.923,24.927,24.923s24.927-11.159,24.927-24.923    c0-13.013-9.974-23.685-22.697-24.816V116.739z M123.42,160.547c0,11.281-9.183,20.467-20.471,20.467s-20.467-9.183-20.467-20.467    c0-11.026,8.793-19.995,19.719-20.392c0.24,0.086,0.483,0.147,0.748,0.147c0.265,0,0.508-0.061,0.748-0.147    C114.627,140.552,123.42,149.521,123.42,160.547z"
        />
      </svg>{" "}
      <DataDisplay
        labelColor={labelColor}
        labelText={data}
        gaugeSize={gaugeSize}
        top={-25}
        dataType={"data"}
      />
      <DataDisplay
        labelColor={labelColor}
        labelText={date}
        gaugeSize={gaugeSize}
        top={-45}
        dataType={"date"}
      />
    </div>
  );
};

export default TempLines;
