import { FC } from "react"

import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import {
	productsWishSelectedSelector,
	productsWishSelector,
	wishListLengthSelector,
	wishListModalSelector,
} from "@/store/selectors"

import { ReactComponent as Close } from "@/assets/svg/close.svg"

import styles from "./WishList.module.scss"
import Card from "@c/Card/Card"

const WishList: FC = () => {
	const wishListModal = useAppSelector(wishListModalSelector)
	const wishListLength = useAppSelector(wishListLengthSelector)
	const wishList = useAppSelector(productsWishSelector)
	const wishListSelected = useAppSelector(productsWishSelectedSelector)

	const { changeOpenWishList } = useActions()

	return (
		<div
			className={[
				styles.wishlist,
				wishListModal ? styles["wishlist--open"] : "",
			].join(" ")}
		>
			<FullWidthLayout className={styles["wishlist__header-wrapper"]}>
				<div className={styles.wishlist__header}>
					<h3>Мой Wishlist</h3>
					<span>({wishListLength} товара)</span>
					<Close onClick={() => changeOpenWishList(false)} />
				</div>
			</FullWidthLayout>
			<ContainerLayout>
				<div className={styles.wishlist__content}>
					<div className={styles.wishlist__nav}>
						<Checkbox
							title={"Снять отметки"}
							className={styles["wishlist__nav-checkbox"]}
							checked={wishListSelected}
							onChange={() => {}}
						/>
					</div>
					<div className={styles.wishlist__products}>
						{wishList.map((item) => (
							<Card
								product={item.product}
								key={item.product.id}
								mode={"wishlist"}
							/>
						))}
					</div>
				</div>
			</ContainerLayout>
		</div>
	)
}

export default WishList
