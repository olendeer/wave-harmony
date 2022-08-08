import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchGallery = createAsyncThunk(
    'gallery/fetchGallery',
    async () => await Api.fetchGallery()
)


export { fetchGallery }