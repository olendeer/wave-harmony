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
export const cookieModalSelector = (state: RootState) => state.modal.cookie

// info
export const contactsSelector = (state: RootState) => state.info.contacts
export const aboutSelector = (state: RootState) => state.info.about

export const deliverySelector = (state: RootState) => state.info.delivery
export const deliverySelectSelector = (state: RootState) => state.info.delivery.find(item => item.select)
export const deliverySelectIndexSelector = (state: RootState) => state.info.delivery.findIndex(item => item.select)

export const partnersSelector = (state: RootState) => state.info.partners

//filter
export const viewSelector = (state: RootState) => state.filter.view

export const sortSelector = (state: RootState) => state.filter.sort
export const isSortSelector = (state: RootState) => state.filter.sort !== null

export const availabilityFilterSelector = (state: RootState) => state.filter.filter.availability
export const IsAvailabilityFilterSelector = (state: RootState) => state.filter.filter.availability !== null
export const colorFilterSelector = (state: RootState) => state.filter.filter.color
export const IsColorFilterSelector = (state: RootState) => state.filter.filter.color.length > 0
export const styleFilterSelector = (state: RootState) => state.filter.filter.style
export const IsStyleFilterSelector = (state: RootState) => state.filter.filter.style !== null
export const sleevesFilterSelector = (state: RootState) => state.filter.filter.sleeves
export const IsSleevesFilterSelector = (state: RootState) => state.filter.filter.sleeves !== null
export const sizeFilterSelector = (state: RootState) => state.filter.filter.size
export const IsSizeFilterSelector = (state: RootState) => state.filter.filter.size.length > 0
export const priceFilterSelector = (state: RootState) => state.filter.filter.price
export const IsPriceFilterSelector = (state: RootState) => {
    const price = state.filter.filter.price
    if(price.min !== 0 || price.max !== 20000) return true
    return false
}

export const isFilterSelector = createSelector(
    [isSortSelector, IsAvailabilityFilterSelector, IsColorFilterSelector, IsStyleFilterSelector, IsSleevesFilterSelector, IsSizeFilterSelector, IsPriceFilterSelector],
    (...isFilters) => isFilters.find(item => item === true)
)
