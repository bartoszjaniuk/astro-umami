import { useRef } from "react";

import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import styles from "./CertificateItem.styles.module.scss";

export const CertificateItem = ({
  path,
  alt,
  id,
}: {
  path: string;
  alt: string;
  id: number;
}) => {
  const divRef = useRef(null);
  const { isComponentOpened, setIsComponentOpened } = useOnClickOutside(divRef);

  return (
    <div
      id={id.toString()}
      ref={divRef}
      className={`${styles.certificate} ${
        isComponentOpened ? styles["certificate--open"] : ""
      }`}
      onClick={() => setIsComponentOpened(!isComponentOpened)}
    >
      <img src={path} alt={alt} />
    </div>
  );
};
