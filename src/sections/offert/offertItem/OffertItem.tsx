import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../../../components/button/Button";
import styles from "./OffertItem.styles.module.scss";

type OffertItem = {
  label: string;
  content: string;
  activeTab: number;
  index: number;
  activateTab: () => void;
};

export const OffertItem = ({
  label,
  content,
  activeTab,
  index,
  activateTab,
}: OffertItem) => {
  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? "300px" : 0}px`,
  };
  return (
    <div className={styles.panel} role="tabpanel" aria-expanded={isActive}>
      <div>
        <button
          className={styles["panel__label"]}
          role="tab"
          onClick={activateTab}
        >
          {label}
        </button>
      </div>
      <div
        className={`${styles["panel__inner"]} ${
          isActive ? styles["panel__inner--active"] : ""
        }`}
        aria-hidden={!isActive}
      >
        <p className={styles["panel__content"]}>{content}</p>
      </div>
    </div>
  );
};
