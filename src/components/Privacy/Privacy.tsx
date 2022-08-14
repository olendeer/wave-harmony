import Button from "@c/ui/Button/Button"

import { ReactComponent as Cookie } from "@/assets/svg/cookie.svg"
import { useActions, useAppSelector } from "@/store/hooks"
import { cookieModalSelector } from "@/store/selectors"

import styles from "./Privacy.module.scss"

const Privacy = () => {
	const cookie = useAppSelector(cookieModalSelector)

	const { setIsCheckCookie } = useActions()

	const closeHandler = () => {
		setIsCheckCookie()
	}

	return (
		<div
			className={[
				styles.privacy,
				cookie ? styles["privacy--open"] : "",
			].join(" ")}
		>
			<Cookie />
			<p>
				Находясь на этом сайте, вы соглашаетесь с нашей —{" "}
				<a href="" target={"_blank"} rel="noreferrer">
					Политикой конфиденциальности
				</a>
			</p>
			<Button size="small" style="white" onClick={closeHandler}>
				Принять
			</Button>
		</div>
	)
}

export default Privacy
