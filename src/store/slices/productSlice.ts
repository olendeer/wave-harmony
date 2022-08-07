import { createSlice } from '@reduxjs/toolkit'
import { IProductSlice } from '../types'

import { fetchProducts, fetchPopularProducts } from '../api/productApi'


const initialState: IProductSlice = {
    products: [],
    productsPopular: [] 
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
    },
})


export default productSlice.reducer