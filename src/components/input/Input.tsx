import { ErrorMessage } from "@hookform/error-message";
import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import type { DeepMap, FieldError, RegisterOptions } from "react-hook-form";
import type { ContactFormProps } from "../../sections/contact/Contact";
import { FormErrorMessage } from "./ErrorMessage";
import styles from "./Input.styles.module.scss";

export type InputProps<T> = {
  id: string;
  name: string;
  label?: string | ReactNode;
  className?: string;
  type?: "text" | "email" | "radio" | "number";
  register: any;
  rules?: RegisterOptions;
  errors?: Partial<DeepMap<T, FieldError>>;
  isTextArea?: boolean;
  value?: string;
  useFormGroup?: boolean;
  options?: { value: number; label: string; description?: string }[];
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Input = ({
  id,
  name,
  label,
  type = "text",
  className = "",
  placeholder,
  errors,
  register,
  rules,
  isTextArea,
  value,
  ...props
}: InputProps<ContactFormProps>) => {
  const hasError = !!errors;
  return (
    <div>
      {!isTextArea && (
        <div className={styles["group"]}>
          <input
            className={styles["form-input"]}
            id={id}
            name={name}
            aria-invalid={hasError}
            type={type}
            aria-label={label}
            placeholder={placeholder}
            {...props}
            {...(register && register(name, rules))}
          />
          <label className={styles["form-label"]}>{label}</label>
        </div>
      )}
      {isTextArea && (
        <div className={styles["group"]}>
          <textarea
            rows={3}
            className={styles["form-input"]}
            id={id}
            name={name}
            aria-invalid={hasError}
            type={type}
            aria-label={label}
            placeholder={placeholder}
            {...props}
            {...(register && register(name, rules))}
          />
          <label className={styles["textarea-label"]}>{label}</label>
        </div>
      )}
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <FormErrorMessage
            className={`${styles["my-1"]} ${styles["error-message"]}`}
          >
            {message}
          </FormErrorMessage>
        )}
      />
    </div>
  );
};
