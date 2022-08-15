import { FC } from "react"
import { IPopupProps } from "./types"
import { stopPropagation } from "@/utilites/stopPropagation"

import { useOutClick } from "@/hooks/useOutClick"

import { ReactComponent as Close } from "@/assets/svg/close.svg"

import styles from "./Popup.module.scss"

const Popup: FC<IPopupProps> = ({ title, children, isOpen, changeOpen }) => {
	const { closeHandler } = useOutClick(isOpen, changeOpen)

	return (
		<div
			className={styles.popup}
			onMouseDown={stopPropagation}
			onClick={stopPropagation}
		>
			<div
				className={[
					styles["popup-content"],
					isOpen ? styles["popup-content--open"] : "",
				].join(" ")}
			>
				<div className={styles["popup-content__header"]}>
					{" "}
					{title} <Close onClick={closeHandler} />{" "}
				</div>
				<div className={styles["popup-content__body"]}>{children}</div>
			</div>
		</div>
	)
}

export default Popup
