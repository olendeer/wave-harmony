import { FC, useState, useEffect, useCallback, useRef } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import Button from "@c/ui/Button/Button"
import Modal from "@c/ui/Modal/Modal"
import Loading from "@c/ui/Loading/Loading"
import SectionHeader from "@c/ui/SectionHeader/SectionHeader"

import { useModal } from "@/hooks/useModal"
import { useData } from "@/hooks/useData"
import { useActions } from "@/store/hooks"
import { gallerySelector } from "@/store/selectors"

import styles from "./Gallery.module.scss"

const Gallery: FC = () => {
	const modal = useModal()

	const { fetchGallery } = useActions()

	const gallery = useData<string[]>(fetchGallery, gallerySelector)

	const [image, setImage] = useState<string>("")
	const [load, setLoad] = useState<boolean>(false)

	const imageRef = useRef<HTMLImageElement | null>(null)

	const scaleImage = useCallback(
		(image: string) => {
			setImage(image)
			modal.changeOpen(true)
			setLoad(true)
		},
		[modal]
	)

	useEffect(() => {
		if (load && imageRef.current?.complete) setLoad(false)
	}, [load])

	return (
		<ContainerLayout>
			<section className={styles.gallery}>
				<div className={styles.gallery__header}>
					<SectionHeader
						text="Нравятся яркие купальники и вдохновляющие пейзажи?"
						className={styles.gallery__title}
					/>
					<p className={styles.gallery__description}>
						Подписывайтесь на наш инстаграм, там все и даже больше
					</p>
					<Button mode="stroke" className={styles.gallery__button}>
						Подписаться на инстаграм
					</Button>
				</div>
				<div className={styles.gallery__body}>
					{gallery.map((image, index) => (
						<div
							key={index}
							className={styles.gallery__image}
							onClick={scaleImage.bind(null, image)}
						>
							<img src={image} alt="" />
							<span>Увеличить +</span>
						</div>
					))}
				</div>
				<Modal {...modal} className={styles.gallery__modal}>
					{load && <Loading />}
					<img
						ref={imageRef}
						src={image}
						alt="gallery item"
						onLoad={() => setLoad(false)}
					/>
				</Modal>
			</section>
		</ContainerLayout>
	)
}

export default Gallery
