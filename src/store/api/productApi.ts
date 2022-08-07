import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => await Api.fetchProducts()
)

const fetchPopularProducts = createAsyncThunk(
    'products/fetchPopularProducts',
    async () => await Api.fetchPopularProducts()
)


export { fetchProducts, fetchPopularProducts }