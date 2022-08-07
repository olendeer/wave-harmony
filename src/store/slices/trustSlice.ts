import { createSlice } from '@reduxjs/toolkit'
import { ITrustSlice } from '../types'

import { fetchTrust } from '../api/trustApi'


const initialState: ITrustSlice = {
    trusts: [],
}

const productSlice = createSlice({
    name: 'trust',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTrust.fulfilled, (state, action) => {
            state.trusts = action.payload
        })
        .addCase(fetchTrust.rejected, (state, action) => {

        })
    },
})


export default productSlice.reducer