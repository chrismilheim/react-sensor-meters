import React, { useState, useEffect } from "react";
import "./styles/gauge.css";
import * as helper from "./subcomponents/helperFunctions.js";
import SharedGradientInverse from "./subcomponents/SharedGradientInverse";
import LabelDisplay from "./subcomponents/LabelDisplay";
import DataDisplay from "./subcomponents/DataDisplay";
export const H2ODrop = (props) => {
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
        viewBox="0 0 463 693"
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
            d="M380.058,170.01c-14.224-30.789-34.026-61.115-58.86-90.137c-42.183-49.297-83.771-77.43-85.521-78.603   c-2.527-1.694-5.828-1.694-8.355,0c-1.749,1.173-43.338,29.306-85.521,78.603c-24.834,29.021-44.637,59.348-58.86,90.137   C65.064,208.709,56,248.238,56,287.5C56,384.271,134.728,463,231.5,463S407,384.271,407,287.5     "
          />
        ) : (
          <React.Fragment />
        )}

        {helper.getNeon_NO_Border(neon) ? (
          <path
            fill={neon === "border" ? "url(#" + randomId + ")" : borderColor}
            d="M380.058,170.01c-14.224-30.789-34.026-61.115-58.86-90.137c-42.183-49.297-83.771-77.43-85.521-78.603   c-2.527-1.694-5.828-1.694-8.355,0c-1.749,1.173-43.338,29.306-85.521,78.603c-24.834,29.021-44.637,59.348-58.86,90.137   C65.064,208.709,56,248.238,56,287.5C56,384.271,134.728,463,231.5,463S407,384.271,407,287.5   C407,248.238,397.935,208.709,380.058,170.01z M231.5,448C143,448,71,376,71,287.5c0-37.002,8.566-74.343,25.46-110.985   c13.602-29.501,32.603-58.631,56.474-86.579c33.306-38.993,67.018-64.867,78.568-73.252c11.512,8.349,45.021,34.052,78.3,72.942   c23.938,27.976,42.994,57.137,56.64,86.676C383.4,213.013,392,250.426,392,287.5C392,376,320,448,231.5,448z"
          />
        ) : (
          <React.Fragment />
        )}
        <path
          fill={dotColor}
          d="M365.462,312.214c-4.028-0.975-8.079,1.499-9.054,5.524c-8.594,35.495-32.084,65.794-64.448,83.128   c-3.651,1.955-5.026,6.501-3.07,10.152c1.352,2.524,3.941,3.96,6.618,3.96c1.194,0,2.407-0.286,3.534-0.89   c36.125-19.348,62.348-53.18,71.944-92.821C371.961,317.242,369.488,313.188,365.462,312.214z"
        />
        <path
          fill={dotColor}
          d="M374.387,270.948c-0.306-4.13-3.892-7.225-8.033-6.926c-4.131,0.306-7.231,3.902-6.926,8.033   c0.38,5.127,0.572,10.323,0.572,15.444c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5C375,282.01,374.794,276.441,374.387,270.948z"
        />
        <path
          fill={dotColor}
          d="M199.5,216c-4.143,0-7.5,3.357-7.5,7.5V264h-49v-40.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v96   c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V279h49v40.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-96   C207,219.357,203.642,216,199.5,216z"
        />
        <path
          fill={dotColor}
          d="M335,287.5v-32c0-21.78-17.72-39.5-39.5-39.5s-39.5,17.72-39.5,39.5v32c0,21.78,17.72,39.5,39.5,39.5S335,309.28,335,287.5   z M271,287.5v-32c0-13.51,10.99-24.5,24.5-24.5s24.5,10.99,24.5,24.5v32c0,13.51-10.99,24.5-24.5,24.5S271,301.01,271,287.5z"
        />
        <path
          fill={dotColor}
          d="M235.5,351h4c10.752,0,19.5-8.748,19.5-19.5s-8.748-19.5-19.5-19.5h-8c-8.547,0-15.5,6.953-15.5,15.5   c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5c0-0.275,0.225-0.5,0.5-0.5h8c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5h-4   c-10.752,0-19.5,8.748-19.5,19.5v12c0,4.143,3.357,7.5,7.5,7.5h28c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H231v-4.5   C231,353.018,233.018,351,235.5,351z"
        />
      </svg>{" "}
      <DataDisplay
        labelColor={labelColor}
        labelText={data}
        gaugeSize={gaugeSize}
        top={-50}
        dataType={"data"}
      />
      <DataDisplay
        labelColor={labelColor}
        labelText={date}
        gaugeSize={gaugeSize}
        gaugeSize={gaugeSize}
        top={-50}
        dataType={"date"}
      />
    </div>
  );
};

export default H2ODrop;
