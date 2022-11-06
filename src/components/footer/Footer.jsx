import React from "react";
import styles from "./Footer.module.scss";
import { FacebookIcon } from "../icons/facebook-icon/FacebookIcon";
import { InstagramIcon } from "../icons/instagram-icon/InstagramIcon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__top"]}>
        <div className={styles["column"]}>
          <h3 className={styles["column__heading"]}>Kontakt</h3>
          <ul className={styles["column-list"]}>
            <li className={styles["column-list__item"]}>Numer telefonu</li>
            <li className={styles["column-list__item"]}>+ 48 570 498 067</li>
            <li className={styles["column-list__item"]}>
              <button className={styles["column-list__contact"]}>
                Napisz do mnie
              </button>
            </li>
          </ul>
          <ul className={styles["media-list"]}>
            <li className={styles["media-list__item"]}>
              <FacebookIcon width="24px" height="24px" color="white" />
            </li>
            <li className={styles["media-list__item"]}>
              <InstagramIcon width="24px" height="24px" color="white" />
            </li>
          </ul>
        </div>
        <div className={styles["column"]}>
          <h3 className={styles["column__heading"]}>Oferta</h3>
          <ul className={styles["column-list"]}>
            <li className={styles["column-list__item"]}>Porady dietetyczne</li>
            <li className={styles["column-list__item"]}>Jadłospisy</li>
            <li className={styles["column-list__item"]}>Dieta indywidualna</li>
            <li className={styles["column-list__item"]}>Kalkulator</li>
          </ul>
        </div>
        <div className={styles["column"]}>
          <h3 className={styles["column__heading"]}>O mnie</h3>
          <ul className={styles["column-list"]}>
            <li className={styles["column-list__item"]}>Wykształcenie</li>
            <li className={styles["column-list__item"]}>Certyfikaty</li>
            <li className={styles["column-list__item"]}>
              Jak rozpocząć współpracę
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["footer__bottom"]}>
        <span className={`${styles.copyright} ${styles["copyright--first"]}`}>
          © 2022 Dietetyk Umami
        </span>
        <div className={styles.rights}>
          <span className={styles.copyright}>Regulamin</span>
          <span className={`${styles.copyright} ${styles["copyright--last"]}`}>
            Polityka prywatności
          </span>
        </div>
      </div>
    </footer>
  );
};
