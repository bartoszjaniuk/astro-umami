import React from "react";
import { useStore } from "@nanostores/react";

import styles from "./Nav.styles.module.scss";
import { AppRoute, AppRoutes } from "./AppRoute.enum";
import { isMenuOpen } from "./navStore";
import { FacebookIcon } from "../facebook-icon/FacebookIcon";
import { InstagramIcon } from "../instagram-icon/InstagramIcon";
import { Button } from "../button/Button";

export const Nav = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  return (
    <header>
      <a href="/" className={styles.link}>
        <img src="/assets/logo.jpeg" alt="logo" className={styles.logo} />
      </a>
      <button
        className={`${styles.burger} ${
          $isMenuOpen ? styles["burger--open"] : ""
        }`}
        onClick={() => isMenuOpen.set(!$isMenuOpen)}
      >
        <span className={styles["burger__line"]} />
        <span className={styles["burger__line"]} />
        <span className={styles["burger__line"]} />
      </button>
      <nav>
        <ul className={styles["nav-list"]}>
          {AppRoutes.map((route, index) => (
            <li key={index} className={styles["nav-list__item"]}>
              <a className={styles["nav-list__link"]} href={route.url}>
                {route.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles["button-group"]}>
        <Button isInverted>{AppRoute.CONTACT}</Button>
        <Button>{AppRoute.KALKULATOR}</Button>
      </div>
      <div className={styles["instagram-icons"]}>
        <FacebookIcon width="24px" height="24px" />
        <InstagramIcon width="24px" height="24px" />
      </div>
    </header>
  );
};
