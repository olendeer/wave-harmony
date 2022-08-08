import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTrust = createAsyncThunk(
    'trust/fetchTrust',
    async () =>  await Api.fetchTrust()
)


export { fetchTrust }