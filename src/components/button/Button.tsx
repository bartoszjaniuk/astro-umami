import type { ReactNode } from "react";
import styles from "./Button.styles.module.scss";

export const Button = ({
  children,
  isInverted = false,
  className,
  type = "button",
  disabled = false,
  onClick,
}: {
  children: ReactNode;
  isInverted?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${styles.button} ${
        isInverted && styles["button--inverted"]
      } ${className} ${disabled ? styles["button--disabled"] : ""}`}
    >
      {children}
    </button>
  );
};
