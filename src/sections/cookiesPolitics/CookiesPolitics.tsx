import styles from "./CookiesPolitics.styles.module.scss";

export const CookiesPolitics = () => {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles["wrapper__heading"]}>Polityka Cookies</h2>
        <p className={styles["wrapper__paragraph"]}>
          Komunikat został wdrożony w odpowiedzi na nowe prawo telekomunikacyjne{" "}
          <a
            className={styles["wrapper__link"]}
            href="https://www.dziennikustaw.gov.pl/du/2012/1445"
          >
            Przejdz do strony
          </a>{" "}
          <br />
          Szanujemy prywatność naszych użytkowników i chcemy, aby korzystając z
          naszych witryn czuli się bezpiecznie. Poniżej przedstawiamy fragment
          naszej Polityki prywatności odnoszący się do tzw. plików Cookies.
        </p>
        <h5
          className={`${styles["wrapper__heading"]} ${styles["wrapper__heading--small"]}`}
        >
          Drogi uzytkowniku
        </h5>
        <p className={styles["wrapper__paragraph"]}>
          Kiedy wchodzisz na strony naszych witryn, na dysku Twojego komputera
          mogą być zapisywane tzw. ciasteczka (ang. cookies), czyli niewielkie
          pliki tekstowe wysyłane przez nasz serwer albo serwisy, do których
          odwołujemy się w naszych witrynach, np. pokazując multimedia.
        </p>

        <p className={styles["wrapper__paragraph"]}>
          Ciasteczka i podobne technologie używane są w witrynach internetowych
          przede wszystkim ze względu na wygodę użytkowników, m.in po to, by jak
          najlepiej dostosować treści i funkcje witryny do ich potrzeb i
          oczekiwań, a także w celach statystycznych.
        </p>
        <p className={styles["wrapper__paragraph"]}>
          Pliki ciasteczek wysyłamy wyjątkowo. Służą one tworzeniu statystyk,
          które pomagają dostosować zawartość stron do oczekiwań użytkowników,
          zapamiętaniu preferowanego wyglądu stron, np. ustawionego rozmiaru
          czcionki, odnotowaniu faktu głosowania w prowadzonych ankietach albo
          wykonaniu przez użytkownika kilkuetapowych czynności (np. dodania
          artykułu, dokonania zakupu w naszym sklepie internetowym). Korzystamy
          również z ciasteczek służących dopasowaniu wyświetlanych reklam do
          zainteresowań odwiedzających witryny. Oprócz ciasteczek wysyłanych z
          naszego serwera za pośrednictwem naszych witryn, pliki cookies mogą
          być wysyłane także z serwerów stron, do których się odwołujemy, np.
          YouTube czy serwisów społecznościowych.
        </p>
        <p className={styles["wrapper__paragraph"]}>
          Zapisywanych na Twoim komputerze informacji wysyłanych z naszego
          serwera nigdzie nie gromadzimy i w żaden sposób nie przetwarzamy.
        </p>
        <p className={styles["wrapper__paragraph"]}>
          Każdy użytkownik może zmienić ustawienia dotyczące ciasteczek w
          używanej przez siebie przeglądarce, w tym zupełnie wyłączyć możliwość
          ich zapisywania. Jeśli nie wyłączysz możliwości zapisywania ciasteczek
          pochodzących z naszych witryn, oznacza to Twoją zgodę na ich
          zapisywanie i przechowywanie w komputerze.
        </p>
        <p className={styles["wrapper__paragraph"]}>
          Jeżeli zdecydujesz się na odrzucenie wszystkich ciasteczek, nie będzie
          możliwe korzystanie z niektórych treści treści i usług udostępnianych
          w naszych witrynach, w szczególności wymagających logowania.
          Wyłączenie ciasteczek nie powoduje natomiast braku możliwości
          przeglądania stron w naszych witrynach.
        </p>
        <h5
          className={`${styles["wrapper__heading"]} ${styles["wrapper__heading--small"]}`}
        >
          Jak wyłączyc ciasteczka?
        </h5>
        <p className={styles["wrapper__paragraph"]}>
          Każdy użytkownik Internetu może dostosować poziom ochrony przed
          ciasteczkami do swoich preferencji, w tym całkowicie zablokować
          możliwość pozostawiania plików cookies. Zwiększa to poziom
          bezpieczeństwa i ochrony danych, ale może także uniemożliwiać niektóre
          funkcje, np. zalogowanie się do witryny.
        </p>

        <p className={styles["wrapper__paragraph"]}>
          Informacje na temat ustawień dotyczących ciasteczek w poszczególnych
          przeglądarkach dostępne są na poniższych stronach:
        </p>
        <ul className={styles["wrapper__list"]}>
          <li className={styles["wrapper__list-item"]}>
            <a href="https://help.opera.com/pl/latest/web-preferences/#cookies">
              w przeglądarce Opera
            </a>
          </li>
          <li className={styles["wrapper__list-item"]}>
            <a href="https://support.google.com/chrome/answer/95647?hl=pl">
              w przeglądarce Chrome
            </a>
          </li>
          <li className={styles["wrapper__list-item"]}>
            <a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl">
              w przeglądarce Firefox
            </a>
          </li>
          <li className={styles["wrapper__list-item"]}>
            <a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">
              w przeglądarce Safari
            </a>
          </li>
        </ul>
        <p className={styles["wrapper__paragraph"]}>
          Jeśli korzystasz z urządzenia przenośnego (telefon, smartfon, tablet),
          zapoznaj się z opcjami dotyczącymi ochrony prywatności w dokumentacji
          na stronie internetowej producenta Twojego urządzenia.
        </p>
      </div>
    </main>
  );
};
