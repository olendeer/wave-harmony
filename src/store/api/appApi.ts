import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "@/locale/i18n";

import Storage from "@/services/StorageService";
import Api from "@/services/ApiService";

import actions from "../actions";

import { Lang } from "@/shared/types";
import { RootState } from "..";




const init = createAsyncThunk(
    'app/init',
    async (_, { rejectWithValue, dispatch }) => {
        // get theme
        try{
            const cookie = Storage.getCookie()
            dispatch(actions.changeOpenCookie(!cookie))

            const id = Storage.getUser()
            if(id) {
                const response = await Api.fetchUserById(id)
                Storage.setWishList(response.wishList)
                return response
            }
            const wishList = Storage.getWishList()
            dispatch(actions.setWishList(wishList))
            throw new Error('Not found user or not auth')
        } catch (e) {
            return rejectWithValue(null)
        }
    }
)

const setIsCheckCookie = createAsyncThunk(
    'app/setIsCheckCookie',
    async (_, { dispatch }) => {
        try{
            Storage.setCookie(true)
            dispatch(actions.changeOpenCookie(false))
        } catch (error) {
            console.log(error)
        }

    }
)

const toggleProductToWishList = createAsyncThunk(
    'app/toggleProductToWishList',
    async (id: number, { getState }) => {
        let wishList = (getState() as RootState).app.wishList
        let user = (getState() as RootState).app.user
        try{

            if(wishList.includes(id)){
                wishList = wishList.filter(item => item !== id)
            } else {
                wishList = [...wishList, id]
            }
            if(user){
                Api.updateWishList(wishList, user.id)
            }
            Storage.setWishList(wishList)

            return wishList
        } catch (error) {
            console.log(error)
            return wishList
        }

    }
)

const removeProductsFromWishList = createAsyncThunk(
    'app/removeProductsFromWishList',
    async (ids: number[], { getState }) => {
        let wishList = (getState() as RootState).app.wishList
        let user = (getState() as RootState).app.user
        try{
            wishList = wishList.filter(item => !ids.includes(item))

            if(user){
                Api.updateWishList(wishList, user.id)
            }
            Storage.setWishList(wishList)

            return wishList
        } catch (error) {
            console.log(error)
            return wishList
        }

    }
)

const changeLang = createAsyncThunk(
    'app/changeLang',
    async (lang: Lang | undefined, thunkAPI) => {

        if(lang) {
            i18n.changeLanguage(lang)
            return lang
        }

        const language = (thunkAPI.getState() as RootState).app.lang
        return language === 'en' ? 'ru' : 'en'
    }
)


export { init, changeLang, toggleProductToWishList, removeProductsFromWishList, setIsCheckCookie }