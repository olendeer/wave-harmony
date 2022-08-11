import { IProduct } from "@/models/product"

type Mode = 'standart' | 'wishlist'

export interface ICardProps{
    size?: string
    product: IProduct
    mode?: Mode
}