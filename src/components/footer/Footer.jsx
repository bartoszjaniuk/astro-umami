import React from "react";
import styles from "./Footer.module.scss";
import { FacebookIcon } from "../icons/facebook-icon/FacebookIcon";
import { InstagramIcon } from "../icons/instagram-icon/InstagramIcon";
import statuteReference from "/regulamin.pdf";
import { AppRoute, RoutePath } from "../nav/AppRoute.enum";

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
              <a
                href="https://www.facebook.com/dietetyk.umami/"
                target="_blank"
              >
                <FacebookIcon width="24px" height="24px" color="white" />
              </a>
            </li>
            <li className={styles["media-list__item"]}>
              <a
                href="https://www.instagram.com/dietetyk_umami/"
                target="_blank"
              >
                <InstagramIcon width="24px" height="24px" color="white" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["column"]}>
          <h3 className={styles["column__heading"]}>Oferta</h3>
          <ul className={styles["column-list"]}>
            <li className={styles["column-list__item"]}>
              <a href={RoutePath.OFFER}>Porady dietetyczne</a>
            </li>
            <li className={styles["column-list__item"]}>
              <a href={RoutePath.MENUS}>Jadłospisy</a>
            </li>
            <li className={styles["column-list__item"]}>
              <a href={RoutePath.PRICE_LIST}>Dieta Indywidualna</a>a
            </li>
            <li className={styles["column-list__item"]}>
              <a href={RoutePath.KALKULATOR}>Kalkulator</a>
            </li>
          </ul>
        </div>
        <div className={styles["column"]}>
          <h3 className={styles["column__heading"]}>O mnie</h3>
          <ul className={styles["column-list"]}>
            <li className={styles["column-list__item"]}>
              <a href={`${RoutePath.ABOUT}`}>Wykształcenie</a>
            </li>
            <li className={styles["column-list__item"]}>
              <a href={`${RoutePath.ABOUT}#certyfikaty`}>Certyfikaty</a>
            </li>
            <li className={styles["column-list__item"]}>
              <a href={`${RoutePath.HOME}#jak-rozpoczac-wspolprace`}>
                Jak rozpocząć współpracę
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["footer__bottom"]}>
        <span className={`${styles.copyright} ${styles["copyright--first"]}`}>
          © 2022 Dietetyk Umami
        </span>
        <div className={styles.rights}>
          <span className={styles.copyright}>
            <a href={statuteReference} target="_blank">
              Regulamin i RODO
            </a>
          </span>
          <span className={`${styles.copyright} ${styles["copyright--last"]}`}>
            <a href="/polityka-cookies">Polityka prywatności i cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
