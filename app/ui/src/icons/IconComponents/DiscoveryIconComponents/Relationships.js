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

    <path d="M57.118,55.816c0.762,0,1.418,0.275,1.966,0.822c0.546,0.551,0.82,1.207,0.82,1.969c0,0.765-0.262,1.432-0.787,2.004     l-6.369,6.299c-0.524,0.572-1.192,0.859-2.004,0.859c-0.763,0-1.431-0.287-2.004-0.859l-6.297-6.299     c-0.62-0.572-0.93-1.239-0.93-2.004c0-0.762,0.279-1.418,0.84-1.969c0.562-0.547,1.257-0.822,2.088-0.822     c0.778,0,1.463,0.249,2.05,0.747l4.265,4.365l4.364-4.314C55.644,56.083,56.311,55.816,57.118,55.816z M50.385,48.087     c0.908,0,1.67,0.298,2.291,0.895c0.621,0.597,0.931,1.349,0.931,2.254c0,0.859-0.31,1.601-0.931,2.219     c-0.62,0.621-1.383,0.932-2.291,0.932c-0.859,0-1.597-0.311-2.218-0.932c-0.619-0.618-0.932-1.359-0.932-2.219     c0-0.905,0.313-1.657,0.932-2.254C48.788,48.385,49.526,48.087,50.385,48.087z M50.385,38.209c0.908,0,1.67,0.311,2.291,0.931     c0.621,0.62,0.931,1.36,0.931,2.219c0,0.907-0.31,1.659-0.931,2.253c-0.62,0.599-1.383,0.896-2.291,0.896     c-0.859,0-1.597-0.297-2.218-0.896c-0.619-0.594-0.932-1.346-0.932-2.253c0-0.859,0.313-1.599,0.932-2.219     C48.788,38.521,49.526,38.209,50.385,38.209z M50.385,28.333c0.908,0,1.67,0.307,2.291,0.919     c0.621,0.614,0.931,1.368,0.931,2.266c0,0.85-0.31,1.581-0.931,2.193c-0.62,0.614-1.383,0.918-2.291,0.918     c-0.859,0-1.597-0.305-2.218-0.918c-0.619-0.612-0.932-1.343-0.932-2.193c0-0.898,0.313-1.652,0.932-2.266     C48.788,28.64,49.526,28.333,50.385,28.333z"></path>
    <path d="M27.536,62.965c0.539,0.539,0.808,1.196,0.808,1.973c-0.002,0.773-0.272,1.433-0.811,1.972     c-0.541,0.539-1.2,0.827-1.975,0.86l-8.957-0.051c-0.775,0.034-1.45-0.235-2.025-0.81c-0.538-0.539-0.809-1.216-0.809-2.025     v-8.905c-0.033-0.843,0.22-1.535,0.76-2.075c0.539-0.538,1.201-0.805,1.986-0.799c0.785,0.011,1.47,0.308,2.058,0.896     c0.552,0.55,0.859,1.21,0.921,1.978l-0.071,6.102l6.137,0.036C26.306,62.11,26.965,62.395,27.536,62.965z M28.242,52.738     c0.642,0.643,0.969,1.393,0.986,2.252c0.018,0.861-0.295,1.612-0.936,2.252c-0.607,0.607-1.35,0.913-2.228,0.912     c-0.877,0-1.635-0.319-2.277-0.963c-0.608-0.605-0.911-1.348-0.911-2.227c0-0.874,0.302-1.619,0.911-2.228     c0.641-0.641,1.392-0.95,2.252-0.936C26.9,51.82,27.635,52.132,28.242,52.738z M35.226,45.753     c0.643,0.643,0.961,1.402,0.961,2.278c0,0.878-0.304,1.621-0.911,2.228c-0.642,0.641-1.392,0.953-2.252,0.934     c-0.862-0.015-1.609-0.343-2.252-0.984c-0.607-0.609-0.92-1.341-0.936-2.202c-0.018-0.859,0.294-1.612,0.934-2.254     c0.609-0.606,1.353-0.91,2.228-0.91C33.875,44.844,34.619,45.147,35.226,45.753z M42.209,38.771     c0.642,0.642,0.963,1.397,0.969,2.27c0.006,0.872-0.308,1.625-0.943,2.259c-0.601,0.602-1.338,0.899-2.21,0.894     c-0.872-0.005-1.626-0.329-2.268-0.971c-0.608-0.607-0.914-1.345-0.919-2.217c-0.004-0.872,0.291-1.609,0.892-2.211     c0.636-0.633,1.391-0.946,2.26-0.943C40.862,37.858,41.602,38.164,42.209,38.771z"></path>
    <path d="M75.463,61.939l6.136,0.115l0.08-6.101c0.081-0.767,0.405-1.418,0.971-1.953c0.603-0.575,1.295-0.855,2.08-0.847     c0.785,0.013,1.438,0.295,1.965,0.849c0.525,0.553,0.762,1.25,0.708,2.092l-0.22,8.904c-0.02,0.809-0.308,1.479-0.859,2.004     c-0.589,0.561-1.271,0.812-2.043,0.759l-8.956-0.17c-0.775-0.054-1.427-0.354-1.953-0.909c-0.525-0.552-0.779-1.216-0.761-1.991     c0.019-0.776,0.303-1.425,0.855-1.952C74.051,62.184,74.717,61.917,75.463,61.939z M75.237,51.617     c0.86,0.007,1.603,0.336,2.228,0.991c0.593,0.621,0.877,1.374,0.854,2.249c-0.021,0.878-0.34,1.614-0.964,2.204     c-0.657,0.626-1.422,0.928-2.3,0.904c-0.878-0.019-1.613-0.343-2.204-0.965c-0.624-0.654-0.919-1.414-0.881-2.273     c0.039-0.86,0.386-1.602,1.041-2.228C73.635,51.907,74.376,51.614,75.237,51.617z M68.453,44.49     c0.875,0.022,1.609,0.342,2.204,0.965c0.624,0.656,0.916,1.417,0.878,2.274c-0.036,0.862-0.368,1.586-0.99,2.178     c-0.657,0.626-1.413,0.936-2.273,0.93c-0.861-0.003-1.604-0.333-2.23-0.99c-0.59-0.62-0.878-1.371-0.855-2.248     c0.022-0.878,0.358-1.628,1.019-2.254C66.825,44.753,67.575,44.469,68.453,44.49z M61.636,37.328     c0.868,0.017,1.616,0.349,2.236,1c0.587,0.615,0.863,1.361,0.837,2.229c-0.027,0.873-0.351,1.604-0.974,2.196     c-0.657,0.626-1.42,0.93-2.292,0.914c-0.87-0.016-1.601-0.331-2.188-0.947c-0.618-0.65-0.914-1.412-0.885-2.283     c0.027-0.873,0.365-1.619,1.023-2.246C60.017,37.599,60.764,37.312,61.636,37.328z"></path>

  </svg>
);

export default SVG;