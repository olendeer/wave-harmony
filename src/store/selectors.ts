import { RootState } from ".";

// products
export const popularProductsSelector = (state: RootState) => state.products.productsPopular
export const productsSelector = (state: RootState) => state.products.products


// other
export const trustSelector = (state: RootState) => state.trust.trusts
export const mainSliderSelector = (state: RootState) => state.mainSlider.slides
export const gallerySelector = (state: RootState) => state.gallery.images

// app
export const themeSelector = (state: RootState) => 'theme--' + state.app.theme
export const langSelector = (state: RootState) => state.app.lang
export const userSelector = (state: RootState) => state.app.user

// modals 
export const authModalSelector = (state: RootState) => state.modal.auth
export const registerModalSelector = (state: RootState) => state.modal.register
export const remindModalSelector = (state: RootState) => state.modal.remind




