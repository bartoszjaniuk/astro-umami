import { ErrorMessage } from "@hookform/error-message";
import type { ContactFormProps } from "../../sections/contact/Contact";
import { FormErrorMessage } from "../input/ErrorMessage";
import type { InputProps } from "../input/Input";
import styles from "./Checkbox.styles.module.scss";
import statuteReference from "/regulamin.pdf";

export const CheckBox = ({
	id,
	name,
	label,
	type,
	className = "",
	placeholder,
	errors,
	register,
	rules,
	value,
	...props
}: InputProps<ContactFormProps>) => {
	const hasError = !!errors;
	return (
		<div className={styles.wrapper}>
			<div className={styles["group"]}>
				<input
					className={styles["form-input"]}
					id={id}
					name={name}
					aria-invalid={hasError}
					type="checkbox"
					aria-label={label}
					placeholder={placeholder}
					{...props}
					{...(register && register(name, rules))}
				/>
				<label className="text-white" htmlFor={id}>
					Zapoznałem się{" "}
					<a className={styles.link} href={statuteReference} target="_blank">
						Regulaminem Serwisu
					</a>{" "}
					i akceptuję jego treść.
				</label>
			</div>
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
