import { useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import { CheckBox } from "../../components/checkbox/Checkbox";
import { Input } from "../../components/input/Input";
import styles from "./Contact.styles.module.scss";

export type ContactFormProps = {
  email: string;
  thread: string;
  message: string;
  statute: boolean;
};

const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Podaj poprawny adres email",
};

export const Contact = () => {
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
    <section className={styles.container} id="napisz-do-mnie">
      <span className={styles["background-shape"]} />
      <span className={styles["background-shape--small"]} />
      <span className={styles["background-shape--very-small"]} />
      <span className={styles["background-shape--medium"]} />
      <div className={styles.contact} id="contact-form">
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
      </div>
    </section>
  );
};
// https://dribbble.com/shots/13667794-Mortgage-calculator
// undraw- chilling
