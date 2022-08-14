import { FC, useState } from "react"
import { ISortProps } from "./types"

import Popup from "@c/ui/Popup/Popup"

import { ReactComponent as Arrow } from "@/assets/svg/arrow-down.svg"

import styles from "./Sort.module.scss"
import Button from "../Button/Button"

const Sort: FC<ISortProps> = ({
	title,
	children,
	onChange = () => {},
	className,
}) => {
	const [isOpen, changeOpen] = useState<boolean>(false)

	const changeOpenHandler = () => changeOpen((prev) => !prev)

	return (
		<div
			className={[styles.sort, isOpen ? styles["sort--open"] : ""].join(
				" "
			)}
			onClick={changeOpenHandler}
		>
			<span className={styles.sort__title}>{title}</span> <Arrow />
			<Popup isOpen={isOpen} changeOpen={changeOpen} title={title}>
				<div className={[styles.sort__body, className].join(" ")}>
					{children}
				</div>
				<Button
					size="small"
					className={styles.sort__submit}
					onClick={() => {
						onChange()
						changeOpen(false)
					}}
				>
					Применить
				</Button>
			</Popup>
		</div>
	)
}

export default Sort
