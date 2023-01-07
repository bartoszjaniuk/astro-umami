import { Icon } from "@iconify/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from "./OffertItem.styles.module.scss";

type OffertItem = {
  label: string;
  content: string;
  activeTab: number;
  index: number;
  activateTab: () => void;
  icon: JSX.Element;
  listTitle?: string;
  listItems_1?: string[];
  listItems_2?: string[];
};

export const OffertItem = ({
  label,
  content,
  activeTab,
  index,
  activateTab,
  icon,
  listTitle,
  listItems_1,
  listItems_2,
}: OffertItem) => {
  const isActive = activeTab === index;
  const { breakpoint } = useWindowSize();

  const isTabWithLongText = isActive && activeTab === 1;

  const getResForTabWithLongText = (breakpoint: string) => {
    if (breakpoint === "MONSTER") return 620;
    if (breakpoint === "VBIG") return 350;
    if (breakpoint === "BIG") return 380;
    if (breakpoint === "MEDIUM") return 450;
    if (breakpoint === "SMALL") return 500;
    if (breakpoint === "VSMALL") return 700;
  };

  const getResForText = (breakpoint: string) => {
    if (breakpoint === "MONSTER") return 270;
    if (breakpoint === "VBIG") return 170;
    if (breakpoint === "BIG") return 170;
    if (breakpoint === "MEDIUM") return 190;
    if (breakpoint === "SMALL") return 220;
    if (breakpoint === "VSMALL") return 450;
  };

  return (
    <div
      id={index.toString()}
      className={styles["panel"]}
      style={{
        height: isTabWithLongText
          ? `${getResForTabWithLongText(breakpoint)}px`
          : isActive
          ? `${getResForText(breakpoint)}px`
          : "initial",
      }}
      onClick={activateTab}
      role="tab"
    >
      <div
        className={styles["panel__label"]}
        data-help-card-expanded={isActive}
      >
        <div className={styles["panel__label--icon"]}>{icon}</div>
        <div className={styles["panel__label--title"]}>{label}</div>
        <div className={styles["panel__label--chevron"]}>
          <Icon icon="mdi:chevron-down" />
        </div>
      </div>
      <div
        className={styles["panel__content"]}
        data-help-card-content-expanded={isActive}
        style={{
          width: "100%",
        }}
      >
        {content}
        {listTitle && (
          <>
            <p className={styles["list__title"]}>{listTitle}</p>
            <div className={styles["list__items"]}>
              <ul className={styles["list--1"]}>
                {listItems_2?.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
              <ul>
                {listItems_1?.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
