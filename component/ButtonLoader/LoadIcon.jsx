/* eslint-disable react/prop-types */
import React from "react";

export const LoadIcon = (props) => {
  const { color, height } = props;
  const divStyle = {
    margin: "auto",
    background: "none",
    display: "block",
    shapeRendering: "auto"
  };
  return (
    <div className="mr-2 -mt-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={divStyle}
        width={height || "20px"}
        height={height || "20px"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke={color}
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
  );
};

export const LineLoad = (props) => {
  const { color, width, height } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={width}
        height={height}
        viewBox="0 0 512 47"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="none" />
        <g>
          <circle fill={color} cx="-14.781" cy="22.328" r="12.813" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;379 0;426 0;494 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0"
            dur="3330ms"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <circle fill={color} cx="-50.328" cy="22.328" r="12.797" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;406 0;452 0;522 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0"
            dur="3330ms"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <circle fill={color} cx="-87.203" cy="22.328" r="12.797" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;403 0;450 0;520 0;614 0;614 0;614 0;614 0;614 0;614 0"
            dur="3330ms"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <circle fill={color} cx="-125.234" cy="22.328" r="12.797" />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;402 0;448 0;518 0;611 0"
            dur="3330ms"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
};
