import React from "react";
import type { IconProps } from "../Icon.types";

export const LaptopContactIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={{ zIndex: "10" }}
    >
      <path
        fill="#57463c"
        d="M20 4a2 2 0 0 1 2 2v10c0 1.11-.89 2-2 2h4v2H0v-2h4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16m0 2H4v10h16V6m-8 6c2.21 0 4 .9 4 2v1H8v-1c0-1.1 1.79-2 4-2m0-5a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2Z"
      />
    </svg>
  );
};
