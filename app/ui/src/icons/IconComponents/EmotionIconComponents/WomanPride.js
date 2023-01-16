import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 512 512"
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

    <path d="M512.11,350.87c-4.09-45.31-20.69-119.7-76.52-216.79-31.3-54.44-69.71-104.71-83.87-109.76-13.48-4.82-25.36,2.35-33.53,10.14C311,23.29,293.9,13.16,267.32,4.27,209.38-15.11,133.65,51,97.25,82.75,91.31,87.93,86.62,92,83.43,94.5c-18,14-33.76,66.91-55.75,146.11C22.06,260.83,16.76,279.92,11.56,297a311.36,311.36,0,0,0-10.7,62.7c-3.21,47.32,5.46,84.53,25.77,110.61,21.28,27.32,54.64,41.13,99.25,41.13q5.12,0,10.42-.24a7.49,7.49,0,0,0,1.26-.17c2.33.12,4.69.18,7.1.18H254.78l86.5.27a180,180,0,0,0,19.78,1c28.11,0,79.35-5.27,114.85-39.61C504.73,445,516.91,403.94,512.11,350.87ZM38.49,461.15C-4.75,405.69,25.61,302.4,25.92,301.38c5.24-17.27,10.57-36.45,16.21-56.76C57.76,188.34,77.21,118.3,92.62,106.36c3.53-2.74,8.37-7,14.5-12.31,17.57-15.34,44.12-38.51,73.15-55.88,24.92-14.9,46.59-22.4,64.71-22.4a55.22,55.22,0,0,1,17.58,2.72c35.19,11.77,42.57,22.21,44.11,26.16a4.72,4.72,0,0,1,.28,3.5c-.07.08,0,0-.1.19s-.08.14-.11.19l-49.42,77.23c-6-7.33-15.58-16.5-27.37-19.12a29.89,29.89,0,0,0-23.88,5,351.85,351.85,0,0,0-32.63,25.29,56.4,56.4,0,0,0-12.24,15.3c-3.2,5.85-8.14,16.33-14.39,29.61-16.89,35.9-45.16,96-71.59,131.6C56.62,338.49,52.55,371,52.11,375,51,380.71,40.38,442.63,72.25,481.34a77.94,77.94,0,0,0,8.24,8.59C63,484.14,48.92,474.53,38.49,461.15ZM404.83,302.37c-1,21.89-12.37,36.21-21.75,44.39,3-26.26,5.2-46.92,6.64-60.49A213.05,213.05,0,0,0,404.83,302.37ZM366.36,361a.37.37,0,0,1,0,.11q-1.34,11.65-2.83,24.46C361,407,347.21,448.91,283.1,488.24a54.1,54.1,0,0,1-28.29,8H226.32a54.14,54.14,0,0,1-28.3-8c-64.11-39.33-77.9-81.21-80.42-102.67-8.49-72.52-10.45-93.05-10.46-93.24l0-.15c20.34-34,39.48-74.67,53.28-104,6.14-13.05,11-23.35,14-28.8a41.25,41.25,0,0,1,9-11.24A334.37,334.37,0,0,1,214.58,124c4-2.72,7.92-3.6,12.09-2.68,11,2.43,21.44,16.47,24.52,21.67.05.09.12.17.17.26l.26.37.25.33.32.36.26.27a7.31,7.31,0,0,0,.59.52l.26.18.44.29.34.2.4.2.38.17.45.16.6.17a3.86,3.86,0,0,0,.49.1l.38.06.51,0,.22,0h.13l.56,0c.21,0,.42,0,.63-.07l.43-.08.44-.11.39-.12.41-.16a3.89,3.89,0,0,0,.42-.19l.34-.17.05,0c7-3.89,28.89-13.16,37.49-5,4.17,3.93,13.27,20.67,22.91,38.39,14.83,27.26,33.41,61.43,54.69,90.33C375.41,279.06,372,312.15,366.36,361ZM83.87,471.85c-28.25-34.25-17.09-93.77-17-94.36,0-.23.08-.47.11-.7s3.36-31.65,20.27-54.45c2.3-3.11,4.61-6.38,6.91-9.78,1.55,14.2,4.19,37.72,8.53,74.75,2.94,25.15,15.14,49.5,36.24,72.37,14.49,15.69,30.75,28,43.71,36.56h-38C117.66,496.24,97.21,488,83.87,471.85ZM465.54,462c-26,25.19-62.82,32.82-89.37,34.76,28.34-20.84,39.44-47.29,43.58-67.65a123.52,123.52,0,0,0-.06-50.17,7.5,7.5,0,0,0-14.55,3.64,110.48,110.48,0,0,1-.2,44.1c-6.58,31.41-26.19,55-58.3,70.21-2.47-.17-3.89-.34-4-.35a8.72,8.72,0,0,0-.9-.05l-43.5-.14c13-8.56,29.35-20.92,43.92-36.7,21.1-22.87,33.3-47.22,36.25-72.37l2.37-20.45c9.16-5.41,31.83-21.66,37.71-52.42,10.65,8.85,26.41,20.77,36.95,23.49a7.18,7.18,0,0,0,1.88.24,7.5,7.5,0,0,0,1.87-14.76c-9.51-2.46-30.63-19.54-41.73-29.75C385,264,354.83,208.57,334.89,171.89c-13.07-24-20.15-36.8-25.79-42.13-5.28-5-15.22-9.86-32.87-5.72l43.09-67.35c.17-.24.34-.51.5-.78,2-3.06,14.88-21.75,26.8-17.49,6.2,2.69,39.16,38.85,76.66,104.34,53.94,94.22,70,165.91,73.89,209.46C501.54,400.52,490.9,437.46,465.54,462Z"></path><path d="M315.51,376.18a7.49,7.49,0,0,0-10.57.83c-.24.28-24.16,27.75-63.05,27.88-38.63-.13-62.82-27.62-63-27.88a7.5,7.5,0,0,0-11.41,9.74c1.15,1.35,28.55,32.8,74,33.14h.93c45.44-.34,72.83-31.79,74-33.14A7.49,7.49,0,0,0,315.51,376.18Z"></path><path d="M261.36,432.12a48.47,48.47,0,0,1-41.6,0,7.5,7.5,0,1,0-7.15,13.19,63.34,63.34,0,0,0,55.9,0,7.5,7.5,0,0,0-7.15-13.19Z"></path><path d="M242.4,318.35a7.5,7.5,0,0,0-2-14.86,29.91,29.91,0,0,0-10.55,3.79,22.44,22.44,0,0,0-11.36,19.94c0,15.9,13.62,21.85,22.77,22h.1a7.5,7.5,0,0,0,.09-15,13.29,13.29,0,0,1-4.55-1.15c-2.42-1.16-3.41-2.84-3.41-5.82C233.47,326,233.9,319.65,242.4,318.35Z"></path><path d="M390.68,227.6a7.52,7.52,0,0,0-8.85-6.64l-130.1,24.4H232.1L102,221a7.51,7.51,0,0,0-8.85,6.64,170.82,170.82,0,0,0,3.21,48.72c7.71,34.28,26.68,54.05,54.86,57.18a103.1,103.1,0,0,0,11.59.67c18.65,0,34.42-5.46,47-16.28,11-9.48,17.87-21.66,22.13-32.89h19.93c4.26,11.23,11.11,23.41,22.13,32.89,12.59,10.82,28.36,16.28,47,16.28a103.27,103.27,0,0,0,11.6-.67c28.18-3.13,47.15-22.9,54.86-57.18C393,251.83,390.77,228.58,390.68,227.6Z"></path>

  </svg>
);

export default SVG;