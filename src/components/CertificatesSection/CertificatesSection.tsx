import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import GradientBack from "@c/GradientBack/GradientBack"
import Input from "@c/ui/Input/Input"
import Button from "@c/ui/Button/Button"

import { useAppForm } from "@/hooks/useAppForm"
import { ValidationUtil } from "@/utilites/validationUtil"
import { ICreateCertificateForm } from "@/models/forms"

import { ReactComponent as Cards } from "@/assets/svg/cards.svg"
import { ReactComponent as Ruble } from "@/assets/svg/ruble-black.svg"

import styles from "./CertificatesSection.module.scss"
import Textarea from "@c/ui/Textarea/Textarea"

const CertificatesSection: FC = () => {
	const { errors, fields, reset, handleSubmit } =
		useAppForm<ICreateCertificateForm>([
			{
				name: "price",
				rules: { required: true },
				default: "",
			},
			{
				name: "email",
				rules: { required: true, pattern: ValidationUtil.email },
				default: "",
			},
			{
				name: "get_email",
				rules: { required: false, pattern: ValidationUtil.email },
				default: "",
			},
			{
				name: "phone",
				rules: { required: true, pattern: ValidationUtil.phone },
				default: "",
			},
			{
				name: "message",
				rules: { required: false },
				default: "",
			},
		])

	const onSubmit = handleSubmit(async (data) => {
		console.log(data)
		reset()
	})

	return (
		<ContainerLayout>
			<section className={styles.certificates}>
				<div className={styles.certificates__image}>
					<Cards />
					<GradientBack className={styles.gradient} />
				</div>
				<form className={styles.certificates__form} onSubmit={onSubmit}>
					<h1>Электронный подарочный сертификат</h1>
					<p>
						Вы можете создать <b>электронный</b> подарочный
						сертификат на покупку продукции в нашем
						интернет-магазине, введите желаемую сумму подарка (от
						500 рублей) и укажите данные счастливого получателя
					</p>
					<Input
						placeholder="Номинал"
						require={true}
						type="text"
						className={styles.input}
						{...fields.price}
						icon={<Ruble />}
					/>
					<Input
						placeholder="Email для оплаты"
						require={true}
						type="text"
						className={styles.input}
						{...fields.email}
					/>
					<Input
						placeholder="Email для получения сертификата"
						type="text"
						className={styles.input}
						{...fields.get_email}
					/>
					<Input
						placeholder="Телефон получателя"
						require={true}
						type="text"
						className={styles.input}
						{...fields.phone}
					/>
					<Textarea
						placeholder="Введите текст поздравления, которое увидит получатель"
						{...fields.message}
					/>

					<Button className={styles.button}>Перейти к оплате</Button>
				</form>
			</section>
		</ContainerLayout>
	)
}

export default CertificatesSection
