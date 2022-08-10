import { FC } from "react"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"

import { useActions, useAppSelector } from "@/store/hooks"
import { remindModalSelector } from "@/store/selectors"
import { useAppForm } from "@/hooks/useAppForm"
import { IRemindForm } from "@/models/forms"
import { ValidationUtil } from "@/utilites/validationUtil"

import styles from "./RemindModal.module.scss"

const RemindModal: FC = () => {
	const remind = useAppSelector(remindModalSelector)

	const { changeOpenRemind } = useActions()

	const { errors, fields, reset, handleSubmit } = useAppForm<IRemindForm>([
		{
			name: "phone",
			rules: { required: true, pattern: ValidationUtil.phone },
			default: "",
		},
	])

	const onSubmit = handleSubmit((data) => {
		console.log(data)
		reset()
	})

	return (
		<Modal changeOpen={changeOpenRemind} isOpen={remind}>
			<div className={styles.modal}>
				<span className={styles.modal__header}>
					Восстановление пароля
				</span>
				<p className={styles.modal__or}>
					Пожалуйста введита ваш логин или телефон и мы сможем
					отправить вам письмо с новым паролем
				</p>

				<form className={styles.form} onSubmit={onSubmit}>
					<Input
						type="text"
						require={true}
						placeholder="Tелефон"
						className={styles.form__input}
						{...fields.phone}
						error={!!errors.phone}
					/>
					<Button className={styles.form__button}>Отправить</Button>
				</form>
			</div>
		</Modal>
	)
}

export default RemindModal
