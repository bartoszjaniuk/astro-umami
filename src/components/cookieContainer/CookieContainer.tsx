import { useEffect, useState } from "react";
import styles from "./CookieContainer.styles.module.scss";

export const CookieContainer = () => {
  const [cookie, setCookie] = useState("");
  const [isAvaliable, setIsAvaliable] = useState(true);

  useEffect(() => {
    const cookie = localStorage.getItem("cookie");
    if (cookie) {
      setIsAvaliable(true);
      setCookie(cookie);
    } else {
      setIsAvaliable(false);
    }
  }, []);

  const handleSetCookie = () => {
    localStorage.setItem("cookie", new Date().toUTCString());
    setCookie(new Date().toUTCString());
  };

  return (
    <>
      {!cookie && !isAvaliable ? (
        <div className={styles.container}>
          <div>
            Ta strona wykorzystuje pliki cookies (tzw. ciasteczka). Kliknij
            <button
              className={styles["cookie-button"]}
              onClick={handleSetCookie}
            >
              Akceptuj
            </button>
            , aby ta informacja nie pojawiała się więcej. Kliknij{" "}
            <a className={styles["cookie-link"]} href="/polityka-cookies">
              Polityka Cookies
            </a>
            , aby dowiedzieć się więcej.
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
