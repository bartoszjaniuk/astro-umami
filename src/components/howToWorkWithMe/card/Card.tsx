import styles from "./Card.styles.module.scss";

type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__icon"]}>{icon}</div>
      <h4 className={styles["card__title"]}>{title}</h4>
      <p className={styles["card__description"]}>{description}</p>
    </div>
  );
};
