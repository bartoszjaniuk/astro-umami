import type { ReactNode } from "react";
import styles from "./Button.styles.module.scss";

export const Button = ({
  children,
  isInverted,
  size = "sm",
}: {
  children: ReactNode;
  isInverted: boolean;
  size: "sm" | "md" | "lg";
}) => {
  return (
    <button
      style={{
        padding:
          size === "sm"
            ? "0.5rem 1rem"
            : size === "md"
            ? "1rem 2rem"
            : "2rem 3rem",
      }}
      className={`${styles.button} ${isInverted && styles["button--inverted"]}`}
    >
      {children}
    </button>
  );
};
