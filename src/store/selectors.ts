import { RootState } from ".";


export const popularProductsSelector = (state: RootState) => state.products.productsPopular

export const productsSelector = (state: RootState) => state.products.products

export const trustSelector = (state: RootState) => state.trust.trusts

