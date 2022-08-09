import { FC, FormEvent, useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import IconDot from "@c/ui/IconDot/IconDot"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import HeaderLinks from "./HeaderLinks/HeaderLinks"

import { stopPropagation } from "@/utilites/stopPropagation"
import { useActions } from "@/store/hooks"
import { useInput } from "@/hooks/useInput"
import { useOutClick } from "@/hooks/useOutClick"
import { useTheme } from "@/hooks/useTheme"

import { ReactComponent as Logo } from "@/assets/svg/logo.svg"
import { ReactComponent as Cart } from "@/assets/svg/cart.svg"
import { ReactComponent as Heart } from "@/assets/svg/heart-fav.svg"
import { ReactComponent as Search } from "@/assets/svg/search.svg"
import { ReactComponent as User } from "@/assets/svg/user.svg"

import styles from "./Header.module.scss"

const Header: FC = () => {
	const [collapse, setCollapse] = useState<boolean>(true)
	const [searchCollapse, setSearchCollapse] = useState<boolean>(false)

	useOutClick(searchCollapse, setSearchCollapse)

	const theme = useTheme()

	const search = useInput("")

	const { changeOpenAuth } = useActions()

	const searchHandler = useCallback(() => {
		if (!searchCollapse) {
			setSearchCollapse(true)
		} else {
			console.log(search.value) // dispatch search
			search.clear()
		}
	}, [searchCollapse, search])

	const searchSubmitHandler = (event: FormEvent) => {
		event.preventDefault()
		searchHandler()
		setSearchCollapse(false)
	}

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
						styles[theme],
					].join(" ")}
				>
					<div className={styles["header-nav"]}>
						{collapse ? (
							<HeaderLinks collapse={collapse} />
						) : (
							<>
								<div className={styles["header-nav__contacts"]}>
									<a href="tel:8 (800) 511 36 39">
										8 (800) 511 36 39
									</a>
									— бесплатно по России
								</div>
								<Link to="/">
									<Logo />
								</Link>
							</>
						)}
						<div className={styles["header-nav__buttons"]}>
							<IconDot
								icon={<Search onClick={searchHandler} />}
								dot={false}
							>
								<form
									onClick={stopPropagation}
									className={[
										styles.search,
										searchCollapse
											? styles["search--active"]
											: "",
									].join(" ")}
									onSubmit={searchSubmitHandler}
								>
									<input
										type="text"
										className={styles.search__input}
										placeholder={"Я ищу..."}
										{...search.bind}
									/>
								</form>
							</IconDot>
							<IconDot
								icon={
									<User
										onClick={() => changeOpenAuth(true)}
									/>
								}
								dot={false}
							/>
							<IconDot
								icon={
									<Heart className={styles["icon-heart"]} />
								}
								dot={true}
								pt={4}
							/>
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
