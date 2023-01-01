import imageOffertRef from "/assets/contact.jpg";
import styles from "./ContactPage.styles.module.scss";
import { useForm } from "react-hook-form";
import { ContactFormProps, emailPattern } from "../contact/Contact";
import { Input } from "../../components/input/Input";
import { CheckBox } from "../../components/checkbox/Checkbox";
import { Button } from "../../components/button/Button";

export const ContactPage = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormProps>({ mode: "all" });

  const onSubmit = async (formData: ContactFormProps) => {
    try {
      const response = await fetch(
        "https://umami-get-mailed.onrender.com/api/v1/email/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            subject: formData.thread,
            message: formData.message,
          }),
        }
      );
      await response.json();
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <main className={styles.offert}>
      <section className={styles.introduction}>
        <div className={styles["content"]}>
          <h2 className={styles["content__heading"]}>KONTAKT</h2>
          <h5 className={styles["content__heading--secondary"]}>
            Zapraszam do kontaktu
          </h5>
          <div className={styles["content__description"]}>
            Chciałbyś zrobić pierwszy krok w kierunku sylwetki marzeń? Poprawić
            wyniki badań i stan swojego zdrowia? Masz pytania i wątpliwości jak
            schudnąć lub przytyć? Śmiało, napisz do mnie! Odpowiem tak szybko,
            jak to możliwe.
          </div>
        </div>
        <div className={styles["image"]}>
          <img src={imageOffertRef} alt="Aleksandra Kajstura" />
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles["contact__form"]}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="email"
              type="email"
              name="email"
              label="Email"
              placeholder="Wpisz swój email"
              className="mb-2"
              register={register}
              rules={{
                required: "Podaj swój adres email",
                pattern: emailPattern,
              }}
              errors={errors}
            />
            <Input
              id="thread"
              name="thread"
              label="Temat"
              placeholder="Podaj temat wiadomości"
              className="mb-2"
              register={register}
              rules={{
                required: "Podaj temat wiadomości",
              }}
              errors={errors}
            />

            <Input
              rows={6}
              isTextArea
              id="message"
              name="message"
              label="Wiadomość"
              placeholder="Podaj treść wiadomości"
              className="mb-2"
              register={register}
              rules={{
                required: "Podaj treść wiadomości",
              }}
              errors={errors}
            />
            <CheckBox
              id="statute"
              name="statute"
              placeholder="Akceptuję regulamin"
              className="mb-2"
              register={register}
              rules={{
                required: "Proszę zaakceptować regulamin",
              }}
              errors={errors}
            />

            <Button disabled={!isValid} type="submit">
              {isSubmitting
                ? "Trwa wysyłanie wiadomości..."
                : "Wyślij wiadomość"}
            </Button>
          </form>
        </div>
        <div className={styles["details"]}>
          <h3 className={styles["details__heading"]}>Formy kontaktu</h3>
          <p className={styles["details__paragraph"]}>
            UMAMI – Dietetyk Aleksandra Kajstura
          </p>
          <p className={styles["details__paragraph"]}>Tel. 570 498 067</p>
          <p className={styles["details__paragraph"]}>
            E-mail: aleksandra.kajstura@dietetyk-umami.pl
          </p>
        </div>
      </section>
    </main>
  );
};
