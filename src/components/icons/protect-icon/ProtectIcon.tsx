import React from "react";
import type { IconProps } from "../Icon.types";

export const ProtectIcon = ({ width, height, className }: IconProps) => {
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
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35l.82 3.5Z"
      />
    </svg>
  );
};
