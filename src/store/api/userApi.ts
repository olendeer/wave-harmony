import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import Api from "@/services/ApiService";
import { IRegisterUserRequest, ISingInUserRequest } from "@/services/ApiService/UserApi";
import Storage from "@/services/StorageService";
import actions from "../actions";






const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async (id: number) =>  await Api.fetchUserById(id)
)

const authUser = createAsyncThunk(
    'user/authUser',
    async ({ email, password, remind }: ISingInUserRequest & { remind: boolean }, { rejectWithValue, dispatch }) => {
        // дописать запоминание пользователя
        try {
            const response = await Api.authUser({email, password})
            const wishList = response.user.wishList
            Storage.setWishList(wishList)
            dispatch(actions.setWishList(wishList))
            if(remind) Storage.setUser(response.user.id)
            return response
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        } 
    }
)

const registerUser = createAsyncThunk(
    'user/registerUser',
    async (data: IRegisterUserRequest, { rejectWithValue }) => {
        try {
            return await Api.registerUser(data)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
        }
    }
)

export { fetchUserById, authUser, registerUser }