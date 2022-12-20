import type { LinkButtonProps } from "./LinkButton.types";
import styles from "./LinkButton.styles.module.scss";

export const LinkButton = ({ navigateTo, text, isInverted = false }: LinkButtonProps) => {
  return (
    <a className={styles.link} href={navigateTo}>
      <button className={`${styles.button} ${isInverted ? styles['button--inverted'] : ''}`}>{text}</button>
    </a>
  );
};
