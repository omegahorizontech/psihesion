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

    <path d="M19.518,34.914c-7.798,7.794-7.798,20.484,0.002,28.281c7.799,7.799,20.484,7.799,28.283,0.002l0.732-0.734l-4.318-4.317     l-0.735,0.733c-5.413,5.413-14.228,5.413-19.646-0.003c-5.413-5.415-5.413-14.227,0-19.643c5.416-5.416,14.23-5.416,19.646,0     l14.835,14.835l4.318-4.316L47.8,34.914C40,27.118,27.314,27.118,19.518,34.914z"></path>
    <path d="M53.361,34.914c-0.002,0.002-0.692,0.695-0.692,0.695l4.327,4.311l0.692-0.692c2.618-2.619,6.105-4.065,9.815-4.065      c3.711,0,7.196,1.446,9.821,4.069c2.626,2.625,4.072,6.113,4.072,9.824c0,3.711-1.446,7.198-4.069,9.822      c-5.413,5.413-14.226,5.413-19.644,0L41.725,42.92l-4.32,4.317l15.961,15.96c7.796,7.797,20.486,7.797,28.283,0      c3.773-3.779,5.856-8.797,5.856-14.14c0-5.343-2.083-10.367-5.862-14.141c-3.773-3.777-8.799-5.858-14.14-5.858      S57.14,31.139,53.361,34.914z"></path>

  </svg>
);

export default SVG;
