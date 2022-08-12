import Api from "@/services/ApiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchContacts = createAsyncThunk(
    'info/fetchContacts',
    async () => await Api.fetchContacts()
)

const fetchDelivery = createAsyncThunk(
    'info/fetchDelivery',
    async () => {
        const response = await Api.fetchDelivery()
        return response.map((item, index) => ({select: index === 0 ? true : false, item}))
    }
)

const fetchAbout = createAsyncThunk(
    'info/fetchAbout',
    async () => await Api.fetchAbout()
)

const fetchPartners = createAsyncThunk(
    'info/fetchPartners',
    async () => await Api.fetchPartners()
)


export { fetchContacts, fetchDelivery, fetchAbout, fetchPartners }