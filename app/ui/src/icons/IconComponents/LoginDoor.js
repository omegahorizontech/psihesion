import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
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

    <path d="M11.29,19.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,0,0-1.42,1.42L13.59,15H2a1,1,0,0,0,0,2H13.59Z"></path>
    <path d="M30.9,1.59a.75.75,0,0,0-.18-.28l0,0-.11-.1a.61.61,0,0,0-.14-.07l-.05,0A1,1,0,0,0,30,1H12a1,1,0,0,0-1,1V8a1,1,0,0,0,2,0V3H24.81L19.63,5.07A1,1,0,0,0,19,6V25H13V24a1,1,0,0,0-2,0v2a1,1,0,0,0,1,1h7v3a1,1,0,0,0,.44.83A1,1,0,0,0,20,31a.94.94,0,0,0,.37-.07l10-4A1,1,0,0,0,31,26V2a1,1,0,0,0-.07-.35ZM29,25.32l-8,3.2V6.68l8-3.2Z"></path>

  </svg>
);

export default SVG;
