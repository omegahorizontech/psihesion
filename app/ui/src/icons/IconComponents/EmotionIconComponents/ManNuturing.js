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

    <path d="M465.52,102.72C454.84,77.6,435,60.18,406.44,50.91A77,77,0,0,0,389.27,27.2C376.57,15.14,353.15.76,313.67.76c-74.81,0-127.51,16-158.56,29.46C129,41.52,113.42,52.86,107.23,57.84c-42-8.15-59.41,17.29-60.15,18.41A7.5,7.5,0,0,0,49,86.47,66.18,66.18,0,0,0,70.29,96c-39,54.46-36.55,103.75-27,136.34A167.34,167.34,0,0,0,72.66,289c-7.47,9.69-10,22.62-7.53,38.48,4,25.56,18.46,37.61,29.88,43.21A59.56,59.56,0,0,0,112.29,376q.69,5.7,1.37,11.34c3.06,25.19,15.69,49.56,37.56,72.43,18.06,18.9,38.8,32.9,53,41.32a73,73,0,0,0,37.19,10.15h29.51a73,73,0,0,0,37.18-10.15c14.22-8.42,34.95-22.42,53-41.32,21.87-22.87,34.51-47.24,37.57-72.43q.68-5.64,1.37-11.34a59.42,59.42,0,0,0,17.27-5.33c11.43-5.6,25.89-17.65,29.89-43.21,2.58-16.53-.28-29.88-8.51-39.69A424.48,424.48,0,0,0,462.55,226C477.64,175.08,478.64,133.61,465.52,102.72ZM101.12,357C89.45,351,82.32,340.33,80,325.15c-1.9-12.14-.12-21.51,5.27-27.87,4.76-5.61,11.63-8.09,16.68-9.19,2.49,21.4,5.47,46.76,8.51,72.27A43.1,43.1,0,0,1,101.12,357ZM300.47,488.18a58,58,0,0,1-29.54,8.06H241.42a58,58,0,0,1-29.54-8.06c-66.44-39.35-80.73-81.2-83.33-102.65-7.6-62.65-15.64-132.66-17.77-151.3A152.37,152.37,0,0,0,128,221.42a165.77,165.77,0,0,0,59.35-20.88,93,93,0,0,0,27.09,4.12c15.29,0,30.35-4,44.8-11.81,42.37,5.62,71.25-5.65,88.11-16.23a103.15,103.15,0,0,0,13.93-10.47,104.69,104.69,0,0,0,2.3,13.72c5.51,23.28,18.59,42,37.95,54.37-1.93,16.94-8.74,76.26-15.67,134v.06c-.69,5.79-1.39,11.57-2.08,17.28C381.19,407,366.91,448.83,300.47,488.18Zm131.93-163c-3.89,24.83-20.21,32.74-30.47,35.26,3.05-25.53,6-50.91,8.52-72.32,5,1.09,11.86,3.56,16.62,9.12C432.51,303.57,434.3,313,432.4,325.15Zm-5.74-47a52.52,52.52,0,0,0-14.48-5c2.82-24.35,4.71-40.88,4.83-41.91a7.34,7.34,0,0,0,.05-.81c0-.07,0-.14,0-.22a4.26,4.26,0,0,0,0-.5c0-.14,0-.28,0-.42a2.89,2.89,0,0,0,0-.29c0-.16-.07-.31-.11-.47s0-.15-.05-.23l-.15-.44a1.84,1.84,0,0,0-.09-.25c-.05-.13-.1-.25-.16-.37a2.92,2.92,0,0,0-.14-.31,2.54,2.54,0,0,0-.16-.28c-.07-.12-.13-.24-.21-.36l-.14-.21c-.09-.13-.18-.26-.28-.38l-.15-.18-.32-.37-.19-.18c-.11-.11-.22-.22-.34-.32l-.34-.27c-.08-.05-.15-.12-.22-.17s-.44-.29-.66-.42c-18.1-10.25-29.84-26-34.91-46.86a88.67,88.67,0,0,1-2.19-29.29,7.51,7.51,0,0,0-13.83-4.94c-.07.11-7.33,11.66-23.58,21.66-16.94,10.43-37,15.43-59.65,15a152.71,152.71,0,0,0,31.49-36,7.5,7.5,0,0,0-12.93-7.62,139.71,139.71,0,0,1-30.36,33.85,109.78,109.78,0,0,1-13,8.88,4.39,4.39,0,0,0-.47.27c-15.85,9.06-32.24,12.5-49,10.28C229.07,171,242,152.18,242.92,150.79a7.5,7.5,0,1,0-12.44-8.38c-.32.48-29.16,42.43-82.25,59.06a232,232,0,0,0,23.09-30.61,7.5,7.5,0,0,0-12.83-7.78c-.19.32-15.47,25.24-38.69,45.6l0,0a132.8,132.8,0,0,1-20.67,15.08h0l-.06,0-.14.08-.46.31-.25.19a3.92,3.92,0,0,0-.32.25l-.3.28-.21.22c-.11.11-.2.22-.3.34s-.12.13-.17.2a4.06,4.06,0,0,0-.26.36l-.17.24-.2.35-.16.3a2.92,2.92,0,0,0-.14.31c-.06.12-.11.24-.16.36s-.06.19-.1.28-.09.28-.13.42l-.06.27c0,.14-.07.29-.1.43s0,.21,0,.31,0,.27,0,.4,0,.28,0,.42,0,.2,0,.3a5.65,5.65,0,0,0,0,.58v.25c.17,1.53,2,17.92,4.81,41.85a51.48,51.48,0,0,0-16.19,6,153.07,153.07,0,0,1-26.32-50.92C44.33,182.54,55.38,137.5,90.5,94.28l.06-.09c.09-.11.16-.22.24-.33s.14-.19.2-.29.12-.21.19-.31l.18-.33c0-.1.09-.21.14-.31s.11-.24.15-.36.08-.22.12-.33.08-.23.11-.35.06-.25.09-.37a3.38,3.38,0,0,0,.08-.34c0-.13,0-.26,0-.39s0-.22,0-.33,0-.25,0-.38,0-.24,0-.36,0-.23,0-.35l0-.41a.37.37,0,0,1,0-.11c0-.07,0-.14,0-.21s0-.27-.08-.41,0-.22-.08-.33l-.11-.38-.12-.33-.15-.35a2.3,2.3,0,0,0-.15-.32,2.79,2.79,0,0,0-.18-.34,2.75,2.75,0,0,0-.17-.29c-.07-.11-.14-.22-.22-.33l-.2-.27a3.76,3.76,0,0,0-.25-.31c-.07-.09-.15-.17-.23-.26l-.27-.27-.28-.25c-.06,0-.11-.11-.18-.16l-.1-.08-.3-.22-.31-.21-.29-.17-.35-.2-.3-.13-.37-.16-.32-.11-.36-.12-.38-.09L86,82.17l-.41-.06-.31,0-.4,0c-.11,0-.23,0-.35,0h-.35l-.4,0h-.12c-6.37.86-13-1.19-18-3.41,6.94-4.95,20.2-10.52,41.84-5.46a7.49,7.49,0,0,0,6.81-1.81c.6-.55,61.52-55.68,199.31-55.68,64.66,0,79.34,41.54,80,43.51.08.24.17.47.26.7a3.59,3.59,0,0,0,.17.34l.15.31.24.4.14.22c.09.13.18.25.28.37l.17.22c.08.1.18.2.27.3l.23.24.26.24.29.25.25.18.34.25.26.15a2.71,2.71,0,0,0,.37.21c.12.07.24.12.37.18L398,64a6.28,6.28,0,0,0,.73.25c25.88,7.64,43.71,22.56,53,44.36C475.61,164.81,438.82,252.09,426.66,278.13Z"></path><path d="M258.17,421.3c-4,.77-7.9.11-10.07-1.68a4.38,4.38,0,0,1-1.66-3.69c0-4.82,6.6-5.34,9.44-5.34a7.5,7.5,0,1,0,0-15c-2.84,0-9.44-.52-9.44-5.34a4.37,4.37,0,0,1,1.66-3.69c2.17-1.79,6.12-2.45,10.07-1.68A7.5,7.5,0,1,0,261,370.16c-8.42-1.64-16.83.16-22.48,4.82a19.77,19.77,0,0,0-2.32,28.11,19.23,19.23,0,0,0-4.8,12.84,19.44,19.44,0,0,0,7.12,15.27,25.76,25.76,0,0,0,16.38,5.41A31.9,31.9,0,0,0,261,436a7.5,7.5,0,1,0-2.87-14.72Z"></path><path d="M222.82,228c-1.43-.65-35.47-15.77-77.88-.22a7.5,7.5,0,1,0,5.17,14.09c36.41-13.36,66.21-.34,66.51-.21a7.5,7.5,0,0,0,6.2-13.66Z"></path><path d="M367.39,227.81c-42.41-15.55-76.45-.43-77.88.22a7.5,7.5,0,0,0,6.2,13.66c.3-.13,30.11-13.14,66.51.21a7.61,7.61,0,0,0,2.59.46,7.5,7.5,0,0,0,2.58-14.55Z"></path><path d="M256.84,349.19h.1a7.5,7.5,0,0,0,.1-15,13.29,13.29,0,0,1-4.55-1.15c-2.42-1.16-3.41-2.85-3.41-5.82,0-1.25.43-7.57,8.93-8.87a7.5,7.5,0,0,0-2-14.86,29.91,29.91,0,0,0-10.55,3.79,22.45,22.45,0,0,0-11.35,19.94C234.08,343.12,247.69,349.07,256.84,349.19Z"></path><path d="M171.5,299.09h1.13c11.41,0,26.72-4.07,37.16-22.65a7.5,7.5,0,0,0-13.08-7.35c-5.67,10.1-13.54,15-24.07,15h-.35a41.5,41.5,0,0,1-15.85-3.57A7.5,7.5,0,0,0,149.75,294,56.25,56.25,0,0,0,171.5,299.09Z"></path><path d="M355.86,280.54c-1.07.54-26.55,12.93-40.24-11.44a7.5,7.5,0,0,0-13.08,7.35C313,295,328.29,299.1,339.7,299.1h1.13A56.25,56.25,0,0,0,362.58,294a7.5,7.5,0,1,0-6.72-13.41Z"></path><path d="M209,370A19.31,19.31,0,0,0,193.84,366a22.72,22.72,0,0,0-10.22,4.82A22.81,22.81,0,0,0,173.39,366,19.35,19.35,0,0,0,158.28,370c-6.44,4.82-9.75,11.35-9.58,18.87.3,12.81,11.11,27.13,30.46,40.34.13.1.28.19.42.29a7.41,7.41,0,0,0,4,1.17h0a7.52,7.52,0,0,0,4.54-1.52c19.3-13.2,30.08-27.49,30.37-40.28C218.7,381.33,215.39,374.8,209,370Z"></path>

  </svg>
);

export default SVG;
