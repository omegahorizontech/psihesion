import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 22 24"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"
      
    />
    <path
      d="M0 0h24v24H0z"
    />
  </svg>
);

export default SVG;
