import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTrust = createAsyncThunk(
    'products/fetchTrust',
    async () =>  await Api.fetchTrust()
)


export { fetchTrust }