import { ChangeEvent, ReactElement, ReactNode } from "react";

export type ChildrenProp = ReactElement | ReactElement[] | string | string[] | JSX.Element | ReactNode

export type ChangeInput = (event: ChangeEvent<HTMLInputElement>) => void

export type PriceConvert = (value: number) => string
export type SaleConvert = (value: number) => string
export type PriceWithSaleConvert = (value: number, sale: number) => string


export type Lang = 'ru' | 'en'
export type Theme = 'light' | 'dark'