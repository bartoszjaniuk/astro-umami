import React from "react";
import { useStore } from "@nanostores/react";

import styles from "./Nav.styles.module.scss";
import { AppRoutes, AppRoute } from "./AppRoute.enum";
import { isMenuOpen } from "./navStore";
import { FacebookIcon } from "../facebook-icon/FacebookIcon";
import { InstagramIcon } from "../instagram-icon/InstagramIcon";
import { Button } from "../button/Button";

export const Nav = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles["header__inner"]}>
        <a href="/" className={styles.link}>
          <img src="assets/logo.jpg" alt="logo" className={styles.logo} />
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
      </div>
      <nav
        className={`${styles.nav} ${$isMenuOpen ? styles["nav--open"] : ""}`}
      >
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-list__link"]} href="/">
              {AppRoute.ABOUT}
            </a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-list__link"]} href="/">
              {AppRoute.CONTACT}
            </a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-list__link"]} href="/">
              {AppRoute.KALKULATOR}
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles["button-group"]}>
        <Button isInverted>Napisz do mnie</Button>
        <Button>Kalkulator</Button>
      </div>
      <div
        className={`${styles["instagram-icons"]} ${
          $isMenuOpen ? styles.active : ""
        }`}
      >
        <FacebookIcon width="24px" height="24px" />
        <InstagramIcon width="24px" height="24px" />
      </div>
    </header>
  );
};
