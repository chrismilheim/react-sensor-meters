export const changeTempToPercent = (data, topEndDataLimit) => {
  return data / topEndDataLimit;
};

export const changeInverseToPercent = (data, topEndDataLimit) => {
  return (topEndDataLimit - data) / topEndDataLimit;
};

export const getCardSize = (gaugeSize) => {
  if (gaugeSize === "small") {
    return "sensorCardSmall";
  } else if (gaugeSize === "medium") {
    return "sensorCardMedium";
  } else if (gaugeSize === "large") {
    return "sensorCardLarge";
  } else {
    return null;
  }
};

export const getSvgSizeWidth = (gaugeSize) => {
  if (gaugeSize === "small") {
    return 100;
  } else if (gaugeSize === "meduim") {
    return 200;
  } else if (gaugeSize === "large") {
    return 400;
  } else {
    return 200;
  }
};

export const getSvgSizeHeight = (gaugeSize) => {
  if (gaugeSize === "small") {
    return 100;
  } else if (gaugeSize === "meduim") {
    return 200;
  } else if (gaugeSize === "large") {
    return 400;
  } else {
    return 200;
  }
};

export const getCardColor = (cardColor) => {
  return cardColor !== null ? { backgroundColor: cardColor } : null;
};

export const getHover = (hover) => {
  return hover === true ? "sensorTransition sensorGrow" : null;
};

export const getFillColor = (
  highFillThreshold,
  data,
  fillColor,
  highFillColor
) => {
  return highFillThreshold <= data ? highFillColor : fillColor;
};

export const getNeonBorder = (neon) => {
  return neon !== "border" || neon === undefined;
};

export const getNeon_NO_Border = (neon) => {
  return neon !== "noBorder" || neon === undefined;
};

export const getRandomSvgId = () => {
  return (Math.random() + 1).toString(36).substring(8);
};

export default {
  changeTempToPercent,
  changeInverseToPercent,
  getCardSize,
  getSvgSizeWidth,
  getSvgSizeHeight,
  getCardColor,
  getHover,
  getFillColor,
  getNeonBorder,
  getNeon_NO_Border,
  getRandomSvgId,
};
