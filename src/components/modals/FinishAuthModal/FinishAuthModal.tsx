import { FC } from "react"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"

import { useActions, useAppSelector } from "@/store/hooks"
import { finishAuthModalSelector } from "@/store/selectors"

import { ReactComponent as Complete } from "@/assets/svg/complete.svg"

import styles from "./FinishAuthModal.module.scss"

const FinishAuthModal: FC = () => {
	const finishAuth = useAppSelector(finishAuthModalSelector)

	const { changeOpenFinishAuth } = useActions()

	return (
		<Modal changeOpen={changeOpenFinishAuth} isOpen={finishAuth}>
			<div className={styles.modal}>
				<Complete />
				<span className={styles.modal__header}>
					Вы успешно зарегистрировались, теперь вам доступно:
				</span>
				<ol className={styles.modal__list}>
					<li>Отслеживание доставки</li>
					<li>Ускоренное оформление заказа</li>
					<li>История заказов</li>
					<li>Управление подписками</li>
				</ol>
				<Button onClick={() => changeOpenFinishAuth(false)}>
					Закрыть окно
				</Button>
			</div>
		</Modal>
	)
}

export default FinishAuthModal
