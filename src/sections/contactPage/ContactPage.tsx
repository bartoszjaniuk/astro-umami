import imageOffertRef from "/assets/contact.jpg";
import styles from "./ContactPage.styles.module.scss";
import { useForm } from "react-hook-form";
import { ContactFormProps, emailPattern } from "../contact/Contact";
import { Input } from "../../components/input/Input";
import { CheckBox } from "../../components/checkbox/Checkbox";
import { Button } from "../../components/button/Button";
import { useState, useEffect } from "react";
import { InstagramIcon } from "../../components/icons/instagram-icon/InstagramIcon";
import { FacebookIcon } from "../../components/icons/facebook-icon/FacebookIcon";
import { TiktokIcon } from "../../components/icons/tiktok-icon/TiktokIcon";
import imgReference from "/assets/akademia_fitness.png";
import profileImageReference from "/assets/aleksandra_offert.png";
import { Icon } from "@iconify/react";

export const ContactPage = () => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<ContactFormProps>({ mode: "all" });

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
				},
			);
			await response.json();
			const res = await response.json();
			if (res.status === "success") setIsSuccess(true);
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
					<img src={imageOffertRef} alt="Aleksandra Kajstura-Janiuk" />
				</div>
			</section>
			<section className={styles.contact} id="formularz-kontaktowy">
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
				<div className={styles["details"]}>
					<h3 className={styles["details__heading"]}>Dietetyk Umami</h3>
					<div className={styles.person}>
						<picture className={styles["person__photo"]}>
							<img
								className={styles["person__img"]}
								src={profileImageReference}
								alt="Aleksandra Kajstura-Janiuk zdjęcie profilowe"
							/>
						</picture>
						<p className={styles["details__paragraph"]}>
							Aleksandra Kajstura-Janiuk
						</p>
					</div>
					<div className={styles["details__box"]}>
						<Icon icon="mdi:cellphone" width={25} color="#57463c" />

						<p className={styles["details__paragraph"]}>570 498 067</p>
					</div>

					<div className={styles["details__box"]}>
						<Icon icon="mdi:email" width={25} color="#57463c" />
						<p className={styles["details__paragraph"]}>
							<a
								className={styles["details__link"]}
								href="mailto:aleksandra@dietetyk-umami.pl"
							>
								aleksandra@dietetyk-umami.pl
							</a>
						</p>
					</div>

					<h3 className={styles.collaboration}>Współpracuję z:</h3>
					<a style={{ paddingTop: "1rem" }} href="https://akademia-fitness.eu">
						<img src={imgReference} alt="logo" />
					</a>

					<div className={styles["socials"]}>
						{socalMedia.map((social, index) => (
							<p key={index} className={styles["details__paragraph"]}>
								<a className={styles["details__link"]} href={social.title}>
									{social.icon}
								</a>
							</p>
						))}
					</div>
				</div>
			</section>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.232427245804!2d18.20260967706767!3d50.08193507152423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47116805a0be8eb5%3A0xe8362cb409eec0ef!2sAkademia%20Fitness%20(Ocicka)!5e0!3m2!1sen!2spl!4v1702029427976!5m2!1sen!2spl"
				width="100%"
				height="650"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</main>
	);
};

const socalMedia = [
	{
		title: "Facebook",
		icon: <FacebookIcon width="30px" height="30px" />,
		link: "https://www.facebook.com/dietetyk.umami/",
	},
	{
		title: "Instagram",
		icon: <InstagramIcon width="30px" height="30px" />,
		link: "https://www.instagram.com/dietetyk_umami/",
	},
	{
		title: "TikTok",
		icon: <TiktokIcon width="30px" height="30px" />,
		link: "https://www.tiktok.com/@dietetyk.umami?_t=8hvXiAd94i0&_r=1",
	},
];
