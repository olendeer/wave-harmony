import { FC } from "react"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useAppForm } from "@/hooks/useAppForm"
import { useActions, useAppSelector } from "@/store/hooks"
import { authModalSelector } from "@/store/selectors"
import { IAuthForm } from "@/models/forms"

import { ValidationUtil } from "@/utilites/validationUtil"

import { ReactComponent as Eye } from "@/assets/svg/eye.svg"

import styles from "./AuthModal.module.scss"

const AuthModal: FC = () => {
	const auth = useAppSelector(authModalSelector)

	const { changeOpenAuth, changeOpenRegister, changeOpenRemind, authUser } =
		useActions()

	const { errors, fields, reset, handleSubmit } = useAppForm<IAuthForm>([
		{
			name: "email",
			rules: { required: true, pattern: ValidationUtil.email },
			default: "",
		},
		{
			name: "password",
			rules: { required: true, minLength: 8, maxLength: 32 },
			default: "",
		},
		{
			name: "remind",
			default: false,
		},
	])

	const onSubmit = handleSubmit(async (data) => {
		await authUser(data)
		reset()
	})

	return (
		<Modal changeOpen={changeOpenAuth} isOpen={auth}>
			<div className={styles.modal}>
				<span className={styles.modal__header}>Войти</span>
				<p className={styles.modal__or}>
					или{" "}
					<span onClick={() => changeOpenRegister(true)}>
						создать аккаунт
					</span>
				</p>

				<form className={styles.form} onSubmit={onSubmit}>
					<Input
						type="text"
						require={true}
						placeholder="E-mail"
						className={styles.form__input}
						{...fields.email}
						error={!!errors.email}
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
						title={"Запомнить меня"}
						checked={fields.remind.value}
						onChange={fields.remind.onChange}
					/>
					<span
						className={styles.form__remind}
						onClick={() => changeOpenRemind(true)}
					>
						Напомнить пароль
					</span>
					<Button className={styles.form__button}>Войти</Button>
				</form>
			</div>
		</Modal>
	)
}

export default AuthModal
