import {CURRENT_THEME_KEY, SYSTEM_THEME_KEY} from "../constants/colorTheme";

export const checkTheme = () => {
    const currentTheme = sessionStorage.getItem(CURRENT_THEME_KEY);
    const systemTheme = sessionStorage.getItem(SYSTEM_THEME_KEY);

    return currentTheme ? currentTheme : systemTheme;
}