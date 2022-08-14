import { FC, useState } from "react"
import { IDateModalProps } from "./types"

import Calendar from "react-calendar"

import Modal from "@c/ui/Modal/Modal"
import Button from "@c/ui/Button/Button"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { DateUtil } from "@/utilites/dateUtil"

import { ReactComponent as Arrow } from "@/assets/svg/arrow-right.svg"

import styles from "./DateModal.module.scss"

const DateModal: FC<IDateModalProps> = ({ changeOpen, isOpen, onChange }) => {
	const [date, setDate] = useState<string | Date>(new Date())

	return (
		<Modal changeOpen={changeOpen} isOpen={isOpen} className={styles.modal}>
			<div className={styles.datemodal}>
				<div className={styles.datemodal__header}>Выберите дату</div>
				<div className={styles.datemodal__calendar}>
					<Calendar
						onChange={setDate}
						value={new Date(date)}
						prevLabel={
							<Arrow
								className={[
									styles.calendar__arrow,
									styles["calendar__arrow--left"],
								].join(" ")}
							/>
						}
						nextLabel={<Arrow className={styles.calendar__arrow} />}
						tileClassName={styles.calendar__item}
						showNeighboringMonth={false}
						next2AriaLabel={""}
						prev2AriaLabel={""}
						navigationLabel={({ label }) => label.slice(0, -2)}
						className={styles.calendar}
					/>
				</div>
				<div className={styles.datemodal__checkbox}>
					<Checkbox
						title="Отправить сразу после оплаты"
						checked={date === "Сразу после оплаты"}
						onChange={() => setDate("Сразу после оплаты")}
					/>
				</div>
				<div className={styles.datemodal__button}>
					<Button
						onClick={() => {
							const dateNotFormated = new Date(date)
							if (dateNotFormated.toString() !== "Invalid Date") {
								onChange(
									DateUtil.dateToDatepicker(dateNotFormated)
								)
							} else {
								onChange(date as string)
							}
							changeOpen(false)
						}}
					>
						Применить
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default DateModal
