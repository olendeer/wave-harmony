import { FC, useCallback, useState } from "react"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import { registerModalSelector } from "@/store/selectors"
import { useInput } from "@/hooks/useInput"

import { ReactComponent as Eye } from "@/assets/svg/eye.svg"

import styles from "./RegisterModal.module.scss"

const RegisterModal: FC = () => {
	const [subscribe, setSubscribe] = useState<boolean>(false)

	const changeSubscribe = useCallback(() => {
		setSubscribe((prev) => !prev)
	}, [])

	const register = useAppSelector(registerModalSelector)

	const { changeOpenAuth, changeOpenRegister } = useActions()

	const name = useInput("")
	const sirname = useInput("")
	const email = useInput("")
	const phone = useInput("")
	const password = useInput("")

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

				<form className={styles.form}>
					<Input
						type="text"
						require={true}
						placeholder="Имя"
						className={styles.form__input}
						{...name.bind}
					/>
					<Input
						type="text"
						require={true}
						placeholder="Фамилия"
						className={styles.form__input}
						{...sirname.bind}
					/>
					<Input
						type="text"
						require={true}
						placeholder="E-mail или телефон"
						className={styles.form__input}
						{...email.bind}
					/>
					<Input
						type="text"
						require={true}
						placeholder="Tелефон"
						className={styles.form__input}
						{...phone.bind}
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
						title={"Подписаться на новинки и акции"}
						checked={subscribe}
						onChange={changeSubscribe}
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
