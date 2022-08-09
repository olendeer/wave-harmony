import { FC, useCallback, useState } from "react"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import { authModalSelector } from "@/store/selectors"
import { useInput } from "@/hooks/useInput"

import { ReactComponent as Eye } from "@/assets/svg/eye.svg"

import styles from "./AuthModal.module.scss"

const AuthModal: FC = () => {
	const [remind, setRemind] = useState<boolean>(false)

	const changeRemind = useCallback(() => {
		setRemind((prev) => !prev)
	}, [])

	const auth = useAppSelector(authModalSelector)

	const { changeOpenAuth, changeOpenRegister, changeOpenRemind } =
		useActions()

	const email = useInput("")
	const password = useInput("")

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

				<form className={styles.form}>
					<Input
						type="text"
						require={true}
						placeholder="E-mail или телефон"
						className={styles.form__input}
						{...email.bind}
					/>
					<Input
						type="password"
						require={true}
						placeholder="Пароль"
						className={styles.form__input}
						icon={<Eye />}
						{...password.bind}
					/>
					<Checkbox
						className={styles.form__checkbox}
						title={"Запомнить меня"}
						checked={remind}
						onChange={changeRemind}
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
