import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInfoSlice } from '../types'

import { fetchAbout, fetchContacts, fetchDelivery, fetchPartners } from '../api/infoApi'
import { IAbout, IContacts, IDelivery, IPartner } from '@/models/info'

const initialState: IInfoSlice = {
    about: null,
    contacts: null,
    delivery: [],
    partners: []
}

const infoSlice = createSlice({
    name: 'infoSlice',
    initialState,
    reducers: {
        selectDelivery(state, action: PayloadAction<number>){
            state.delivery = state.delivery.map((item, index) => index === action.payload ? ({...item, select: true}) : ({...item, select: false}))
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAbout.fulfilled, (state, action: PayloadAction<IAbout>) => {
            state.about = action.payload
        })
        .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<IContacts>) => {
            state.contacts = action.payload
        })
        .addCase(fetchDelivery.fulfilled, (state, action: PayloadAction<{select: boolean, item: IDelivery}[]>) => {
            state.delivery = action.payload
        })
        .addCase(fetchPartners.fulfilled, (state, action: PayloadAction<IPartner[]>) => {
            state.partners = action.payload
        })
    },
})

export const actions = infoSlice.actions


export default infoSlice.reducer