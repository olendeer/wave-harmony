import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import actions from "../actions";

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => await Api.fetchProducts()
)

const fetchPopularProducts = createAsyncThunk(
    'products/fetchPopularProducts',
    async () => await Api.fetchPopularProducts()
)

const fetchWishProducts = createAsyncThunk(
    'products/fetchWishProducts',
    async (_, { dispatch, getState, rejectWithValue }) => {
        try {
            dispatch( actions.changeOpenWishList(true) )
            const wishList = (getState() as RootState).app.wishList
            const response = await Api.fetchWishProducts(wishList)
            return response
        } catch (error) {
            return rejectWithValue([])
        }
    }
)

const fetchProductsByFilter = createAsyncThunk(
    'products/fetchProductsByFilter',
    async (_, { getState }) => {
        const filters = (getState() as RootState).filter
        return await Api.fetchProducts()
    }
)

export { fetchProducts, fetchPopularProducts, fetchWishProducts, fetchProductsByFilter }