import React, { useState, useEffect } from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradient from "./subcomponents/SharedGradient";
import LabelDisplay from "./subcomponents/LabelDisplay";
import DataDisplay from "./subcomponents/DataDisplay";
export const CarBattery = (props) => {
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
        viewBox="0 0 446.3 486.3"
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
            d="M437.3,103.682h-40.304V68.995c0-4.97-4.029-9-9-9h-34.38c-4.971,0-9,4.03-9,9v34.688H101.684V68.995c0-4.97-4.029-9-9-9   H58.305c-4.971,0-9,4.03-9,9v34.688H9c-4.971,0-9,4.03-9,9v57.039c0,4.97,4.029,9,9,9h1.651v198.583c0,4.97,4.029,9,9,9h407   c4.971,0,9-4.03,9-9V178.721h1.648c4.971,0,9-4.03,9-9v-57.039C446.3,107.712,442.271,103.682,437.3,103.682z M362.616,77.995      "
          />
        ) : (
          <React.Fragment />
        )}
        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            xmlns="http://www.w3.org/2000/svg"
            id="temperature--low_1_"
            d="M437.3,103.682h-40.304V68.995c0-4.97-4.029-9-9-9h-34.38c-4.971,0-9,4.03-9,9v34.688H101.684V68.995c0-4.97-4.029-9-9-9   H58.305c-4.971,0-9,4.03-9,9v34.688H9c-4.971,0-9,4.03-9,9v57.039c0,4.97,4.029,9,9,9h1.651v198.583c0,4.97,4.029,9,9,9h407   c4.971,0,9-4.03,9-9V178.721h1.648c4.971,0,9-4.03,9-9v-57.039C446.3,107.712,442.271,103.682,437.3,103.682z M362.616,77.995   h16.38v25.688h-16.38V77.995z M67.305,77.995h16.379v25.688H67.305V77.995z M18,121.682h410.3v39.039H18V121.682z M417.651,368.305   h-389V178.721h389V368.305z"
          />
        ) : (
          <React.Fragment />
        )}
        <path
          fill={dotColor}
          d="M77.799,251.572v8c0,4.97,4.029,9,9,9s9-4.03,9-9v-8h8c4.971,0,9-4.03,9-9s-4.029-9-9-9h-8v-8c0-4.97-4.029-9-9-9   s-9,4.03-9,9v8h-8c-4.971,0-9,4.03-9,9s4.029,9,9,9H77.799z"
        />
        <path
          fill={dotColor}
          d="M86.799,291.572c27.019,0,49-21.981,49-49s-21.981-49-49-49s-49,21.981-49,49S59.78,291.572,86.799,291.572z    M86.799,211.572c17.094,0,31,13.906,31,31s-13.906,31-31,31s-31-13.906-31-31S69.705,211.572,86.799,211.572z"
        />
        <path
          fill={dotColor}
          d="M379.671,251.572c4.971,0,9-4.03,9-9s-4.029-9-9-9h-34c-4.971,0-9,4.03-9,9s4.029,9,9,9H379.671z"
        />
        <path
          fill={dotColor}
          d="M362.671,291.572c27.019,0,49-21.981,49-49s-21.981-49-49-49s-49,21.981-49,49S335.652,291.572,362.671,291.572z    M362.671,211.572c17.094,0,31,13.906,31,31s-13.906,31-31,31s-31-13.906-31-31S345.577,211.572,362.671,211.572z"
        />
        <path
          fill={dotColor}
          d="M193.353,275.059c2.89,2.211,6.829,2.463,9.979,0.638l29.866-17.308l-20.193,75.858c-1.278,4.803,1.579,9.734,6.382,11.012   c0.776,0.207,1.555,0.305,2.321,0.305c3.979,0,7.619-2.659,8.691-6.687l25.782-96.854c0.937-3.518-0.339-7.253-3.23-9.464   c-2.891-2.211-6.829-2.463-9.979-0.638l-29.866,17.308l12.69-47.673c1.278-4.803-1.579-9.734-6.382-11.012   c-4.808-1.278-9.734,1.578-11.013,6.382l-18.279,68.669C189.186,269.112,190.461,272.848,193.353,275.059z"
        />
      </svg>

      <DataDisplay
        labelColor={labelColor}
        labelText={data}
        gaugeSize={gaugeSize}
        top={-45}
        dataType={"data"}
      />

      <DataDisplay
        labelColor={labelColor}
        labelText={date}
        gaugeSize={gaugeSize}
        top={-50}
        dataType={"date"}
      />
    </div>
  );
};

export default CarBattery;
