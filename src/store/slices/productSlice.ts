import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductSlice } from '../types'

import { fetchProducts, fetchPopularProducts, fetchWishProducts } from '../api/productApi'
import { IProduct } from '@/models/product'
import { removeProductsFromWishList, toggleProductToWishList } from '../api/appApi'


const initialState: IProductSlice = {
    products: [],
    productsPopular: [],
    productsWish: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: { 
        toggleSelectProductInWishList(state, action: PayloadAction<number>){
            state.productsWish = state.productsWish.map(item => {
                if(item.product.id === action.payload){
                    item.select = !item.select
                    return item
                } else {
                    return item
                }
            })
        },
        selectAllProductsInWishList(state) {
            state.productsWish = state.productsWish.map(item => ({...item, select: true}))
        },
        removeSelectAllProductsInWishList(state) {
            state.productsWish = state.productsWish.map(item => ({...item, select: false}))
        },
        clearProductsWishList(state) {
            state.productsWish = []
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {

        })
        .addCase(fetchPopularProducts.fulfilled, (state, action) => {
            state.productsPopular = action.payload
        })
        .addCase(fetchPopularProducts.rejected, (state, action) => {

        })
        .addCase(fetchWishProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.productsWish = action.payload.map(item => ({ select: false, product: item }))
        })
        .addCase(toggleProductToWishList.fulfilled, (state, action: PayloadAction<number[]>) => {
            state.productsWish = state.productsWish.filter(item => action.payload.includes(item.product.id))
        })
        .addCase(removeProductsFromWishList.fulfilled, (state, action: PayloadAction<number[]> ) => {
            state.productsWish = state.productsWish.filter(item => action.payload.includes(item.product.id))
        })
    },
})

export const actions = productSlice.actions


export default productSlice.reducer