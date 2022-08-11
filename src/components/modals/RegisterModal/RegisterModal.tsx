import { FC } from "react"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import { registerModalSelector } from "@/store/selectors"
import { useAppForm } from "@/hooks/useAppForm"
import { IRegisterForm } from "@/models/forms"
import { ValidationUtil } from "@/utilites/validationUtil"

import { ReactComponent as Eye } from "@/assets/svg/eye.svg"

import styles from "./RegisterModal.module.scss"

const RegisterModal: FC = () => {
	const register = useAppSelector(registerModalSelector)

	const { changeOpenAuth, changeOpenRegister, registerUser } = useActions()

	const { errors, fields, reset, handleSubmit } = useAppForm<IRegisterForm>([
		{
			name: "name",
			rules: { required: true, minLength: 2 },
			default: "",
		},
		{
			name: "sirname",
			rules: { required: true, minLength: 2 },
			default: "",
		},
		{
			name: "email",
			rules: { required: true, pattern: ValidationUtil.email },
			default: "",
		},
		{
			name: "phone",
			rules: { required: true, pattern: ValidationUtil.phone },
			default: "",
		},
		{
			name: "password",
			rules: { required: true, minLength: 8, maxLength: 32 },
			default: "",
		},
		{
			name: "subscribe",
			default: false,
		},
	])

	const onSubmit = handleSubmit(async (data) => {
		await registerUser(data)
		reset()
	})

	return (
		<Modal changeOpen={changeOpenRegister} isOpen={register}>
			<div className={styles.modal}>
				<span className={styles.modal__header}>Создать аккаунт</span>
				<p className={styles.modal__or}>
					или{" "}
					<span onClick={() => changeOpenAuth(true)}>
						войти в существующий
					</span>
				</p>

				<form className={styles.form} onSubmit={onSubmit}>
					<Input
						type="text"
						require={true}
						placeholder="Имя"
						className={styles.form__input}
						{...fields.name}
						error={!!errors.name}
					/>
					<Input
						type="text"
						require={true}
						placeholder="Фамилия"
						className={styles.form__input}
						{...fields.sirname}
						error={!!errors.sirname}
					/>
					<Input
						type="text"
						require={true}
						placeholder="E-mail"
						className={styles.form__input}
						{...fields.email}
						error={!!errors.email}
					/>
					<Input
						type="text"
						require={true}
						placeholder="Tелефон"
						className={styles.form__input}
						{...fields.phone}
						error={!!errors.phone}
					/>
					<Input
						type="password"
						require={true}
						placeholder="Пароль"
						className={styles.form__input}
						icon={<Eye />}
						{...fields.password}
						error={!!errors.password}
					/>
					<Checkbox
						className={styles.form__checkbox}
						title={"Подписаться на новинки и акции"}
						checked={fields.subscribe.value}
						onChange={fields.subscribe.onChange}
					/>
					<Button className={styles.form__button}>
						Создать аккаунт
					</Button>
				</form>
			</div>
		</Modal>
	)
}

export default RegisterModal
