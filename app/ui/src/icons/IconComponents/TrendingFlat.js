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
      d="M22 12l-4-4v3H3v2h15v3z"
      
    />
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
  </svg>
);

export default SVG;
