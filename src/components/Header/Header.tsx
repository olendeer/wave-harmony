import { FC, useEffect, useState } from "react"

import IconDot from "@c/ui/IconDot/IconDot"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import HeaderLinks from "./HeaderLinks/HeaderLinks"

import { ReactComponent as Logo } from "@/assets/svg/logo.svg"
import { ReactComponent as Cart } from "@/assets/svg/cart.svg"
import { ReactComponent as Heart } from "@/assets/svg/heart.svg"
import { ReactComponent as Search } from "@/assets/svg/search.svg"
import { ReactComponent as User } from "@/assets/svg/user.svg"

import styles from "./Header.module.scss"

const Header: FC = () => {
	const [collapse, setCollapse] = useState<boolean>(true)

	const scrollHandler = () => setCollapse(window.scrollY > 150 ? true : false)

	useEffect(() => {
		scrollHandler()
		document.addEventListener("scroll", scrollHandler)
		return () => document.removeEventListener("scroll", scrollHandler)
	}, [])

	return (
		<>
			{collapse && <FullWidthLayout className={styles.plug} />}
			<FullWidthLayout className={collapse ? styles.wrapper : ""}>
				<header
					className={[
						styles.header,
						collapse ? styles["header--collapse"] : "",
					].join(" ")}
				>
					<div className={styles["header-nav"]}>
						{collapse ? (
							<HeaderLinks collapse={collapse} />
						) : (
							<>
								<div className={styles["header-nav__contacts"]}>
									<span>8 (800) 511 36 39 </span> — бесплатно
									по России
								</div>
								<Logo />
							</>
						)}
						<div className={styles["header-nav__buttons"]}>
							<IconDot icon={<Search />} dot={false} />
							<IconDot icon={<User />} dot={false} />
							<IconDot icon={<Heart />} dot={true} pt={5} />
							<IconDot icon={<Cart />} dot={true} />
						</div>
					</div>
					{!collapse && <HeaderLinks />}
				</header>
			</FullWidthLayout>
		</>
	)
}

export default Header
