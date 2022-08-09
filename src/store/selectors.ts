import { RootState } from ".";


export const popularProductsSelector = (state: RootState) => state.products.productsPopular
export const productsSelector = (state: RootState) => state.products.products

export const trustSelector = (state: RootState) => state.trust.trusts

export const mainSliderSelector = (state: RootState) => state.mainSlider.slides

export const gallerySelector = (state: RootState) => state.gallery.images

export const themeSelector = (state: RootState) => 'theme--' + state.app.theme
export const langSelector = (state: RootState) => state.app.lang

// modals 
export const authModalSelector = (state: RootState) => state.modal.auth




