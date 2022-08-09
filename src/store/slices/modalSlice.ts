import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModalSlice } from '../types'


const initialState: IModalSlice = {
    auth: false,
    register: false,
    remind: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: { 
        changeOpenAuth(state, action: PayloadAction<boolean>) {
            state.auth = action.payload
            state.register = false
            state.remind = false
        },
        changeOpenRegister(state, action: PayloadAction<boolean>) {
            state.register = action.payload
            state.auth = false
            state.remind = false
        },
        changeOpenRemind(state, action: PayloadAction<boolean>) {
            state.remind = action.payload
            state.register = false
            state.auth = false
        }
    },
})

export const actions = modalSlice.actions

export default modalSlice.reducer