import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";


// products
export const popularProductsSelector = (state: RootState) => state.products.productsPopular
export const productsSelector = (state: RootState) => state.products.products
export const productsWishSelector = (state: RootState) => state.products.productsWish
export const IsProductsWishSelectedSelector = (state: RootState) => !!state.products.productsWish.filter(item => item.select).length
export const productsWishSelectedSelector = (state: RootState) => state.products.productsWish.filter(item => item.select).map(item => item.product.id)

export const isSelectedProductInWishListSelector = createSelector(
    [
        productsWishSelector,
        (_, id) => id
    ],
    (products, id) => !!products.find(item => item.product.id === id && item.select)
)

// other
export const trustSelector = (state: RootState) => state.trust.trusts
export const mainSliderSelector = (state: RootState) => state.mainSlider.slides
export const gallerySelector = (state: RootState) => state.gallery.images

// app
export const themeSelector = (state: RootState) => 'theme--' + state.app.theme
export const langSelector = (state: RootState) => state.app.lang
export const userSelector = (state: RootState) => state.app.user

export const wishListSelector = (state: RootState) => state.app.wishList
export const wishListLengthSelector = (state: RootState) => state.app.wishList.length

// modals 
export const authModalSelector = (state: RootState) => state.modal.auth
export const registerModalSelector = (state: RootState) => state.modal.register
export const remindModalSelector = (state: RootState) => state.modal.remind
export const wishListModalSelector = (state: RootState) => state.modal.wishList
export const finishAuthModalSelector = (state: RootState) => state.modal.finishAuth

// info
export const contactsSelector = (state: RootState) => state.info.contacts
export const aboutSelector = (state: RootState) => state.info.about

export const deliverySelector = (state: RootState) => state.info.delivery
export const deliverySelectSelector = (state: RootState) => state.info.delivery.find(item => item.select)
export const deliverySelectIndexSelector = (state: RootState) => state.info.delivery.findIndex(item => item.select)

export const partnersSelector = (state: RootState) => state.info.partners



