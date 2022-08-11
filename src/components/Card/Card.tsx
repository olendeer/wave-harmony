import { FC, useState } from "react"
import { ICardProps } from "./types"

import Button from "@c/ui/Button/Button"
import Loading from "@c/ui/Loading/Loading"

import { PriceUtil } from "@/utilites/priceUtil"
import { useActions, useAppSelector } from "@/store/hooks"
import { wishListSelector } from "@/store/selectors"

import { ReactComponent as HeartFav } from "@/assets/svg/heart-fav.svg"

import styles from "./Card.module.scss"

const Card: FC<ICardProps> = ({
	size = "small",
	product,
	mode = "standart",
}) => {
	const [load, setLoad] = useState<boolean>(true)

	const { toogleProductToWishList } = useActions()

	const wishlist = useAppSelector(wishListSelector)

	const onToggleWishList = () => toogleProductToWishList(product.id)

	return (
		<div className={[styles.card, styles[`card--${size}`]].join(" ")}>
			<div className={styles.card__image}>
				{load && <Loading />}
				<img
					src={product.images[0]}
					alt="product"
					onLoad={() => setLoad(false)}
				/>
				{mode === "wishlist" ? (
					""
				) : (
					<HeartFav
						className={[
							styles["card__image-favourite"],
							wishlist.includes(product.id)
								? styles["card__image-favourite--active"]
								: "",
						].join(" ")}
						onClick={onToggleWishList}
					/>
				)}
				{product.sale && mode === "standart" && (
					<span className={styles["card__image-sale"]}>
						{PriceUtil.sale(product.sale)}
					</span>
				)}
			</div>
			<div className={styles.card__info}>
				{product.sale ? (
					<div
						className={[
							styles["card__info-price"],
							styles["card__info-price--sale"],
						].join(" ")}
					>
						{PriceUtil.price(product.price)}
						<span>
							{PriceUtil.priceWithSale(
								product.price,
								product.sale
							)}
						</span>
					</div>
				) : (
					<span className={styles["card__info-price"]}>
						{PriceUtil.price(product.price)}
					</span>
				)}
				<span className={styles["card__info-name"]}>
					{product.name}
				</span>
				<span className={styles["card__info-sizes"]}>
					{product.sizes.map((item) => (
						<span key={item}>{item}</span>
					))}
				</span>
				<Button className={styles["card__info-buy"]}>Купить</Button>
			</div>
		</div>
	)
}

export default Card
