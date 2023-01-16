import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 100 100"
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

    <path d="M196.4,48.1"></path>
    <path d="M50,87.7c-20.8,0-37.7-16.9-37.7-37.7S29.2,12.3,50,12.3v3.8c-18.7,0-33.9,15.2-33.9,33.9c0,18.7,15.2,33.9,33.9,33.9   S83.9,68.7,83.9,50h3.8C87.7,70.8,70.8,87.7,50,87.7z"></path>

  </svg>
);

export default SVG;
