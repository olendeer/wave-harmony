import { Lang, Theme } from '@/shared/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeLang } from '../api/appApi'
import { IAppSlice } from '../types'


const initialState: IAppSlice = {
    lang: 'ru',
    theme: 'light'
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
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(changeLang.fulfilled, (state, action: PayloadAction<Lang>) => {
            state.lang = action.payload
        })
    },
})

export const actions = appSlice.actions

export default appSlice.reducer