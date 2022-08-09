import { useAppSelector } from "@/store/hooks"
import { themeSelector } from "@/store/selectors"


export const useTheme = () => {
    const theme = useAppSelector(themeSelector)

    return theme
}