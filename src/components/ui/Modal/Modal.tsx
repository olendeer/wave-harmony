import { FC } from "react"
import { IModalProps } from "./types"

import { stopPropagation } from "@/utilites/stopPropagation"

import { ReactComponent as Close } from "@/assets/svg/close.svg"

import styles from "./Modal.module.scss"

const Modal: FC<IModalProps> = ({
	children,
	isOpen,
	className,
	changeOpen,
}) => {
	const closeHandler = () => {
		changeOpen(false)
	}

	return (
		<div
			className={[styles.modal, isOpen ? styles["modal--open"] : ""].join(
				" "
			)}
			onMouseDown={closeHandler}
		>
			<div
				className={[styles.modal__content, className].join(" ")}
				onMouseDown={stopPropagation}
			>
				{children}
				<Close onClick={closeHandler} />
			</div>
		</div>
	)
}

export default Modal
