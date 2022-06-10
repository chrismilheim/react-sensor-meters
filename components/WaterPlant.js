import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradientInverse from "./subcomponents/SharedGradientInverse";
import LabelDisplay from "./subcomponents/LabelDisplay";
export const WaterPlant = (props) => {
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
        viewBox="0 0 32 42"
        style={{ "enable-background": " new 0 0 32 32" }}
        width={helper.getSvgSizeWidth(gaugeSize)}
        height={helper.getSvgSizeHeight(gaugeSize)}
        className={helper.getHover(hover)}
      >
        <defs>
          <linearGradient id={randomId} x1="0" y1="1" x2="0" y2="0">
            <SharedGradientInverse
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
            d="M24.5,30a5.202,5.202,0,0,1-4.626-8.08L23.49,16.5382a1.217,1.217,0,0,1,2.02,0L29.06,21.8154A5.4921,5.4921,0,0,1,30,24.751,5.385,5.385,0,0,1,24.5,30Zm0-11.38-2.9356,4.3672A3.2079,3.2079,0,0,0,24.5"
            transform="translate(0 0)"
          />
        ) : (
          <React.Fragment />
        )}

        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            d="M24.5,30a5.202,5.202,0,0,1-4.626-8.08L23.49,16.5382a1.217,1.217,0,0,1,2.02,0L29.06,21.8154A5.4921,5.4921,0,0,1,30,24.751,5.385,5.385,0,0,1,24.5,30Zm0-11.38-2.9356,4.3672A3.2079,3.2079,0,0,0,24.5,28,3.3855,3.3855,0,0,0,28,24.751a3.4354,3.4354,0,0,0-.63-1.867Z"
            transform="translate(0 0)"
          />
        ) : (
          <React.Fragment />
        )}

        <path
          fill={
            helper.changeInverseToPercent(data, topEndDataLimit) > 0.75
              ? "green"
              : helper.changeInverseToPercent(data, topEndDataLimit) < 0.75 &&
                helper.changeInverseToPercent(data, topEndDataLimit) > 0.35
              ? "rgba(235, 146, 63, 0.59)"
              : "rgba(0, 0, 0, 0.357)"
          }
          d="M11,16V11h1a4.0045,4.0045,0,0,0,4-4V4H13a3.9779,3.9779,0,0,0-2.7468,1.1067A6.0034,6.0034,0,0,0,5,2H2V5a6.0066,6.0066,0,0,0,6,6H9v5H2v2H16V16ZM13,6h1V7a2.002,2.002,0,0,1-2,2H11V8A2.002,2.002,0,0,1,13,6ZM8,9A4.0045,4.0045,0,0,1,4,5V4H5A4.0045,4.0045,0,0,1,9,8V9Z"
          transform="translate(0 0)"
        />
        <path
          fill={
            helper.changeInverseToPercent(data, topEndDataLimit) > 0.55
              ? "rgba(97, 235, 63, 0.59)"
              : helper.changeInverseToPercent(data, topEndDataLimit) < 0.55 &&
                helper.changeInverseToPercent(data, topEndDataLimit) > 0.35
              ? "rgba(235, 146, 63, 0.59)"
              : "rgba(0, 0, 0, 0.357)"
          }
          d="M11,16V11h1a4.0045,4.0045,0,0,0,4-4V4H13a3.9779,3.9779,0,0,0-2.7468,1.1067A6.0034,6.0034,0,0,0,5,2H2V5a6.0066,6.0066,0,0,0,6,6H9v5H2v2H16V16ZM13"
          transform="translate(0 0)"
        />

        <rect x="2" y="21" width="14" height="2" />
        <rect x="2" y="26" width="14" height="2" />

        <text
          x="21"
          y="34"
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

export default WaterPlant;
