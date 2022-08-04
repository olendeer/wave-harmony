import { ChangeEvent, ReactElement } from "react";

export type ChildrenProp = ReactElement | ReactElement[] | string

export type ChangeInput = (event: ChangeEvent<HTMLInputElement>) => void

export type PriceConvert = (value: number) => string
export type SaleConvert = (value: number) => string
export type PriceWithSaleConvert = (value: number, sale: number) => string

export interface IProduct {
    images: string[]
    fav : boolean
    price: number
    type: string
    sizes: string[]
    sale: number | null
}