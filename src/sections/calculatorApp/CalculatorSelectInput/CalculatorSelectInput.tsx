import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "../../../components/input/ErrorMessage";
import type { InputProps } from "../../../components/input/Input";
import type { CalculatorFormProps } from "../CalculatorApp";
import styles from "./CalculatorSelectInput.styles.module.scss";
export const CalculatorSelectInput = ({
  id,
  name,
  label,
  type = "text",
  className = "",
  placeholder,
  errors,
  register,
  rules,
  value,
  useFormGroup = true,
  options,
  ...props
}: InputProps<CalculatorFormProps>) => {
  const hasError = !!errors;

  return (
    <>
      <div className={styles["column-right"]}>
        <select
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          className={styles["form-input"]}
          id={id}
          aria-invalid={hasError}
          {...props}
          {...(register && register(name, rules))}
        >
          <option value="">Wybierz {label}</option>
          {options?.map((option) => (
            <option
              id={option.value.toString()}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
