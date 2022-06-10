import React from "react";

const LabelDisplay = (props) => {
  const { labelColor, labelText } = props;

  return (
    <h4 style={{ color: labelColor }}>
      {labelText === undefined ? "" : labelText}
    </h4>
  );
};

export default LabelDisplay;
