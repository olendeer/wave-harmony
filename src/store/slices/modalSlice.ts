import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authUser, registerUser } from '../api/userApi'
import { IModalSlice } from '../types'


const initialState: IModalSlice = {
    auth: false,
    register: false,
    remind: false,
    wishList: false
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
        },
        changeOpenWishList(state, action: PayloadAction<boolean>) {
            state.wishList = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(authUser.fulfilled, (state) => {
            state.auth = false
        })
        .addCase(authUser.rejected, (state) => {
            state.auth = false
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.register = false
        })
        .addCase(registerUser.rejected, (state) => {
            state.register = false
        })
    },
})

export const actions = modalSlice.actions

export default modalSlice.reducer