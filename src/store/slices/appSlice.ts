import { IAuthResponse } from '@/services/ApiService/UserApi'
import { Lang, Theme } from '@/shared/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeLang } from '../api/appApi'
import { authUser, registerUser } from '../api/userApi'
import { IAppSlice } from '../types'


const initialState: IAppSlice = {
    lang: 'ru',
    theme: 'light',
    accessToken: null,
    user: null
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
        }
    },
    extraReducers: (builder) => {
        builder
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