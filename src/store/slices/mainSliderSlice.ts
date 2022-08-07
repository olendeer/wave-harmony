import { createSlice } from '@reduxjs/toolkit'
import { IMainSliderSlice } from '../types'

import { fetchMainSlider } from '../api/mainSliderApi'

const initialState: IMainSliderSlice = {
    slides: []
}

const mainSliderSlice = createSlice({
    name: 'mainSlider',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMainSlider.fulfilled, (state, action) => {
            state.slides = action.payload
        })
        .addCase(fetchMainSlider.rejected, (state, action) => {

        })
    },
})


export default mainSliderSlice.reducer