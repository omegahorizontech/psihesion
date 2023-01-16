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

    <path d="M20,19a1,1,0,0,0-1,1v5H13V6a1,1,0,0,0-.63-.93L7.19,3H19v9a1,1,0,0,0,2,0V2a1,1,0,0,0-1-1H2a1,1,0,0,0-.33.06l-.06,0-.13.07-.11.1-.05,0a.75.75,0,0,0-.18.28l0,.06A1,1,0,0,0,1,2V26a1,1,0,0,0,.63.93l10,4A.94.94,0,0,0,12,31a1,1,0,0,0,.56-.17A1,1,0,0,0,13,30V27h7a1,1,0,0,0,1-1V20A1,1,0,0,0,20,19Zm-9,9.52-8-3.2V3.48l8,3.2Z"></path>
    <path d="M30.71,15.29l-4-4a1,1,0,0,0-1.42,1.42L27.59,15H16a1,1,0,0,0,0,2H27.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,30.71,15.29Z"></path>

  </svg>
);

export default SVG;
