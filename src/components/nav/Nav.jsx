import React from "react";
import { useStore } from "@nanostores/react";

import styles from "./Nav.styles.module.scss";
import { AppRoutes, RoutePath } from "./AppRoute.enum";
import { isMenuOpen } from "./navStore";
import { FacebookIcon } from "../icons/facebook-icon/FacebookIcon";
import { InstagramIcon } from "../icons/instagram-icon/InstagramIcon";
import { Button } from "../button/Button";
import { MessageIcon } from "../icons/message-icon/MessageIcon";
import { CalculatorIcon } from "../icons/calculator-icon/CalculatorIcon";
import imgReference from "/assets/umami-logo.jpg";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Nav = ({ currentPath }) => {
  const $isMenuOpen = useStore(isMenuOpen);
  const { windowSize } = useWindowSize();

  return (
    <nav className={styles.nav}>
      <div className={styles["nav__inner"]}>
        <a href="/" className={styles.link}>
          <img src={imgReference} alt="logo" className={styles.logo} />
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
      <div
        className={`${styles.container} ${
          $isMenuOpen ? styles["container--open"] : ""
        }`}
      >
        <ul className={styles["nav-list"]}>
          {AppRoutes.map((route, index) => (
            <li
              key={index}
              className={`${styles["nav-list__item"]} ${
                currentPath === `${route.url.slice(1)}/`
                  ? styles["nav-list__item--active"]
                  : ""
              }`}
            >
              <a className={styles["nav-list__link"]} href={route.url}>
                {route.title.toUpperCase()}
              </a>
            </li>
          ))}
          {windowSize.innerWidth > 0 && windowSize.innerWidth <= 900 && (
            <li
              className={`${styles["nav-list__item"]} ${
                currentPath === `/kalkulator`
                  ? styles["nav-list__item--active"]
                  : ""
              }`}
            >
              <a className={styles["nav-list__link"]} href="/kalkulator">
                KALKULATOR
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className={styles["button-group"]}>
        <a href={`${RoutePath.CONTACT}#formularz-kontaktowy`}>
          <Button
            isInverted
            size="sm"
            icon={<MessageIcon width="36px" height="36px" />}
          >
            Napisz do mnie
          </Button>
        </a>
        <a href="/kalkulator">
          <Button icon={<CalculatorIcon width="36px" height="36px" />}>
            Kalkulator
          </Button>
        </a>
      </div>
      <div
        className={`${styles["instagram-icons"]} ${
          $isMenuOpen ? styles.active : ""
        }`}
      >
        <a
          className={styles["nav-icon"]}
          href="https://www.facebook.com/dietetyk.umami/"
          target="_blank"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          className={styles["nav-icon"]}
          href="https://www.instagram.com/dietetyk_umami/"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </nav>
  );
};
