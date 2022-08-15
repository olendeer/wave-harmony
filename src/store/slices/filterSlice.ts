import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterSlice, SortType, View } from '../types'


const initialState: IFilterSlice = {
    view: 4,
    sort: null,
    filter: {
        availability: null,
        color: 'multiply',
        style: null,
        sleeves: null,
        size: null,
        price: {
            min: 0,
            max: 20000
        }
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: { 
        changeView(state, action: PayloadAction<View>) {
            state.view = action.payload
        },
        changeSort(state, action: PayloadAction<SortType>){
            state.sort = action.payload
        },
        changeFilter(state, action: PayloadAction<{ [k in keyof IFilterSlice['filter']]?: IFilterSlice['filter'][k] }>){
            state.filter = { ...state.filter, ...action.payload }
        },
    },
    extraReducers: (builder) => {
        // builder
        
    },
})

export const actions = filterSlice.actions

export default filterSlice.reducer