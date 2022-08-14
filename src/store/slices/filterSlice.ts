import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterSlice, View } from '../types'


const initialState: IFilterSlice = {
    view: 4
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: { 
        changeView(state, action: PayloadAction<View>) {
            state.view = action.payload
        }
    },
    extraReducers: (builder) => {
        // builder
        
    },
})

export const actions = filterSlice.actions

export default filterSlice.reducer