import React from "react";

export const MessageIcon = ({ width, height, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="#57463c"
        d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4H4m2 3h12v2H6V7m0 4h10v2H6v-2Z"
      />
    </svg>
  );
};
