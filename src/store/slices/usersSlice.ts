import { createSlice } from '@reduxjs/toolkit'
import { IUserSlice } from '../types'


const initialState: IUserSlice = {
    
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {  },
    extraReducers: (builder) => {
        builder
    },
})

export const actions = usersSlice.actions

export default usersSlice.reducer