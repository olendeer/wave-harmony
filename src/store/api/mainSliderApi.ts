import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchMainSlider = createAsyncThunk(
    'products/fetchMainSlider',
    async () => await Api.fetchMainSlider()
)


export { fetchMainSlider }