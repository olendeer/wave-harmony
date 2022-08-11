import { RootState } from "@/store";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { ChangeEvent, Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

export type ChildrenProp = ReactElement | ReactElement[] | string | string[] | JSX.Element | ReactNode

export type ChangeInput = (event: ChangeEvent<HTMLInputElement>) => void

export type PriceConvert = (value: number) => string
export type SaleConvert = (value: number) => string
export type PriceWithSaleConvert = (value: number, sale: number) => string

export type IdsFromParamsGenerate = (ids: number[]) => string

export type UseOutClickHandlerType = Dispatch<SetStateAction<boolean>> | ((value: boolean) => void)


export type Lang = 'ru' | 'en'
export type Theme = 'light' | 'dark'

export type SelectorType<T> = (state: RootState) => T
export type DataActionType<T> = () => AsyncThunkAction<T, void, {}>