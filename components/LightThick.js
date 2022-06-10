import React, { useState, useEffect } from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradient from "./subcomponents/SharedGradient";
import LabelDisplay from "./subcomponents/LabelDisplay";
export const LightThick = (props) => {
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
        viewBox="0 0 583.891 583.891"
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

        <path d="m6.5 17.5h4" />
        {helper.getNeonBorder(neon) ? (
          <path
            id="test"
            fill={"url(#" + randomId + ")"}
            d="M391.461,354.651c0-1.873,1.906-5.169,3.642-6.298c54.287-35.315,86.695-94.566,86.695-158.502    C481.798,85.166,396.629,0,291.944,0S102.092,85.169,102.092,189.852c0,63.902,32.408,123.156,86.693,158.499    c1.735,1.129,3.645,4.431,3.645,6.304v52.008c0,24.987,20.328,45.315,45.315,45.315h108.404c24.987,0,45.315-20.328,45.315-45.315           "
          />
        ) : (
          <React.Fragment />
        )}

        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            xmlns="http://www.w3.org/2000/svg"
            id="temperature--low_1_"
            d="M391.461,354.651c0-1.873,1.906-5.169,3.642-6.298c54.287-35.315,86.695-94.566,86.695-158.502    C481.798,85.166,396.629,0,291.944,0S102.092,85.169,102.092,189.852c0,63.902,32.408,123.156,86.693,158.499    c1.735,1.129,3.645,4.431,3.645,6.304v52.008c0,24.987,20.328,45.315,45.315,45.315h108.404c24.987,0,45.315-20.328,45.315-45.315    v-52.011H391.461z M349.468,312.139c-7.242,4.21-12.5,13.351-12.5,21.729v11.604v52.011h-90.046h-0.012l0.012-52.008v-11.569    c0-8.375-5.251-17.516-12.481-21.735l-10.031-5.854c-42.473-24.725-67.825-68.26-67.825-116.464    c0-74.636,60.723-135.359,135.359-135.359s135.359,60.723,135.359,135.359c0,48.217-25.35,91.751-67.812,116.454L349.468,312.139z    "
          />
        ) : (
          <React.Fragment />
        )}

        <path
          fill={dotColor}
          d="M385.879,492.55c0-12.717-11.563-23.063-25.777-23.063H223.789c-14.214,0-25.777,10.347-25.777,23.063    c0,12.718,11.563,23.063,25.777,23.063h136.313C374.316,515.613,385.879,505.268,385.879,492.55z"
        />
        <path
          fill={dotColor}
          d="M237.95,537.765c-15.707,0-28.489,10.346-28.489,23.063c0,12.717,12.779,23.062,28.489,23.062h109.471    c15.71,0,28.489-10.346,28.489-23.062c0-12.718-12.779-23.063-28.489-23.063H237.95z"
        />
        <path
          fill={dotColor}
          d="M309.288,73.094c-71.545,0-129.768,58.223-129.768,129.769c0,10.248,8.292,18.538,18.538,18.538    c10.248,0,18.537-8.29,18.537-18.538c0-51.126,41.585-92.69,92.69-92.69c10.248,0,18.538-8.29,18.538-18.538    C327.829,81.387,319.536,73.094,309.288,73.094z"
        />
        <text
          x="400"
          y="575"
          fill={valueColor}
          style={{
            "font-size": "330%",
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

export default LightThick;
