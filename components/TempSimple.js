import React, { useState, useEffect } from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradient from "./subcomponents/SharedGradient";
import LabelDisplay from "./subcomponents/LabelDisplay";
import DataDisplay from "./subcomponents/DataDisplay";
export const TempSimple = (props) => {
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
        viewBox="0 0 180.146 180.146"
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
            d="M116.707,104.542V26.631C116.707,11.946,104.758,0,90.07,0C75.386,0,63.438,11.946,63.438,26.631v77.911  c-10.013,8.046-15.879,20.135-15.879,33.091c0,23.442,19.07,42.514,42.511,42.514c23.443,0,42.517-19.071,42.517-42.514 C132.587,124.677,126.72,112.588,116.707,104.542z  "
          />
        ) : (
          <React.Fragment />
        )}

        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            d="M116.707,104.542V26.631C116.707,11.946,104.758,0,90.07,0C75.386,0,63.438,11.946,63.438,26.631v77.911  c-10.013,8.046-15.879,20.135-15.879,33.091c0,23.442,19.07,42.514,42.511,42.514c23.443,0,42.517-19.071,42.517-42.514  C132.587,124.677,126.72,112.588,116.707,104.542z M90.07,165.146c-15.17,0-27.511-12.343-27.511-27.514  c0-9.281,4.669-17.883,12.489-23.007c2.115-1.387,3.39-3.745,3.39-6.273V26.631C78.438,20.218,83.656,15,90.07,15  c6.417,0,11.637,5.218,11.637,11.631v81.722c0,2.529,1.274,4.888,3.39,6.273c7.821,5.124,12.49,13.725,12.49,23.007  C117.587,152.804,105.243,165.146,90.07,165.146z"
          />
        ) : (
          <React.Fragment />
        )}
      </svg>

      <DataDisplay
        labelColor={labelColor}
        labelText={data}
        gaugeSize={gaugeSize}
        top={-20}
        dataType={"data"}
      />

      <DataDisplay
        labelColor={labelColor}
        labelText={date}
        gaugeSize={gaugeSize}
        top={-40}
        dataType={"date"}
      />
    </div>
  );
};

export default TempSimple;
