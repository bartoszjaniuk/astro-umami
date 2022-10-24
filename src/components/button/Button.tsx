import type { ReactNode } from "react";
import styles from "./Button.styles.module.scss";

export const Button = ({
  children,
  isInverted,
}: {
  children: ReactNode;
  isInverted: boolean;
}) => {
  return (
    <button
      className={`${styles.button} ${isInverted && styles["button--inverted"]}`}
    >
      {children}
    </button>
  );
};
