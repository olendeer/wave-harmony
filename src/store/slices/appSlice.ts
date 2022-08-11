import { IAuthResponse } from '@/services/ApiService/UserApi'
import { Lang, Theme } from '@/shared/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeLang, init, toogleProductToWishList } from '../api/appApi'
import { authUser, registerUser } from '../api/userApi'
import { IAppSlice } from '../types'


const initialState: IAppSlice = {
    lang: 'ru',
    theme: 'light',
    accessToken: null,
    user: null,
    wishList: []
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: { 
        changeTheme(state, action: PayloadAction<Theme | undefined>) {
            if(action.payload){
                state.theme = action.payload
                return 
            }
            state.theme = state.theme  === 'light' ? 'dark' : 'light'
        },
        setAccessToken(state, action: PayloadAction<string>){
            state.accessToken = action.payload
        },
        // addProductToWishList(state, action: PayloadAction<number>) {
        //     state.wishList.push(action.payload)
        // },
        // removeProductToWishList(state, action: PayloadAction<number>) {
        //     state.wishList = state.wishList.filter(item => item !== action.payload)
        // },
        setWishList(state, action: PayloadAction<number[]>) {
            state.wishList = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(init.fulfilled, (state, action) => {
            state.user = action.payload
            if(state.user){
                state.wishList = state.user.wishList
            }
            console.log('init app')
        })
        .addCase(toogleProductToWishList.fulfilled, (state, action: PayloadAction<number[]>) => {
            state.wishList = action.payload
            if(state.user){
                state.user.wishList = state.wishList
            }
        })
        .addCase(changeLang.fulfilled, (state, action: PayloadAction<Lang>) => {
            state.lang = action.payload
        })
        .addCase(authUser.fulfilled, (state, action: PayloadAction<IAuthResponse>) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
        })
        .addCase(authUser.rejected, (_, action) => {
            console.log(action.payload)
        })
        .addCase(registerUser.rejected, (_, action) => {
            console.log(action.payload)
        })
    },
})

export const actions = appSlice.actions

export default appSlice.reducer