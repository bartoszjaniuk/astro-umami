import { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import styles from "./Modal.styles.module.scss";
import { Icon } from "@iconify/react";
import { Input } from "../input/Input";
import { CheckBox } from "../checkbox/Checkbox";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { ContactFormProps, emailPattern } from "../../sections/contact/Contact";

export const Modal = () => {
  const { isModalOpen, closeModal, diet, chooseDiet } = useModal();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Wiadomość została wysłana.");
      setTimeout(() => {
        setSuccessMessage("");
        setIsSuccess(false);
      }, 3000);
    }
  }, [isSuccess]);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormProps>({
    mode: "all",
    defaultValues: { thread: `Wybieram: ${diet && diet}` },
  });

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
      const res = await response.json();
      if (res.status === "success") setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
    reset();
    chooseDiet("");
  };

  if (isModalOpen) {
    return (
      <div className={styles.modal}>
        <Icon
          icon="mdi:close"
          className={styles["modal__close"]}
          onClick={closeModal}
        />
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
          {successMessage && (
            <p className={styles["success-message"]}>{successMessage}</p>
          )}
        </div>
      </div>
    );
  }

  return null;
};
