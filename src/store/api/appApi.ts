import { Lang } from "@/shared/types";
import { RootState } from "..";
import { createAsyncThunk } from "@reduxjs/toolkit";
 
import i18n from "@/locale/i18n";

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


export { changeLang }