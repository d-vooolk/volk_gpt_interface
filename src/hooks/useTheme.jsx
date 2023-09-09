import {useLayoutEffect, useState} from "react";
import {DARK_THEME, LIGHT_THEME, SYSTEM_TYPE, THEME_KEY} from "../constants/colorTheme";

const setDefaultThemeProps = () => {
    const hasSavedTheme = localStorage.getItem('theme');

    if (hasSavedTheme) {
        return ({
            theme: JSON.parse(hasSavedTheme)?.theme,
            type: JSON.parse(hasSavedTheme)?.type
        });
    }

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const themeIdent = prefersDarkScheme ? DARK_THEME : LIGHT_THEME;
    const themeProps = { theme: themeIdent, type: SYSTEM_TYPE }
    localStorage.setItem(THEME_KEY, JSON.stringify(themeProps));
    return themeProps;
}

export const useTheme = () => {
    const [theme, setTheme] = useState(setDefaultThemeProps());

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme.theme);
    }, [theme]);

    return {theme, setTheme};
}