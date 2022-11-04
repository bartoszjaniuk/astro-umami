import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import styles from "./Contact.styles.module.scss";

export type ContactFormProps = {
  email: string;
  thread: string;
  message: string;
};

const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Proszę podaj poprawny adres email",
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({ mode: "onSubmit" });

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <h2 className={styles["contact__heading-one"]}>
          Skontaktuj się ze mną
        </h2>
        <h5 className={styles["contact__heading-two"]}>
          Potrzebujesz specjalistycznej porady? Napisz do mnie za pomocą
          formularza lub zadzwoń.
        </h5>
      </div>
      <div className={styles["container-inner"]}>
        <div className={styles["container-inner__image-container"]}>
          <img
            className={styles["container-inner__image-container__image"]}
            src="assets/personContactForm.svg"
            alt="Osoba z telefonem"
          />
        </div>
        <div className={styles["container-inner__form-container"]}>
          <span className={styles["background-shape"]} />
          <span className={styles["background-shape--small"]} />
          <span className={styles["background-shape--very-small"]} />
          <span className={styles["background-shape--medium"]} />
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles["form__heading"]}>Napisz do mnie</h3>
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
            <Button type="submit">Wyślij wiadomość</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
