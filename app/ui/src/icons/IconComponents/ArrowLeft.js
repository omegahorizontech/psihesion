import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 24 24"
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
      d="M24 0v24H0V0h24z" fill="none" opacity=".87"
    />
    <path
      d="M14 7l-5 5 5 5V7z"
    />
  </svg>
);

export default SVG;
