import type { ReactNode } from "react";
import styles from "./Button.styles.module.scss";

export const Button = ({
  children,
  isInverted,
  size = "none",
  className,
}: {
  children: ReactNode;
  isInverted?: boolean;
  size?: "sm" | "md" | "lg" | "none";
  className?: string;
}) => {
  return (
    <button
      style={{
        // padding:
        //   size === "sm"
        //     ? "0.5rem 1rem"
        //     : size === "md"
        //     ? "1rem 2rem"
        //     : "2rem 3rem",
        padding:
          size === "sm"
            ? "0.5rem 1rem"
            : size === "md"
            ? "1rem 2rem"
            : size === "lg"
            ? "2rem 3rem"
            : "none",
      }}
      className={`${styles.button} ${
        isInverted && styles["button--inverted"]
      } ${className}`}
    >
      {children}
    </button>
  );
};
