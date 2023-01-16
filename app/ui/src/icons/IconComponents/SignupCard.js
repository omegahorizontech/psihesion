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

  <path d="M30,8H22V7a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V8H2A1,1,0,0,0,1,9V26a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V9A1,1,0,0,0,30,8ZM12,7h8v3H12V7ZM29,25H3V10h7a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2h7Z"></path>
  <path d="M17,16a1,1,0,0,0,1,1h9a1,1,0,0,0,0-2H18A1,1,0,0,0,17,16Z"></path>
  <path d="M27,19H18a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"></path>
  <path d="M11,19H9a4,4,0,0,0-4,4,1,1,0,0,0,2,0,2,2,0,0,1,2-2h2a2,2,0,0,1,2,2,1,1,0,0,0,2,0A4,4,0,0,0,11,19Z"></path>
  <circle cx="10" cy="16" r="2"></circle>


  </svg>
);

export default SVG;
