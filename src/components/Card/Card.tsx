import { FC } from "react"
import { ICardProps } from "./types"

import Button from "@c/ui/Button/Button"

import { PriceUtil } from "@/utilites/priceUtil"

import { ReactComponent as HeartFav } from "@/assets/svg/heart-fav.svg"

import styles from "./Card.module.scss"

const Card: FC<ICardProps> = ({ size = "small", product }) => {
	return (
		<div className={[styles.card, styles[`card--${size}`]].join(" ")}>
			<div className={styles.card__image}>
				<img src={product.images[0]} alt="product" />
				<HeartFav
					className={[
						styles["card__image-favourite"],
						// product.fav
						// 	? styles["card__image-favourite--active"]
						// 	: "",
					].join(" ")}
				/>
				{product.sale && (
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
