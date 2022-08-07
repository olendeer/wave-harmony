import { createSlice } from '@reduxjs/toolkit'
import { IGallerySlice } from '../types'

import { fetchGallery } from '../api/galleryApi'

const initialState: IGallerySlice = {
    images: []
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGallery.fulfilled, (state, action) => {
            state.images = action.payload
        })
        .addCase(fetchGallery.rejected, (state, action) => {

        })
    },
})


export default gallerySlice.reducer