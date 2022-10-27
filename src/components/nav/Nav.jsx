import React from "react";
import { useStore } from "@nanostores/react";

import styles from "./Nav.styles.module.scss";
import { AppRoutes } from "./AppRoute.enum";
import { isMenuOpen } from "./navStore";
import { FacebookIcon } from "../facebook-icon/FacebookIcon";
import { InstagramIcon } from "../instagram-icon/InstagramIcon";
import { Button } from "../button/Button";
import { MessageIcon } from "../message-icon/MessageIcon";
import { CalculatorIcon } from "../calculator-icon/CalculatorIcon";

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
          {AppRoutes.map((route, index) => (
            <li key={index} className={styles["nav-list__item"]}>
              <a className={styles["nav-list__link"]} href={route.url}>
                {route.title.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles["button-group"]}>
        <Button
          isInverted
          size="sm"
          icon={<MessageIcon width="36px" height="36px" />}
        >
          Napisz do mnie
        </Button>
        <Button icon={<CalculatorIcon width="36px" height="36px" />}>
          Kalkulator
        </Button>
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
