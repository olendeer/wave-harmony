import { FC, useEffect, useRef, useState } from "react"
import { ICardProps } from "./types"

import Slider from "react-slick"

import Button from "@c/ui/Button/Button"
import Loading from "@c/ui/Loading/Loading"

import { PriceUtil } from "@/utilites/priceUtil"
import { useActions, useAppSelector } from "@/store/hooks"
import {
	isSelectedProductInWishListSelector,
	wishListSelector,
} from "@/store/selectors"

import { ReactComponent as HeartFav } from "@/assets/svg/heart-fav.svg"
import { ReactComponent as Delete } from "@/assets/svg/delete.svg"
import { ReactComponent as Arrow } from "@/assets/svg/arrow-right.svg"

import styles from "./Card.module.scss"

const Card: FC<ICardProps> = ({
	size = "small",
	product,
	mode = "standart",
}) => {
	const [load, setLoad] = useState<boolean>(true)

	const slider = useRef<Slider | null>(null)
	const [slide, setSlide] = useState<number>(0)

	const changeSlide = (index: number) => slider.current?.slickGoTo(index)
	const afterChangeSlide = (index: number) => setSlide(index)
	const prevSlide = () => slider.current?.slickPrev()
	const nextSlide = () => slider.current?.slickNext()

	const { toggleProductToWishList, toggleSelectProductInWishList } =
		useActions()

	const wishlist = useAppSelector(wishListSelector)

	const isSelected = useAppSelector((state) =>
		isSelectedProductInWishListSelector(state, product.id)
	)

	const onToggleWishList = () => toggleProductToWishList(product.id)

	useEffect(() => {
		setSlide(0)
	}, [size])

	return (
		<div className={[styles.card, styles[`card--${size}`]].join(" ")}>
			<div className={styles.card__image}>
				{load && <Loading />}
				{size === "big" && product.images.length > 1 ? (
					<div className={styles["card__slider-wrapper"]}>
						<Slider
							ref={slider}
							slidesToShow={1}
							lazyLoad={"ondemand"}
							slidesToScroll={1}
							infinite
							draggable={false}
							autoplay={false}
							arrows={false}
							className={[styles.card__slider].join(" ")}
							afterChange={afterChangeSlide}
							beforeChange={() => setLoad(true)}
							speed={500}
						>
							{product.images.map((item) => (
								<img
									key={item}
									src={item}
									alt="product"
									onLoad={() => setLoad(false)}
								/>
							))}
						</Slider>
						<div
							className={[
								styles["card__slider-nav"],
								styles["card__slider-nav--prev"],
							].join(" ")}
							onClick={prevSlide}
						>
							<Arrow />
						</div>
						<div
							className={styles["card__slider-nav"]}
							onClick={nextSlide}
						>
							<Arrow />
						</div>
					</div>
				) : (
					<img
						src={product.images[0]}
						alt="product"
						onLoad={() => setLoad(false)}
					/>
				)}
				{mode === "wishlist" ? (
					<div
						className={styles.card__delete}
						onClick={onToggleWishList}
					>
						<Delete />
					</div>
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
				{mode === "wishlist" && (
					<div
						className={[
							styles.card__select,
							isSelected ? styles["card__select--active"] : "",
						].join(" ")}
						onClick={() =>
							toggleSelectProductInWishList(product.id)
						}
					>
						<span></span>
					</div>
				)}
			</div>
			<div className={styles.card__info}>
				{size === "big" && product.images.length > 1 ? (
					<ul className={styles["card__slider-dots"]}>
						{product.images.map((_, index) => (
							<li
								key={index}
								onClick={() => changeSlide(index)}
								className={[
									styles["card__slider-dot"],
									index === slide
										? styles["card__slider-dot--active"]
										: "",
								].join(" ")}
							></li>
						))}
					</ul>
				) : (
					""
				)}
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
