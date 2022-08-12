import { FC, useEffect } from "react"

import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import Checkbox from "@c/ui/Checkbox/Checkbox"
import Button from "@c/ui/Button/Button"
import Card from "@c/Card/Card"

import { useActions, useAppSelector } from "@/store/hooks"
import {
	IsProductsWishSelectedSelector,
	productsWishSelectedSelector,
	productsWishSelector,
	wishListLengthSelector,
	wishListModalSelector,
} from "@/store/selectors"

import { CasesUtil } from "@/utilites/casesUtil"

import { ReactComponent as Close } from "@/assets/svg/close.svg"

import styles from "./WishList.module.scss"

const WishList: FC = () => {
	const wishListModal = useAppSelector(wishListModalSelector)
	const wishListLength = useAppSelector(wishListLengthSelector)
	const wishList = useAppSelector(productsWishSelector)
	const wishListSelected = useAppSelector(IsProductsWishSelectedSelector)
	const wishListSelectedProducts = useAppSelector(
		productsWishSelectedSelector
	)

	const {
		changeOpenWishList,
		selectAllProductsInWishList,
		removeSelectAllProductsInWishList,
		removeProductsFromWishList,
		clearProductsWishList,
	} = useActions()

	useEffect(() => {
		if (!wishListModal) {
			clearProductsWishList()
		}
	}, [wishListModal])

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
					<span>
						({wishListLength}{" "}
						{CasesUtil.productCases("товар", wishListLength)})
					</span>
					<Close onClick={() => changeOpenWishList(false)} />
				</div>
			</FullWidthLayout>
			<ContainerLayout>
				<div className={styles.wishlist__content}>
					<div className={styles.wishlist__nav}>
						<Checkbox
							title={
								wishListSelected
									? "Снять отметки"
									: "Отметить все товары"
							}
							className={styles["wishlist__nav-checkbox"]}
							checked={wishListSelected}
							onChange={() =>
								wishListSelected
									? removeSelectAllProductsInWishList()
									: selectAllProductsInWishList()
							}
						/>
						{wishListSelected && (
							<Button
								onClick={() =>
									removeProductsFromWishList(
										wishListSelectedProducts
									)
								}
								style={"warning"}
								mode={"stroke"}
								size={"small"}
							>
								Удалить отмеченные
							</Button>
						)}
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
