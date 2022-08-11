import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductSlice } from '../types'

import { fetchProducts, fetchPopularProducts, fetchWishProducts } from '../api/productApi'
import { IProduct } from '@/models/product'


const initialState: IProductSlice = {
    products: [],
    productsPopular: [],
    productsWish: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: { },
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
    },
})


export default productSlice.reducer