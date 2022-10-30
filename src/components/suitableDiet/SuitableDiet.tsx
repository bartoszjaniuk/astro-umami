import React, { useEffect, useState } from "react";
import styles from "./SuitabileDiet.styles.module.scss";

export const SuitableDiet = () => {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    if (first === 2) {
      console.log("JEBUT");
    }
  }, [first]);

  return (
    <section className={styles.container}>
      <p>{first}</p>
      <button onClick={() => setFirst(first + 1)}>Click</button>
    </section>
  );
};
